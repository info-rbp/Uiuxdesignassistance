# Remote Business Partner Public Website Frontend Implementation Guide

## Purpose

Implement the enhanced **public-facing website** first, using the current React/Vite repository as the starting point.

This guide is intended to be pasted into Firebase Studio or the project workspace and used as the implementation brief.

The work in this pass is **frontend only**.

Do **not** implement backend logic, Firebase Auth, Firestore, admin data management, member portal workflows, payment processing, or real form submission logic yet. Build the public site so it is ready to connect to those systems later.

The goal is:

```text
Static frontend content now
Backend-managed records later
Same routes
Same data model
Same public user journey
```

---

# 1. Current application state to respect

The repository is currently a Vite React application using React Router.

Important existing files:

```text
src/app/routes.tsx
src/app/components/Navbar.tsx
src/app/pages/*
src/app/pages/portal/*
src/app/pages/admin/*
package.json
```

## 1.1 Current routing state

`src/app/routes.tsx` already defines these public routes:

```text
/
about
contact
help
sign-in
dashboard

services
business-advisor
docushare
applications-legacy

document-nucleus/overview
document-nucleus/category/:id
document-nucleus/product/:id

on-demand
on-demand/business-advisor
on-demand/services
on-demand/documents
on-demand/decision-desk
on-demand/the-fixer

managed-services
managed-services/bid-management
managed-services/real-estate
managed-services/hr-services

applications

marketplace
marketplace/product/:id

membership
resources
offers

operations
operations/finance
operations/finance/business-lending
operations/finance/business-insurance
operations/finance/financial-planning
operations/finance/credit-and-funding
operations/insurance
operations/calculators
operations/superloop

finance
finance/business-lending
finance/business-insurance
finance/financial-planning
finance/credit-and-funding
```

The repo also already contains member portal and admin portal route groups. Leave those intact for now.

## 1.2 Current public navigation state

`src/app/components/Navbar.tsx` currently contains a hardcoded `MENUS` array for the public mega menu.

It already includes:

```text
On-Demand Services
Managed Services
Applications
Operations
Marketplace
Membership
Offers
Resources
Help Center
About Us
```

It also already uses:

```text
Logo → /
Search
Sign In → /sign-in
Join Now → /sign-in
```

Keep the two-tier header pattern:

```text
Tier 1: Logo, Search, Sign In, Join Now
Tier 2: Public mega menu
```

Do not add Home to the desktop main menu. The logo already links to `/`.

## 1.3 Current package state

The app uses Vite and has scripts:

```json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  }
}
```

React and React DOM may currently be under `peerDependencies`. For an application deployment, move or duplicate them into `dependencies`:

```json
"dependencies": {
  "react": "18.3.1",
  "react-dom": "18.3.1"
}
```

Do not remove existing dependencies unless the build proves they are unused and safe to remove.

---

# 2. Implementation rule

For this task, work on the **public-facing website only**.

Do not change the member portal except where absolutely necessary to avoid build errors.

Do not redesign the admin portal.

Do not implement backend persistence.

Do not wire real payments, authentication, Firestore, CRM, email, booking, or external integrations.

Use static data files now so the admin portal can later replace those files with database-managed records.

---

# 3. Target public sitemap

Implement the following public-facing sitemap.

Use four destination types:

```text
Full page
Section anchor
Query/filter destination
Dynamic detail page
```

## 3.1 Full public sitemap

