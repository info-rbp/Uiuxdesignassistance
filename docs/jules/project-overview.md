# Shopify design project overview for Jules

## Purpose

This repository is intended to hold the Shopify storefront design and implementation work for Remote Business Partner's Shopify presence. Its role is to translate the RBP service model into a working Shopify theme experience, with reusable storefront templates, Liquid sections, page layouts, product templates, onboarding routes, and supporting documentation that can be safely reviewed and deployed.

The immediate purpose of this document is to give Jules high-level project context before it makes future repository changes. This file should help Jules understand what the Shopify design work is trying to achieve, which areas are commercially important, and which pages, templates, and elements are likely to need careful updates.

## Business context

Remote Business Partner is building a service-commerce storefront. The Shopify store should not behave like a simple catalogue of physical products. It needs to present advisory and business-support services as clear, purchasable offers with defined outcomes, pricing, scope boundaries, and onboarding flows.

The current priority area is the Core Services category. This includes the following service pages and offers:

- Core Services
- Business Health Check
- Business Advisor
- Decision Desk
- The Fixer
- Dispute Resolution

The intended customer journey is:

```text
Core Services hub
-> Individual Core Service landing page
-> Specific Shopify product
-> Checkout
-> Service-specific onboarding/intake
-> Internal fulfilment workflow
```

Each Core Service should explain:

- what the service is
- what customer problem it solves
- who it is for
- who it is not for
- what the customer receives
- how the process works after purchase
- what information is collected during onboarding
- what the next step is

The store needs to make the service pathway feel deliberate and trustworthy. A customer should not have to infer how the service works from scattered copy, generic product pages, or vibes, because apparently commerce still requires clarity.

The main business requirement is to create a complete service-commerce system for these Core Services. The storefront must connect content, product purchase, onboarding, and internal delivery handoff.

## Application context

This repository appears to support a Shopify storefront/theme implementation. Jules should expect the project to contain some mix of Shopify theme files, Liquid sections, JSON templates, snippets, assets, CSS, JavaScript, and documentation.

The implementation should be treated as a Shopify theme/design-system repository rather than a generic web application. Future changes should preserve Shopify compatibility and avoid introducing patterns that conflict with Shopify theme architecture.

The most relevant storefront areas are likely to include:

- page templates for service landing pages
- product templates for service products
- collection or hub templates for Core Services
- reusable Liquid sections for heroes, cards, FAQs, process steps, comparison blocks, and calls to action
- intake/onboarding page templates and form sections
- theme assets used by service pages and product pages
- navigation, footer, and cross-linking elements that connect Core Services pages to products

Expected or likely files and patterns Jules may need to inspect before making implementation changes include:

- `templates/page.core-services.json`
- `sections/rbp-core-services-landing.liquid`
- `templates/page.service.json`
- `sections/rbp-service-page.liquid`
- `templates/product.core-service.json`
- `sections/rbp-core-service-product.liquid`
- `templates/page.core-intake.json`
- `sections/rbp-core-intake-form.liquid`
- `templates/page.core-post-checkout.json`
- `sections/rbp-core-post-checkout.liquid`
- `templates/page.core-order-confirmation.json`
- `sections/rbp-core-order-confirmation.liquid`
- any snippets used for service cards, service CTAs, FAQ blocks, price or member-access messaging, and onboarding links
- any assets, CSS, or JavaScript that support the Core Services page layout and responsive behaviour

These filenames may not all exist yet. Jules should inspect the repository structure first and align with the existing naming conventions rather than inventing a parallel structure. Humanity already has enough duplicate templates pretending to be architecture.

## Key goals

Jules should keep the following goals in mind when making future changes:

1. Build a coherent Core Services storefront journey.

   The Core Services area should function as a connected path from explanation to purchase to onboarding. The customer journey should be clear at every step.

2. Create or complete dedicated landing pages for each Core Service.

   Each service needs a landing page that explains the offer in plain language. The priority pages are:

   - `/pages/core-services`
   - `/pages/business-health-check`
   - `/pages/business-advisor`
   - `/pages/decision-desk`
   - `/pages/the-fixer`
   - `/pages/dispute-resolution-support` or the equivalent approved Dispute Resolution path

