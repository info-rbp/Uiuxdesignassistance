# Remote Business Partner Platform

Remote Business Partner is a React/Vite application scaffold for a business support platform with three connected experiences:

1. **Public Website** — the front-facing marketing, services, applications, offers, resources, and help experience.
2. **Member Portal** — the signed-in client workspace where members access services, applications, documents, offers, resources, and support.
3. **Admin Portal** — the management layer intended to become the source of truth for public site content, member-facing data, services, applications, offers, resources, help content, and future integrations.

The project originated from a Figma-generated application design and has been progressively converted into a more structured application scaffold. The current goal is to stabilise the frontend architecture so it can be provisioned in Firebase Studio and later connected to Firebase services such as Auth, Firestore, Storage, and Hosting.

---

## Table of Contents

- [Application Purpose](#application-purpose)
- [High-Level Architecture](#high-level-architecture)
- [Current Technology Stack](#current-technology-stack)
- [Core User Experiences](#core-user-experiences)
- [Public Website](#public-website)
- [Member Portal](#member-portal)
- [Admin Portal](#admin-portal)
- [How the Admin Portal Should Work as the Source of Truth](#how-the-admin-portal-should-work-as-the-source-of-truth)
- [Applications and Integrations Model](#applications-and-integrations-model)
- [Routing Model](#routing-model)
- [Figma-to-Code Reality](#figma-to-code-reality)
- [Current Implementation Status](#current-implementation-status)
- [Known Blockers Before Firebase Studio](#known-blockers-before-firebase-studio)
- [Firebase Studio Readiness](#firebase-studio-readiness)
- [Firebase Hosting Requirements](#firebase-hosting-requirements)
- [Recommended Firestore Data Model](#recommended-firestore-data-model)
- [Recommended Development Roadmap](#recommended-development-roadmap)
- [Local Development](#local-development)
- [Deployment Checklist](#deployment-checklist)
- [Project Principles](#project-principles)

---

## Application Purpose

Remote Business Partner is intended to act as an integrated business support ecosystem for small businesses, startups, and SMEs.

The platform should allow users to:

- Browse business services, managed services, applications, marketplace offers, memberships, resources, and help content.
- Sign in as members and access a dedicated client portal.
- Request services, advisory sessions, applications, document support, offers, and support.
- Allow administrators to manage the public-facing website, member portal experience, service catalogue, applications, integrations, offers, resources, and help content.

The application is currently a **frontend scaffold**. It is not yet a production backend application.

---

## High-Level Architecture

The application should be understood as three connected layers:

```txt
PUBLIC WEBSITE
Visitors browse services, applications, memberships, offers, resources, and help content.
        ↓
MEMBER PORTAL
Signed-in users access services, documents, apps, offers, sessions, resources, and support.
        ↑
ADMIN PORTAL
Administrators manage the content, members, services, applications, offers, resources, support, and future integrations.
```

The intended operating model is:

```txt
Admin Portal writes/manages structured data
        ↓
Central source of truth
        ↓
Public Website reads published public data
        ↓
Member Portal reads member-specific data
```

At the current stage, most data is still mock/static UI data. Firebase and Firestore will later become the real source of truth.

---

## Current Technology Stack

Current frontend stack:

- React
- Vite
- React Router
- TypeScript/TSX
- Tailwind-style utility classes
- Lucide React icons
- Figma-generated UI scaffold

Future intended Firebase stack:

- Firebase Studio for development/provisioning workflow
- Firebase Hosting for deployment
- Firebase Auth for member/admin authentication
- Firestore for structured application data
- Firebase Storage for files/documents
- Firebase Functions or other backend services for integrations and automation, if required later

---

## Core User Experiences

### 1. Public Website

Purpose:

```txt
Attract → Explain → Convert
```

The public website explains the platform, services, applications, managed services, operations support, marketplace, memberships, offers, resources, and help content.

### 2. Member Portal

Purpose:

```txt
Access → Request → Track → Receive Support
```

The member portal is where users should access their assigned services, applications, documents, offers, sessions, resources, support requests, and settings.

### 3. Admin Portal

Purpose:

```txt
Manage → Publish → Assign → Track → Support
```

The admin portal is intended to become the management layer for the whole platform.

---

## Public Website

The public website should include or support these major areas:

```txt
/
 /about
 /contact
 /help
 /on-demand
 /managed-services
 /applications
 /operations
 /marketplace
 /membership
 /offers
 /resources
```

### Public Mega Menu Structure

The public navigation model is based on the mega menu structure:

```txt
Home

On-Demand Services
- Overview
- Business Advisor
- Decision Desk
- The Fixer
- Document Nucleus
- Templates
- Documentation Suites
- Toolkits
- Process
- On-Demand Services

Managed Services
- Our Managed Services
- Bid Management
- Real Estate
- HR Services
- Document Management
- Business Sale Support
- Custom Solutions
- Engagement Process

Applications
- Overview
- Operations and Finance
- People and HR
- Sales and CRM
- Documents
- Support Desk
- Learning
- Analytics
- Payments and Billing
- Integrations

Operations
- Overview
- Business Finance
- Business Insurance
- Superloop Connectivity
- Calculators

Marketplace
- Overview
- Marketplace
- Buying Process
- List With Us

Membership
- Overview
- Basic Membership
- Standard Membership
- Premium Membership
- Sign Up Today

Offers
- Overview
- Exclusive Offers
- Top Offers
- Offer Categories

Resources
- Overview
- Articles
- Guides
- Tools
- Downloads
- Educational

Help Center
- Frequently Asked Questions
- Knowledge Base
- Troubleshooting
- Resources
- Support Center

About Us
- About Us
- Our Purpose
- Our Platform
- Discovery Call
- Contact
```

---

## Member Portal

The member portal is the signed-in workspace for users.

Current intended member portal routes:

```txt
/portal/dashboard
/portal/services
/portal/services/request
/portal/services/:id
/portal/sessions
/portal/documents
/portal/offers
/portal/apps
/portal/resources
/portal/support
/portal/settings
```

### Member Portal Navigation

Current member portal sections:

```txt
Dashboard
My Services
Advisory Sessions
Documents
Partner Offers
Applications
Resources
Support
Settings
```

### Member Portal Responsibilities

| Portal Area | Purpose |
|---|---|
| Dashboard | Member overview, recent activity, plan/status summary |
| My Services | Active services, service requests, managed service work |
| Service Request | Request on-demand, managed service, advisory, or fixer support |
| Advisory Sessions | Discovery calls, advisory sessions, bookings |
| Documents | Templates, toolkits, document suites, uploaded/member documents |
| Partner Offers | Offers available to the member |
| Applications | Applications assigned/requested by the member |
| Resources | Guides, articles, tools, downloads, educational content |
| Support | Support requests and help center access |
| Settings | Account, business details, preferences, portal access |

### Integrations in Member Portal

A dedicated `/portal/integrations` route should **not** be treated as live yet.

For now:

```txt
Integrations should appear as a planned section/tab inside /portal/apps.
```

A dedicated route can be added later when integrations become operationally important.

---

## Admin Portal

The Admin Portal is the intended control layer of the application.

The admin sidebar has been restructured to mirror the public mega menu. This is deliberate: it makes the Admin Portal feel like the management system for the public site and member portal rather than a disconnected back-office dashboard.

### Admin Sidebar Structure

```txt
Admin Dashboard
- Dashboard
- To Do Tasks
- Discovery Calls
- Other

On-Demand Services
- Dashboard
- Business Advisor
- Decision Desk
- The Fixer
- Document Nucleus
- Templates
- Documentation Suites
- Toolkits
- Process
- On-Demand Services

Managed Services
- Dashboard
- Bid Management
- Real Estate
- HR Services
- Document Management
- Business Sale Support
- Custom Solutions

Applications
- Dashboard
- Operations and Finance
- People and HR
- Sales and CRM
- Documents
- Support Desk
- Learning
- Analytics
- Payments and Billing
- Integrations

Operations
- Dashboard
- Business Finance
- Business Insurance
- Superloop Connectivity
- Calculators

Marketplace
- Dashboard
- Marketplace
- Listings
- Buying Process
- List With Us

Membership
- Dashboard
- Memberships
- Members
- Payments
- Portal Access

Offers
- Dashboard
- All Offers
- Offer Listings
- Offer Categories
- Redemptions

Resources
- Resource Dashboard
- Articles
- Guides
- Tools
- Downloads
- Educational

Help Center
- Dashboard
- Frequently Asked Questions
- Knowledge Base
- Troubleshooting
- Resources
- Support Center

Site Content
- Public Pages
- Page Sections
- Mega Menu
- SEO / Metadata
- Header / Footer
- Content Status

Settings
- Platform Settings
- Admin Users
- Integration Settings
- Firebase Readiness
- Access Control
```

### Admin Portal Sections

| Admin Section | Public Site Link | Member Portal Link |
|---|---|---|
| Admin Dashboard | N/A | N/A |
| On-Demand Services | `/on-demand` | `/portal/services` |
| Managed Services | `/managed-services` | `/portal/services` |
| Applications | `/applications` | `/portal/apps` |
| Operations | `/operations` | `/portal/resources` |
| Marketplace | `/marketplace` | `/portal/offers` |
| Membership | `/membership` | `/portal/dashboard` |
| Offers | `/offers` | `/portal/offers` |
| Resources | `/resources` | `/portal/resources` |
| Help Center | `/help` | `/portal/support` |
| Site Content | `/` and all public pages | Indirect only |
| Settings | N/A | N/A |

---

## How the Admin Portal Should Work as the Source of Truth

The final platform should work like this:

```txt
Admin creates/updates records
        ↓
Records are saved to Firestore
        ↓
Public website reads published public records
        ↓
Member portal reads member-specific records
```

### Example: Applications

```txt
Admin Applications
        ↓
Application catalogue and setup requests
        ↓
Public /applications page displays published applications
        ↓
Member /portal/apps displays assigned/requested applications
```

### Example: Services

```txt
Admin On-Demand Services / Managed Services
        ↓
Service catalogue and service requests
        ↓
Public /on-demand and /managed-services explain services
        ↓
Member /portal/services shows service requests and statuses
```

### Example: Offers

```txt
Admin Offers
        ↓
Offer listings, categories, redemptions
        ↓
Public /offers shows public offers
        ↓
Member /portal/offers shows eligible member offers
```

### Example: Site Content

```txt
Admin Site Content
        ↓
Page structure, sections, mega menu references, SEO, header/footer status
        ↓
Public website reflects published structure/content
```

Site Content should control public website readiness. It should not directly manage member-specific operational data.

---

## Applications and Integrations Model

Applications and Integrations are related, but not identical.

```txt
Applications = tools/modules the client can use.
Integrations = connections between this platform and other systems.
```

### Applications Examples

```txt
ERPNext
Frappe CRM
HRMS
Helpdesk
Frappe LMS
Frappe Drive
Payments
Analytics Dashboard
OpenAI Assistant
```

### Integrations Examples

```txt
ERPNext
Frappe CRM
HRMS
Helpdesk
Payments
OpenAI
Google Drive
Microsoft 365
Xero
Stripe
Custom API
```

### Recommended Current Model

For now:

```txt
Admin: /admin/applications/integrations
Public: /applications#integrations
Member: /portal/apps as a planned Integrations tab
```

Do not add `/portal/integrations` until the integration workflow becomes mature enough to justify a dedicated member portal page.

---

## Routing Model

### Public Routes

Core public routes should include:

```txt
/
 /about
 /contact
 /help
 /on-demand
 /managed-services
 /applications
 /operations
 /marketplace
 /membership
 /offers
 /resources
```

### Member Portal Routes

```txt
/portal/dashboard
/portal/services
/portal/services/request
/portal/services/:id
/portal/sessions
/portal/documents
/portal/offers
/portal/apps
/portal/resources
/portal/support
/portal/settings
```

### Admin Routes

Core admin routes should include:

```txt
/admin/signin
/admin/dashboard
/admin/tasks
/admin/discovery-calls
/admin/other

/admin/on-demand
/admin/on-demand/business-advisor
/admin/on-demand/decision-desk
/admin/on-demand/the-fixer
/admin/on-demand/document-nucleus
/admin/on-demand/document-nucleus/templates
/admin/on-demand/document-nucleus/documentation-suites
/admin/on-demand/document-nucleus/toolkits
/admin/on-demand/document-nucleus/process
/admin/on-demand/services

/admin/managed-services
/admin/managed-services/bid-management
/admin/managed-services/real-estate
/admin/managed-services/hr-services
/admin/managed-services/document-management
/admin/managed-services/business-sale-support
/admin/managed-services/custom-solutions

/admin/applications
/admin/applications/operations-finance
/admin/applications/people-hr
/admin/applications/sales-crm
/admin/applications/documents
/admin/applications/support-desk
/admin/applications/learning
/admin/applications/analytics
/admin/applications/payments-billing
/admin/applications/integrations

/admin/operations
/admin/operations/business-finance
/admin/operations/business-insurance
/admin/operations/superloop-connectivity
/admin/operations/calculators

/admin/marketplace
/admin/marketplace/listings
/admin/marketplace/buying-process
/admin/marketplace/list-with-us

/admin/membership
/admin/membership/memberships
/admin/membership/members
/admin/membership/payments
/admin/membership/portal-access

/admin/offers
/admin/offers/all
/admin/offers/listings
/admin/offers/categories
/admin/offers/redemptions

/admin/resources
/admin/resources/articles
/admin/resources/guides
/admin/resources/tools
/admin/resources/downloads
/admin/resources/educational

/admin/help-center
/admin/help-center/faqs
/admin/help-center/knowledge-base
/admin/help-center/troubleshooting
/admin/help-center/resources
/admin/help-center/support

/admin/site-content/pages
/admin/site-content/sections
/admin/site-content/mega-menu
/admin/site-content/seo
/admin/site-content/header-footer
/admin/site-content/status

/admin/settings/platform
/admin/settings/admin-users
/admin/settings/integrations
/admin/settings/firebase-readiness
/admin/settings/access-control
```

Compatibility routes should continue to resolve:

```txt
/admin/members
/admin/services
/admin/documents
/admin/sessions
/admin/the-fixer
/admin/settings
```

---

## Figma-to-Code Reality

The design started in Figma and was pushed into GitHub. Figma is useful for design scaffolding, but it is not the source of truth for production application behavior.

### Figma Should Own

```txt
Visual layout
Page structure
Navigation hierarchy
Placeholder screens
Status badges
Relationship cards
User flow mockups
```

### GitHub Should Own

```txt
Routes
Components
Reusable scaffolds
Build validation
Dependency management
Firebase config
Deployment readiness
```

### Firebase Should Own Later

```txt
Authentication
Firestore data
Storage
Permissions
Hosting
Functions
Live integrations
```

---

## Current Implementation Status

### Implemented or Mostly Implemented

```txt
Public website scaffold
Public mega menu concept
Member portal scaffold
Admin grouped sidebar
Admin route scaffolding
Reusable admin section page concept
Major admin placeholder pages
Portal admin reference pattern
Applications > Integrations planned model
```

### Not Yet Implemented

```txt
Firebase Auth
Firestore
Real CRUD
Real admin permissions
Real publishing workflow
Real integration APIs
Real payment handling
Real member-specific data
Production deployment config
```

---

## Known Blockers Before Firebase Studio

Before Firebase Studio provisioning or deployment, the following must be resolved.

### 1. Fix AdminSectionPage Duplicate JSX

The file:

```txt
src/app/pages/admin/AdminSectionPage.tsx
```

must not contain duplicate `<Link>` and `<a>` blocks inside the same conditional branch.

Keep React Router links for internal routes:

```tsx
<Link to={link.href}>...</Link>
```

Remove duplicate anchors:

```tsx
<a href={link.href}>...</a>
```

Also remove any duplicated relationship paragraph in `RelationCard`.

### 2. Add Firebase Hosting Config

Create:

```txt
firebase.json
```

Recommended contents:

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

This is required so nested React Router routes refresh correctly on Firebase Hosting.

### 3. Move React Dependencies

React and React DOM should be normal dependencies, not only peer dependencies.

Recommended:

```json
"dependencies": {
  "react": "18.3.1",
  "react-dom": "18.3.1"
}
```

### 4. Commit a Lockfile

A lockfile should be committed after installation:

```txt
package-lock.json
```

or, if using pnpm:

```txt
pnpm-lock.yaml
```

Use one package manager consistently.

### 5. Confirm Build

Run:

```bash
npm install
npm run build
```

---

## Firebase Studio Readiness

The application should be treated as a **Vite React frontend scaffold**.

It is ready for Firebase Studio only after:

```txt
[ ] AdminSectionPage builds cleanly
[ ] firebase.json exists
[ ] React dependencies are in dependencies
[ ] A lockfile exists
[ ] npm install succeeds
[ ] npm run build succeeds
[ ] Admin routes resolve
[ ] Member portal routes resolve
[ ] Public routes resolve
```

Firebase Studio should be used to continue development from the GitHub repository.

---

## Firebase Hosting Requirements

Firebase Hosting should serve the Vite build output from:

```txt
dist
```

Required build command:

```bash
npm run build
```

Required Hosting rewrite:

```json
"rewrites": [
  {
    "source": "**",
    "destination": "/index.html"
  }
]
```

Without this rewrite, direct browser refresh on routes like these may fail:

```txt
/admin/applications/integrations
/portal/apps
/on-demand/the-fixer
/managed-services/bid-management
```

---

## Recommended Firestore Data Model

When Firebase integration begins, recommended Firestore collections include:

```txt
members
membershipPlans
services
serviceRequests
applications
applicationRequests
integrations
integrationRequests
memberIntegrations
sessions
documents
offers
offerRedemptions
resources
helpArticles
supportTickets
pages
pageSections
menuItems
settings
auditEvents
```

### Suggested Collection Purpose

| Collection | Purpose |
|---|---|
| members | Member profiles and account records |
| membershipPlans | Basic, Standard, Premium plans |
| services | Service catalogue |
| serviceRequests | Member service requests |
| applications | Application catalogue |
| applicationRequests | App setup requests |
| integrations | Integration catalogue |
| integrationRequests | Integration setup requests |
| memberIntegrations | Member-specific integration status |
| sessions | Discovery calls and advisory sessions |
| documents | Document records, templates, suites, toolkits |
| offers | Public/member offers |
| offerRedemptions | Offer redemption tracking |
| resources | Articles, guides, tools, downloads |
| helpArticles | FAQs, knowledge base, troubleshooting |
| supportTickets | Member support requests |
| pages | Public page records |
| pageSections | Sections within public pages |
| menuItems | Mega menu and navigation references |
| settings | Platform/admin settings |
| auditEvents | Admin activity and change history |

---

## Recommended Development Roadmap

### Phase 1 — Stabilise Frontend Scaffold

```txt
Fix AdminSectionPage
Add firebase.json
Fix dependencies
Add lockfile
Run build
Confirm routes
```

### Phase 2 — Firebase Studio Import

```txt
Import GitHub repository
Install dependencies
Run dev server
Run production build
Preview public, portal, and admin routes
```

### Phase 3 — Shared Static Data Layer

Before Firestore, move mock data into shared files:

```txt
src/app/data/sitePages.ts
src/app/data/services.ts
src/app/data/applications.ts
src/app/data/offers.ts
src/app/data/resources.ts
src/app/data/helpContent.ts
src/app/data/members.ts
```

This allows Public, Portal, and Admin pages to start reading from shared data before live Firebase persistence is added.

### Phase 4 — Firebase Auth

Replace local/admin mock auth with:

```txt
Firebase Auth
Admin roles
Member roles
Protected routes
```

Recommended future roles:

```txt
superAdmin
contentAdmin
membershipManager
serviceManager
supportAgent
viewer
```

### Phase 5 — Firestore Source of Truth

Start with lower-risk content collections:

```txt
pages
pageSections
applications
services
offers
resources
helpArticles
```

Then add member-specific operational collections:

```txt
members
serviceRequests
applicationRequests
integrationRequests
supportTickets
```

### Phase 6 — Integrations

Start with manual integration records:

```txt
Integration catalogue
Provider
Status
Member availability
Setup requests
Sync health placeholder
```

Only later add:

```txt
API credentials
Webhooks
Sync logs
Automation workflows
Error handling
```

---

## Local Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build Production Bundle

```bash
npm run build
```

### Preview Production Build

If configured:

```bash
npm run preview
```

If no preview script exists, add:

```json
"preview": "vite preview"
```

---

## Deployment Checklist

Before deploying or provisioning in Firebase Studio:

```txt
[ ] README updated
[ ] AdminSectionPage duplicate JSX removed
[ ] firebase.json added
[ ] react/react-dom moved to dependencies
[ ] Lockfile committed
[ ] npm install succeeds
[ ] npm run build succeeds
[ ] Public routes tested
[ ] Member portal routes tested
[ ] Admin routes tested
[ ] Direct route refresh tested
[ ] /portal/integrations not added as live route
[ ] Integrations remain planned under /portal/apps
[ ] Admin auth noted as prototype only
```

---

## Testing Matrix

### Public Routes

```txt
/
 /about
 /contact
 /help
 /on-demand
 /managed-services
 /applications
 /operations
 /marketplace
 /membership
 /offers
 /resources
```

### Member Routes

```txt
/portal/dashboard
/portal/services
/portal/services/request
/portal/sessions
/portal/documents
/portal/offers
/portal/apps
/portal/resources
/portal/support
/portal/settings
```

### Admin Routes

```txt
/admin/signin
/admin/dashboard
/admin/on-demand
/admin/managed-services
/admin/applications
/admin/applications/integrations
/admin/operations
/admin/marketplace
/admin/membership
/admin/offers
/admin/resources
/admin/help-center
/admin/site-content/pages
/admin/settings/platform
```

---

## Project Principles

### 1. Admin mirrors the public site

The Admin Portal should mirror the public mega menu so administrators understand exactly which public/member area they are managing.

### 2. Admin becomes the source of truth

Admin should eventually write to Firestore. Public and Portal pages should read from the same structured data.

### 3. Figma designs the experience, GitHub makes it real

Figma is useful for structure and visuals. Routing, data, and deployment must be handled in code.

### 4. Placeholder first, backend later

The current stage is scaffold-first. Real Firebase data should be added only after the route and page structure is stable.

### 5. Integrations stay under Applications for now

Do not add `/portal/integrations` until integrations become a mature user-facing workflow.

### 6. Keep public, portal, and admin responsibilities separate

```txt
Public Website = what visitors see
Member Portal = what members use
Admin Portal = what the business manages
```

---

## Current Status Summary

The application has a strong design and route scaffold, but is not yet production-ready.

Current state:

```txt
Design direction: strong
Public website scaffold: in place
Member portal scaffold: in place
Admin grouped sidebar: in place
Admin placeholder pages: mostly in place
Firebase config: missing
Build readiness: blocked until JSX cleanup is confirmed
Backend: not implemented
```

Once the scaffold builds successfully and Firebase Hosting configuration is added, the application will be ready for Firebase Studio provisioning as a structured frontend application.

It will then be ready for the next stage: Firebase Auth, Firestore source-of-truth data, real admin workflows, member-specific portal data, and production deployment.