```text
/
├── /about
│   ├── /about/what-we-do
│   ├── /about/our-process
│   └── /about/work-with-us
│
├── /contact
├── /sign-in
│
├── /help
│   ├── /help?section=faqs
│   ├── /help?section=knowledge-base
│   ├── /help?section=troubleshooting
│   └── /help?section=support
│
├── /on-demand
│   ├── /on-demand/business-advisor
│   ├── /on-demand/decision-desk
│   ├── /on-demand/the-fixer
│   ├── /on-demand/risk-advisor
│   ├── /on-demand/services
│   └── /document-nucleus/overview
│
├── /document-nucleus/overview
│   ├── /document-nucleus/category/:id
│   └── /document-nucleus/product/:id
│
├── /managed-services
│   ├── /managed-services/bid-management
│   ├── /managed-services/real-estate
│   └── /managed-services/hr-services
│
├── /applications
│
├── /operations
│   ├── /operations/finance
│   │   ├── /operations/finance/business-lending
│   │   ├── /operations/finance/business-insurance
│   │   ├── /operations/finance/financial-planning
│   │   └── /operations/finance/credit-and-funding
│   ├── /operations/insurance
│   ├── /operations/connectivity
│   │   ├── /operations/connectivity/nbn-phone
│   │   └── /operations/connectivity/superloop
│   ├── /operations/calculators
│   └── /operations/coming-soon
│
├── /marketplace
│   └── /marketplace/product/:id
│
├── /membership
│   ├── /membership/overview
│   ├── /membership/remote-business-partner-membership
│   ├── /membership/inclusions
│   ├── /membership/pricing
│   ├── /membership/usage
│   ├── /membership/payment-terms
│   ├── /membership/sign-up-now
│   └── /membership/frequently-asked-questions
│
├── /offers
│
├── /resources
│
├── /legal
│   ├── /legal/privacy-policy
│   ├── /legal/terms-of-use
│   ├── /legal/terms-of-engagement
│   ├── /legal/payment-policy
│   └── /legal/services-policy
│
├── /thank-you
├── /contact/success
├── /booking-confirmation
└── /membership/confirmation
```

---

# 4. Anchor and query destinations

Do not turn every item into a separate page. Use anchors and query parameters where appropriate.

## 4.1 On-Demand Services anchors

On `/on-demand/services`, add matching sections for:

```text
/on-demand/services#overview
/on-demand/services#how-it-works
/on-demand/services#core-services
/on-demand/services#advisory-categories
/on-demand/services#operations-advisory
/on-demand/services#human-resource-advisory
/on-demand/services#accounting-finance
/on-demand/services#sales-marketing
/on-demand/services#management-consulting
/on-demand/services#change-management
/on-demand/services#ai-advisory
/on-demand/services#research-development
/on-demand/services#information-technology
/on-demand/services#public-relations
/on-demand/services#customised-solutions
```

## 4.2 Managed Services anchors

On `/managed-services`, add matching sections for:

```text
/managed-services#overview
/managed-services#document-management
/managed-services#change-management
/managed-services#business-sale-support
/managed-services#franchise
/managed-services#lms
/managed-services#custom-solutions
/managed-services#engagement-process
/managed-services#how-managed-services-work
```

Keep these as full route-backed pages:

```text
/managed-services/bid-management
/managed-services/real-estate
/managed-services/hr-services
```

## 4.3 Applications anchors

On `/applications`, add matching sections for:

```text
/applications#overview
/applications#how-these-work
/applications#operations-finance
/applications#people-hr
/applications#sales-crm
/applications#documents
/applications#support-desk
/applications#learning
/applications#analytics
/applications#payments-billing
/applications#integrations
/applications#fleet-management
/applications#business-watchlist
```

Use the public label **Business Watchlist** instead of **The Blacklist**.

## 4.4 Marketplace anchors

On `/marketplace`, add matching sections for:

```text
/marketplace#overview
/marketplace#rbp-products
/marketplace#rbp-assets
/marketplace#third-party-products-assets
/marketplace#buying-process
/marketplace#list-with-us
```

## 4.5 Offers anchors and filters

On `/offers`, support these anchors:

```text
/offers#overview
/offers#exclusive
/offers#top
```

Also support these query filters:

```text
/offers?category=travel
/offers?category=fitness-health
/offers?category=home-garden
/offers?category=delivery
/offers?category=digital-tech
/offers?category=finance-insurance
/offers?category=other
/offers?category=operations
/offers?category=human-resources
/offers?category=admin-finance
/offers?category=sales-marketing
/offers?category=ai
```