3. Connect each landing page to the correct Shopify product.

   Each Core Service should route to a specific Shopify product where appropriate:

   - Business Health Check
   - Business Advisor
   - Decision Desk
   - The Fixer
   - Dispute Resolution, only if it is intentionally treated as a standalone product

   Dispute Resolution may be better treated as a support pathway that routes into Business Advisor, Decision Desk, or The Fixer unless the business decides to productise it directly.

4. Preserve a clear distinction between service pages and product pages.

   Landing pages should educate and qualify. Product pages should sell the service, define inclusions, explain exclusions, and prepare the customer for checkout and onboarding.

5. Finalise service-specific onboarding routes.

   Each service should have a clear intake/onboarding process after checkout. Intake forms should collect the information needed to fulfil the service and should be connected to the intended backend or operational handoff.

6. Keep Core Services commercially clear.

   Every service page and product page should make the following clear:

   - price or quote logic
   - what is included
   - what is not included
   - expected process
   - customer responsibilities
   - next steps after purchase
   - member access or discount logic, if applicable

7. Make the design reusable.

   Use reusable sections and snippets where sensible. Avoid copy-pasting large service-page structures into one-off files unless the repository already uses that approach.

8. Maintain visual consistency.

   Core Services pages should share a consistent design language, including hero treatment, card styling, CTA hierarchy, process blocks, FAQ layout, spacing, typography, and responsive behaviour.

9. Keep the store deployable.

   Shopify theme syntax, Liquid logic, schema blocks, JSON template structure, and asset references must remain valid.

10. Support future service expansion.

   The final structure should make it possible to add additional RBP service categories later without rewriting the Core Services system.

## Important constraints

Jules should follow these constraints when working in this repository:

- Read `AGENTS.md` before making changes.
- Preserve existing behaviour unless the task explicitly requires changing it.
- Do not perform unrelated refactors.
- Do not rename templates, sections, snippets, or assets unless required by the task.
- Do not remove existing settings, schema blocks, metafield assumptions, or Shopify theme configuration without confirming they are unused.
- Keep changes small, reviewable, and directly tied to the requested task.
- Maintain Shopify Liquid compatibility.
- Maintain valid Shopify JSON template structure.
- Preserve responsive behaviour across desktop and mobile.
- Avoid introducing app-specific JavaScript frameworks unless the repository already uses them.
- Avoid hard-coding live production IDs, tokens, private URLs, or customer data.
- Avoid changing checkout assumptions unless the task is explicitly about checkout or post-purchase flow.
- Avoid changing product pricing, product handles, page handles, or service classification without explicit instruction.
- Treat Dispute Resolution carefully because it may sound legal. If it is implemented as content or product copy, language should describe commercial issue support and should not imply legal advice or legal representation.
- Keep onboarding language service-specific and practical.
- Keep accessibility in mind when updating visual components, including heading order, readable contrast, useful link text, and keyboard-friendly controls.
- Prefer existing design tokens, spacing patterns, CSS classes, snippets, and sections over new one-off styling.
- Do not add additional Jules planning files unless a future task specifically asks for them.

## How Jules should use this file

Jules should read this file alongside `AGENTS.md` before starting future implementation tasks.

This file provides the business and storefront context. `AGENTS.md` should remain the source for repository-specific operating rules, build/test expectations, coding standards, and workflow instructions.

Before making changes, Jules should:

1. Read `AGENTS.md`.
2. Read this file.
3. Inspect the existing theme structure.
4. Identify the smallest set of files needed for the requested task.
5. Confirm whether the change affects pages, templates, sections, snippets, assets, product templates, or onboarding forms.
6. Make only the required changes.
7. Keep the final diff easy to review.

For Core Services work, Jules should pay particular attention to the relationship between:

```text
Landing page
-> Product page
-> Checkout expectation
-> Intake/onboarding page
-> Internal fulfilment handoff
```

The final storefront should explain the service, sell the service, onboard the customer, and support fulfilment without making the customer decode the business model like an escape room with invoices.
