import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

// Use a mock stripe key if none is provided for testing
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock', {
  apiVersion: '2023-10-16',
});

const app = express();
app.use(cors());

// Webhook endpoint needs raw body
app.post(
  '/api/webhook',
  express.raw({ type: 'application/json' }),
  (req, res) => {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      // If we don't have a real webhook secret, we skip signature validation for mock local testing
      if (process.env.STRIPE_WEBHOOK_SECRET) {
        event = stripe.webhooks.constructEvent(
          req.body,
          sig,
          process.env.STRIPE_WEBHOOK_SECRET
        );
      } else {
        // Mock parsing for local testing without actual Stripe signatures
        event = JSON.parse(req.body.toString());
      }
    } catch (err) {
      console.error('Webhook Error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      const fulfilmentType = session.metadata?.fulfilmentType;
      const internalId = session.metadata?.internalId;
      const customerEmail = session.customer_details?.email;

      console.log(`✅ Checkout completed for document ${internalId} (${fulfilmentType})`);

      // Business logic based on fulfilment type
      if (fulfilmentType === 'instant_download') {
        createEntitlement(internalId, customerEmail);
      } else if (fulfilmentType === 'tailored_service') {
        createOrder(internalId, customerEmail);
      } else if (fulfilmentType === 'hybrid') {
        createEntitlement(internalId, customerEmail);
        createOrder(internalId, customerEmail);
      }
    }

    res.json({ received: true });
  }
);

// Standard JSON parsing for remaining API routes
app.use(express.json());

// Mock databases
const entitlements = [];
const orders = [];

function createEntitlement(documentId, email) {
  const entitlement = {
    id: `ent_${Date.now()}`,
    documentId,
    email,
    status: 'granted',
    createdAt: new Date().toISOString(),
  };
  entitlements.push(entitlement);
  console.log('🎉 Document Entitlement granted:', entitlement);
}

function createOrder(documentId, email) {
  const order = {
    id: `ord_${Date.now()}`,
    documentId,
    email,
    status: 'awaiting_brief',
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  console.log('📋 Document Order created (awaiting_brief):', order);
}

app.post('/api/create-checkout-session', async (req, res) => {
  const { internalId, stripePriceId, fulfilmentType } = req.body;

  try {
    // In a real app we'd construct standard success/cancel URLs based on the origin
    const origin = req.headers.origin || 'http://localhost:5173';

    // To mock in absence of true keys:
    if (process.env.STRIPE_SECRET_KEY === undefined || process.env.STRIPE_SECRET_KEY === '') {
      console.log(`Mocking checkout session for ${internalId} with fulfilmentType ${fulfilmentType}`);
      // Return a simulated mock successful checkout redirect URL
      return res.json({
        url: `${origin}/document-nucleus/overview?demo_success=true&mock=${fulfilmentType}`,
      });
    }

    // Real Stripe Create Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/document-nucleus/overview?success=true`,
      cancel_url: `${origin}/document-nucleus/product/${internalId}`,
      metadata: {
        internalId,
        fulfilmentType,
      },
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// ── Stripe Customer Billing Portal ──────────────────────────────────────────
// Called by the "Manage Billing" button in the portal and the Subscription page.
// If no real Stripe key is configured, returns a mock redirect for local dev.
app.post('/api/create-billing-portal-session', async (req, res) => {
  const { customerId } = req.body;

  if (!customerId) {
    return res.status(400).json({ error: 'customerId is required' });
  }

  // Dev mock — returns the portal subscription page so UX can be verified locally
  if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_mock') {
    const origin = req.headers.origin || 'http://localhost:5173';
    console.log(`[mock] Billing portal session for customer: ${customerId}`);
    return res.json({ url: `${origin}/portal/subscription?mock_billing=true` });
  }

  try {
    const origin = req.headers.origin || 'http://localhost:5173';
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${origin}/portal/membership`,
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating billing portal session:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 RBP Backend running on port ${PORT}`);
});