## 4.6 Resources filters

On `/resources`, support these query filters:

```text
/resources?type=articles
/resources?type=guides
/resources?type=tools
/resources?type=downloads
/resources?type=educational

/resources?category=strategy
/resources?category=finance
/resources?category=sales-marketing
/resources?category=research-development
/resources?category=information-technology
/resources?category=customer-service
/resources?category=human-resources
/resources?category=design
/resources?category=communications
/resources?category=governance
/resources?category=production
/resources?category=sourcing
/resources?category=quality-management
/resources?category=distribution
/resources?category=operations
/resources?category=other
```

The page should also support both filters together:

```text
/resources?type=guides&category=finance
```

## 4.7 Help Center query handling

On `/help`, support:

```text
section = faqs | knowledge-base | troubleshooting | support
category = our-platform | on-demand-services | managed-services | applications | operations | marketplace | membership | offers | resources | other
```

Example URLs:

```text
/help?section=faqs&category=membership
/help?section=knowledge-base&category=applications
/help?section=troubleshooting&category=operations
/help?section=support
```

---

# 5. Shared business taxonomy

Create a shared taxonomy file:

```text
src/app/data/serviceCategories.ts
```

Use this category list:

```ts
export const businessCategories = [
  { id: "strategy", label: "Strategy" },
  { id: "finance", label: "Finance" },
  { id: "sales-marketing", label: "Sales & Marketing" },
  { id: "research-development", label: "Research & Development" },
  { id: "information-technology", label: "Information Technology" },
  { id: "customer-service", label: "Customer Service" },
  { id: "human-resources", label: "Human Resources" },
  { id: "design", label: "Design" },
  { id: "communications", label: "Communications" },
  { id: "governance", label: "Governance" },
  { id: "production", label: "Production" },
  { id: "sourcing", label: "Sourcing" },
  { id: "quality-management", label: "Quality Management" },
  { id: "distribution", label: "Distribution" },
  { id: "operations", label: "Operations" },
  { id: "other", label: "Other" },
];
```

Use this taxonomy across:

```text
On-Demand Services
Managed Services
Applications
Offers
Resources
Help Center
Marketplace
```

---

# 6. Static data files to create

Create the following frontend data files:

```text
src/app/data/publicNavigation.ts
src/app/data/publicSitemap.ts
src/app/data/serviceCategories.ts
src/app/data/onDemandServices.ts
src/app/data/managedServices.ts
src/app/data/applications.ts
src/app/data/operations.ts
src/app/data/marketplace.ts
src/app/data/membership.ts
src/app/data/offers.ts
src/app/data/resources.ts
src/app/data/helpCenter.ts
src/app/data/legalPages.ts
```

These files should export typed arrays/objects. These are temporary frontend data sources that will later be replaced by backend/admin-managed records.

Do not fetch data from Firebase yet.

---

# 7. Refactor public navigation

Move the hardcoded `MENUS` array out of:

```text
src/app/components/Navbar.tsx
```

into:

```text
src/app/data/publicNavigation.ts
```

Then import it:

```ts
import { publicNavigation as MENUS } from "../data/publicNavigation";
```

If the relative import path differs, adjust it safely.

## 7.1 Required public menu items

The public mega menu should include:

```text
On-Demand Services
Managed Services
Applications
Operations
Marketplace
Membership
Offers
Resources
Help Center
About Us
```

Utility links should be:

```text
Logo → /
Search
Contact → /contact
Sign In → /sign-in
Join Now → /membership/sign-up-now
```

If the current design does not have Contact in the utility bar, it may remain under About Us. Do not over-redesign the header. The priority is route correctness.

## 7.2 Updated On-Demand Services menu

Include:

```text
Overview → /on-demand

Core Services:
- Business Advisor → /on-demand/business-advisor
- Decision Desk → /on-demand/decision-desk
- The Fixer → /on-demand/the-fixer
- Risk Advisor → /on-demand/risk-advisor

Document Nucleus:
- Document Nucleus Overview → /document-nucleus/overview
- Templates → /document-nucleus/category/templates
- Documentation Suites → /document-nucleus/category/documentation-suites
- Toolkits → /document-nucleus/category/toolkits
- Process → /document-nucleus/category/process

Advisory Categories:
- Operations Advisory → /on-demand/services#operations-advisory
- Human Resource Advisory → /on-demand/services#human-resource-advisory
- Accounting & Finance → /on-demand/services#accounting-finance
- Sales & Marketing → /on-demand/services#sales-marketing
- Management Consulting → /on-demand/services#management-consulting
- Change Management → /on-demand/services#change-management
- AI Advisory → /on-demand/services#ai-advisory
- Research & Development → /on-demand/services#research-development
- Information Technology → /on-demand/services#information-technology
- Public Relations → /on-demand/services#public-relations
- Customised Solutions → /on-demand/services#customised-solutions
```

## 7.3 Updated Managed Services menu

Include:

```text
Overview → /managed-services

Service Areas:
- Bid Management → /managed-services/bid-management
- Real Estate → /managed-services/real-estate
- HR Services → /managed-services/hr-services
- Document Management → /managed-services#document-management
- Change Management → /managed-services#change-management
- Business Sale Support → /managed-services#business-sale-support
- Franchise → /managed-services#franchise
- LMS → /managed-services#lms
- Custom Solutions → /managed-services#custom-solutions
- Engagement Process → /managed-services#engagement-process
```

## 7.4 Updated Applications menu

Include:

```text
Overview → /applications

Application Categories:
- Operations and Finance → /applications#operations-finance
- People and HR → /applications#people-hr
- Sales and CRM → /applications#sales-crm
- Documents → /applications#documents
- Support Desk → /applications#support-desk
- Learning → /applications#learning
- Analytics → /applications#analytics
- Payments and Billing → /applications#payments-billing
- Integrations → /applications#integrations
- Fleet Management → /applications#fleet-management
- Business Watchlist → /applications#business-watchlist
- How These Work → /applications#how-these-work
```

## 7.5 Updated Operations menu

Include:

```text
Overview → /operations

Business Operations:
- Business Finance → /operations/finance
- Business Insurance → /operations/insurance
- Connectivity → /operations/connectivity
- NBN & Phone → /operations/connectivity/nbn-phone
- Superloop Connectivity → /operations/connectivity/superloop
- Calculators → /operations/calculators
- Coming Soon → /operations/coming-soon
```

Keep `/operations/superloop` as a compatibility route that renders the same component as `/operations/connectivity/superloop`.

## 7.6 Updated Marketplace menu

Include:

```text
Overview → /marketplace
RBP Products → /marketplace#rbp-products
RBP Assets → /marketplace#rbp-assets
Third Party Products & Assets → /marketplace#third-party-products-assets
Buying Process → /marketplace#buying-process
List With Us → /marketplace#list-with-us
```

## 7.7 Updated Membership menu

Include:

```text
Overview → /membership/overview
Remote Business Partner Membership → /membership/remote-business-partner-membership
Inclusions → /membership/inclusions
Pricing → /membership/pricing
Usage → /membership/usage
Payment Terms → /membership/payment-terms
Sign Up Now → /membership/sign-up-now
Frequently Asked Questions → /membership/frequently-asked-questions
```

The CTA should link to:

```text
/membership/sign-up-now
```

not `/sign-in`.

## 7.8 Updated Offers menu

Include:

```text
Overview → /offers
Exclusive Offers → /offers#exclusive
Top Offers → /offers#top

Lifestyle / Commercial Categories:
- Travel → /offers?category=travel
- Fitness & Health → /offers?category=fitness-health
- Home & Garden → /offers?category=home-garden
- Delivery → /offers?category=delivery
- Digital & Tech → /offers?category=digital-tech
- Finance & Insurance → /offers?category=finance-insurance
- Other → /offers?category=other

Business Categories:
- Operations → /offers?category=operations
- Human Resources → /offers?category=human-resources
- Admin and Finance → /offers?category=admin-finance
- Sales and Marketing → /offers?category=sales-marketing
- AI → /offers?category=ai
```

## 7.9 Updated Resources menu

Include:

```text
Overview → /resources

Resource Types:
- Articles → /resources?type=articles
- Guides → /resources?type=guides
- Tools → /resources?type=tools
- Downloads → /resources?type=downloads
- Educational → /resources?type=educational

Business Categories:
- Strategy → /resources?category=strategy
- Finance → /resources?category=finance
- Sales & Marketing → /resources?category=sales-marketing
- Research & Development → /resources?category=research-development
- Information Technology → /resources?category=information-technology
- Customer Service → /resources?category=customer-service
- Human Resources → /resources?category=human-resources
- Design → /resources?category=design
- Communications → /resources?category=communications
- Governance → /resources?category=governance
- Production → /resources?category=production
- Sourcing → /resources?category=sourcing
- Quality Management → /resources?category=quality-management
- Distribution → /resources?category=distribution
- Operations → /resources?category=operations
- Other → /resources?category=other
```

## 7.10 Help Center menu

Keep the current Help Center structure, but ensure it uses query parameters under `/help` and does not create dozens of help routes.

## 7.11 About Us menu

Update About links to:

```text
About Us → /about
What We Do → /about/what-we-do
Our Process → /about/our-process
Work With Us → /about/work-with-us
Discovery Call → /contact?reason=discovery-call
Contact Us → /contact
```

---

# 8. Route updates

Update `src/app/routes.tsx`.

Preserve existing member portal and admin portal routes.

Preserve existing legacy routes unless they break the build.

## 8.1 Create/import new public pages

Create these new files if they do not exist:

```text
src/app/pages/about/WhatWeDoPage.tsx
src/app/pages/about/OurProcessPage.tsx
src/app/pages/about/WorkWithUsPage.tsx

src/app/pages/on-demand/RiskAdvisorPage.tsx

src/app/pages/operations/ConnectivityPage.tsx
src/app/pages/operations/NbnPhonePage.tsx
src/app/pages/operations/OperationsComingSoonPage.tsx

src/app/pages/membership/MembershipOverviewPage.tsx
src/app/pages/membership/RemoteBusinessPartnerMembershipPage.tsx
src/app/pages/membership/MembershipInclusionsPage.tsx
src/app/pages/membership/MembershipPricingPage.tsx
src/app/pages/membership/MembershipUsagePage.tsx
src/app/pages/membership/MembershipPaymentTermsPage.tsx
src/app/pages/membership/MembershipSignUpPage.tsx
src/app/pages/membership/MembershipFaqPage.tsx

src/app/pages/legal/LegalIndexPage.tsx
src/app/pages/legal/PrivacyPolicyPage.tsx
src/app/pages/legal/TermsOfUsePage.tsx
src/app/pages/legal/TermsOfEngagementPage.tsx
src/app/pages/legal/PaymentPolicyPage.tsx
src/app/pages/legal/ServicesPolicyPage.tsx

src/app/pages/confirmation/ThankYouPage.tsx
src/app/pages/confirmation/ContactSuccessPage.tsx
src/app/pages/confirmation/BookingConfirmationPage.tsx
src/app/pages/confirmation/MembershipConfirmationPage.tsx

src/app/pages/NotFoundPage.tsx
```

## 8.2 Add route imports

Add imports to `routes.tsx` for the new pages.

## 8.3 Add these route definitions

Add these public routes:

```ts
{ path: "about/what-we-do", Component: WhatWeDoPage },
{ path: "about/our-process", Component: OurProcessPage },
{ path: "about/work-with-us", Component: WorkWithUsPage },

{ path: "on-demand/risk-advisor", Component: RiskAdvisorPage },

{
  path: "operations/connectivity",
  Component: Layout,
  children: [
    { index: true, Component: ConnectivityPage },
    { path: "nbn-phone", Component: NbnPhonePage },
    { path: "superloop", Component: SuperloopPage },
  ],
},
{ path: "operations/coming-soon", Component: OperationsComingSoonPage },

{
  path: "membership",
  Component: Layout,
  children: [
    { index: true, Component: MembershipPage },
    { path: "overview", Component: MembershipOverviewPage },
    { path: "remote-business-partner-membership", Component: RemoteBusinessPartnerMembershipPage },
    { path: "inclusions", Component: MembershipInclusionsPage },
    { path: "pricing", Component: MembershipPricingPage },
    { path: "usage", Component: MembershipUsagePage },
    { path: "payment-terms", Component: MembershipPaymentTermsPage },
    { path: "sign-up-now", Component: MembershipSignUpPage },
    { path: "frequently-asked-questions", Component: MembershipFaqPage },
  ],
},

{
  path: "legal",
  Component: Layout,
  children: [
    { index: true, Component: LegalIndexPage },
    { path: "privacy-policy", Component: PrivacyPolicyPage },
    { path: "terms-of-use", Component: TermsOfUsePage },
    { path: "terms-of-engagement", Component: TermsOfEngagementPage },
    { path: "payment-policy", Component: PaymentPolicyPage },
    { path: "services-policy", Component: ServicesPolicyPage },
  ],
},

{ path: "thank-you", Component: ThankYouPage },
{ path: "contact/success", Component: ContactSuccessPage },
{ path: "booking-confirmation", Component: BookingConfirmationPage },
{ path: "membership/confirmation", Component: MembershipConfirmationPage },

{ path: "*", Component: NotFoundPage },
```

Important: the current repo already has `{ path: "membership", Component: MembershipPage }`. Replace that single route with the nested membership route group above.

Important: keep the existing `/operations/superloop` route as a compatibility route.

---

# 9. Page template components

Create reusable templates in:

```text
src/app/components/templates/
```

Suggested files:

```text
LandingPageTemplate.tsx
ServicePageTemplate.tsx
CategoryPageTemplate.tsx
ListingPageTemplate.tsx
ProductDetailTemplate.tsx
HelpCenterTemplate.tsx
LegalPageTemplate.tsx
ConfirmationPageTemplate.tsx
SectionBlock.tsx
RelatedLinks.tsx
StatusBadge.tsx
CTASection.tsx
```

Each placeholder page should use the templates rather than inventing a completely different layout.

Each page should have:

```text
Hero
Intro section
Main sections
Related links
CTA section
```

Use the existing design language:

```text
White backgrounds
Slate text
Blue primary buttons
Rounded cards
Subtle borders
Lucide icons
Responsive layouts
```

---

# 10. Required page content shells

Do not write final marketing copy. Use clear placeholder copy that can be replaced later.

## 10.1 Applications page

Update `BusinessApplicationsPage` so it contains these section IDs:

```tsx
<section id="overview" />
<section id="how-these-work" />
<section id="operations-finance" />
<section id="people-hr" />
<section id="sales-crm" />
<section id="documents" />
<section id="support-desk" />
<section id="learning" />
<section id="analytics" />
<section id="payments-billing" />
<section id="integrations" />
<section id="fleet-management" />
<section id="business-watchlist" />
```

## 10.2 Managed Services page

Update `ManagedServicesPage` so it contains:

```tsx
<section id="overview" />
<section id="document-management" />
<section id="change-management" />
<section id="business-sale-support" />
<section id="franchise" />
<section id="lms" />
<section id="custom-solutions" />
<section id="engagement-process" />
<section id="how-managed-services-work" />
```

## 10.3 On-Demand Services page

Update `ServicesPage` or whichever component renders `/on-demand/services` so it contains all On-Demand anchor sections listed in section 4.1.

## 10.4 Marketplace page

Update `MarketplacePage` so it contains:

```tsx
<section id="overview" />
<section id="rbp-products" />
<section id="rbp-assets" />
<section id="third-party-products-assets" />
<section id="buying-process" />
<section id="list-with-us" />
```

## 10.5 Offers page

Update `OffersPage` so it contains:

```tsx
<section id="overview" />
<section id="exclusive" />
<section id="top" />
```

It must also read the `category` query parameter and filter offers from `src/app/data/offers.ts`.

## 10.6 Resources page

Update `ResourcesPage` so it reads:

```text
type
category
```

from query parameters and filters resources from `src/app/data/resources.ts`.

## 10.7 Help Center page

Update `HelpCenterPage` so it reads:

```text
section
category
```

from query parameters and displays the matching static help content from `src/app/data/helpCenter.ts`.

---

# 11. Query parameter handling

Use React Router hooks.

Example pattern:

```tsx
import { useSearchParams } from "react-router";

const [searchParams] = useSearchParams();
const category = searchParams.get("category");
const type = searchParams.get("type");
```

Use this pattern for:

```text
/help
/offers
/resources
/contact
```

For `/contact?reason=discovery-call`, preselect or display the reason where possible. Do not implement real submission.

---

# 12. Hash scrolling

Create:

```text
src/app/components/ScrollToHash.tsx
```

Implementation:

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}
```

Render it at the root route level in `routes.tsx`:

```tsx
function Root() {
  return (
    <>
      <ScrollToHash />
      <Outlet />
    </>
  );
}
```

Import it:

```tsx
import { ScrollToHash } from "./components/ScrollToHash";
```

This ensures anchor links such as `/applications#integrations` actually scroll to the section.

---

# 13. Footer updates

If a footer component exists, update it. If not, create:

```text
src/app/components/Footer.tsx
```

Footer should include:

```text
About
Contact
Help Center
On-Demand Services
Managed Services
Applications
Operations
Marketplace
Membership
Offers
Resources
Legal
```

Legal links:

```text
/legal/privacy-policy
/legal/terms-of-use
/legal/terms-of-engagement
/legal/payment-policy
/legal/services-policy
```

Footer should not expose admin or member portal links in this public frontend pass.

---

# 14. CTA and conversion paths

Add consistent CTAs across public pages.

Use these frontend-only destinations:

```text
Book Discovery Call → /contact?reason=discovery-call
Request App Setup → /contact?reason=application-setup
Request Managed Services → /contact?reason=managed-services
List With Us → /marketplace#list-with-us
Join Now → /membership/sign-up-now
Sign In → /sign-in
Contact Support → /help?section=support
```

Forms may redirect to success pages, but do not connect to backend yet.

Success pages:

```text
/contact/success
/booking-confirmation
/membership/confirmation
/thank-you
```

---

# 15. Frontend page status metadata

Create `src/app/data/publicSitemap.ts`.

Include a status field for each route:

```ts
export type PublicPageStatus =
  | "ready"
  | "placeholder"
  | "content-required"
  | "backend-later"
  | "legal-review-required";

export const publicPages = [
  {
    title: "Applications",
    path: "/applications",
    status: "content-required",
    backendRequired: false,
  },
  {
    title: "Membership Sign Up",
    path: "/membership/sign-up-now",
    status: "backend-later",
    backendRequired: true,
  },
];
```

This will later support the Admin Portal Site Content area.

---

# 16. Firebase hosting readiness

Create or update:

```text
firebase.json
```

Use:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

This is required for React Router browser refresh support on nested routes.

---

# 17. Build and test commands

Run:

```bash
npm install
npm run build
```

If the install fails because React is only in `peerDependencies`, add React and React DOM to `dependencies`.

Do not introduce new package managers unless the existing repo already uses one.

---

# 18. Public route test checklist

After implementation, manually test these URLs:

```text
/
 /about
 /about/what-we-do
 /about/our-process
 /about/work-with-us
 /contact
 /contact?reason=discovery-call
 /contact/success
 /sign-in

 /help
 /help?section=faqs&category=membership
 /help?section=knowledge-base&category=applications
 /help?section=troubleshooting&category=operations
 /help?section=support

 /on-demand
 /on-demand/business-advisor
 /on-demand/decision-desk
 /on-demand/the-fixer
 /on-demand/risk-advisor
 /on-demand/services#ai-advisory
 /on-demand/services#customised-solutions

 /document-nucleus/overview
 /document-nucleus/category/templates
 /document-nucleus/product/example-product

 /managed-services
 /managed-services/bid-management
 /managed-services/real-estate
 /managed-services/hr-services
 /managed-services#franchise
 /managed-services#lms

 /applications
 /applications#integrations
 /applications#fleet-management
 /applications#business-watchlist

 /operations
 /operations/finance
 /operations/finance/business-lending
 /operations/finance/business-insurance
 /operations/finance/financial-planning
 /operations/finance/credit-and-funding
 /operations/insurance
 /operations/connectivity
 /operations/connectivity/nbn-phone
 /operations/connectivity/superloop
 /operations/superloop
 /operations/calculators
 /operations/coming-soon

 /marketplace
 /marketplace#rbp-products
 /marketplace#rbp-assets
 /marketplace#third-party-products-assets
 /marketplace#buying-process
 /marketplace#list-with-us
 /marketplace/product/example-product

 /membership
 /membership/overview
 /membership/remote-business-partner-membership
 /membership/inclusions
 /membership/pricing
 /membership/usage
 /membership/payment-terms
 /membership/sign-up-now
 /membership/frequently-asked-questions
 /membership/confirmation

 /offers
 /offers#exclusive
 /offers#top
 /offers?category=travel
 /offers?category=digital-tech
 /offers?category=operations
 /offers?category=ai

 /resources
 /resources?type=articles
 /resources?type=guides
 /resources?type=tools
 /resources?category=finance
 /resources?type=guides&category=finance

 /legal
 /legal/privacy-policy
 /legal/terms-of-use
 /legal/terms-of-engagement
 /legal/payment-policy
 /legal/services-policy

 /thank-you
 /booking-confirmation
 /bad-route-example
```

The final URL should show the Not Found page.

---

# 19. Acceptance criteria

Implementation is complete when:

```text
1. All target public routes resolve.
2. Existing public routes are preserved.
3. Member portal and admin portal routes are not removed.
4. Public mega menu reflects the updated sitemap.
5. Navbar menu data is moved to src/app/data/publicNavigation.ts.
6. All anchor links have matching section IDs.
7. Help Center reads section/category query parameters.
8. Offers reads category query parameters.
9. Resources reads type/category query parameters.
10. Applications includes Integrations, Fleet Management and Business Watchlist sections.
11. On-Demand includes Risk Advisor and expanded advisory categories.
12. Managed Services includes Change Management, Franchise and LMS sections.
13. Operations includes Connectivity and Coming Soon sections.
14. Marketplace includes RBP Products, RBP Assets and Third Party Products & Assets sections.
15. Membership has subpages for overview, inclusions, pricing, usage, payment terms, signup and FAQs.
16. Legal pages exist and are linked in the footer.
17. Confirmation/success pages exist.
18. A Not Found fallback route exists.
19. firebase.json includes SPA rewrite to /index.html.
20. npm run build succeeds.
```

---

# 20. Do not implement yet

Do not implement these in this pass:

```text
Firebase Auth
Firestore collections
Admin CMS editing
Member portal workflows
Payment processing
Real booking system
Real email sending
Real search index
Real marketplace checkout
Real offer redemption
Real document downloads
Real support tickets
```

Use placeholder interactions and static data only.

The frontend should look and behave as if these features are coming later, without pretending they are already functional. Nobody needs a button that confidently does nothing. The internet has suffered enough.