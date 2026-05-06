import { createBrowserRouter, Outlet } from "react-router";

// Existing pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { OffersPage } from "./pages/OffersPage";
import { DocumentOverviewPage } from "./pages/DocumentOverviewPage";
import { DocumentCategoryPage } from "./pages/DocumentCategoryPage";
import { DocumentProductPage } from "./pages/DocumentProductPage";
import { BusinessAdvisorPage } from "./pages/BusinessAdvisorPage";
import { ServicesPage } from "./pages/ServicesPage";
import { DocuSharePage } from "./pages/DocuSharePage";

// New hub pages
import { OnDemandPage } from "./pages/OnDemandPage";
import { ManagedServicesPage } from "./pages/ManagedServicesPage";
import { BusinessApplicationsPage } from "./pages/BusinessApplicationsPage";
import { MarketplacePage } from "./pages/MarketplacePage";
import { OperationsCenterPage } from "./pages/OperationsCenterPage";
import { HelpCenterPage } from "./pages/HelpCenterPage";

// On-Demand sub-pages
import { DecisionDeskPage } from "./pages/on-demand/DecisionDeskPage";
import { TheFixerPage }     from "./pages/on-demand/TheFixerPage";

// Managed Services sub-pages
import { BidManagementPage } from "./pages/managed-services/BidManagementPage";
import { RealEstatePage } from "./pages/managed-services/RealEstatePage";
import { HRServicesPage } from "./pages/managed-services/HRServicesPage";

// Operations sub-pages
import { BusinessLendingPage } from "./pages/finance/BusinessLendingPage";
import { BusinessInsurancePage } from "./pages/finance/BusinessInsurancePage";
import { FinancialPlanningPage } from "./pages/finance/FinancialPlanningPage";
import { CreditFundingPage } from "./pages/finance/CreditFundingPage";
import { FinancePage } from "./pages/FinancePage";
import { FinanceCalculatorsPage } from "./pages/operations/FinanceCalculatorsPage";
import { SuperloopPage } from "./pages/operations/SuperloopPage";

// ApplicationsPage (old)
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { SignInPage } from "./pages/SignInPage";
import { DashboardPage } from "./pages/DashboardPage";

import { WhatWeDoPage } from "./pages/about/WhatWeDoPage";
import { OurProcessPage } from "./pages/about/OurProcessPage";
import { WorkWithUsPage } from "./pages/about/WorkWithUsPage";
import { RiskAdvisorPage } from "./pages/on-demand/RiskAdvisorPage";
import { ConnectivityPage } from "./pages/operations/ConnectivityPage";
import { NbnPhonePage } from "./pages/operations/NbnPhonePage";
import { OperationsComingSoonPage } from "./pages/operations/OperationsComingSoonPage";
import { LegalIndexPage } from "./pages/legal/LegalIndexPage";
import { PrivacyPolicyPage } from "./pages/legal/PrivacyPolicyPage";
import { TermsOfUsePage } from "./pages/legal/TermsOfUsePage";
import { TermsOfEngagementPage } from "./pages/legal/TermsOfEngagementPage";
import { PaymentPolicyPage } from "./pages/legal/PaymentPolicyPage";
import { ServicesPolicyPage } from "./pages/legal/ServicesPolicyPage";
import { ThankYouPage } from "./pages/confirmation/ThankYouPage";
import { ContactSuccessPage } from "./pages/confirmation/ContactSuccessPage";
import { BookingConfirmationPage } from "./pages/confirmation/BookingConfirmationPage";
import { MembershipConfirmationPage } from "./pages/confirmation/MembershipConfirmationPage";

import { MembershipOverviewPage } from "./pages/membership/MembershipOverviewPage";
import { RemoteBusinessPartnerMembershipPage } from "./pages/membership/RemoteBusinessPartnerMembershipPage";
import { MembershipInclusionsPage } from "./pages/membership/MembershipInclusionsPage";
import { MembershipPricingPage } from "./pages/membership/MembershipPricingPage";
import { MembershipUsagePage } from "./pages/membership/MembershipUsagePage";
import { MembershipPaymentTermsPage } from "./pages/membership/MembershipPaymentTermsPage";
import { MembershipSignUpPage } from "./pages/membership/MembershipSignUpPage";
import { MembershipFaqPage } from "./pages/membership/MembershipFaqPage";

// ── Member Portal ──
import { PortalLayout }          from "./pages/portal/PortalLayout";
import { PortalDashboard }       from "./pages/portal/PortalDashboard";
import { PortalServices }        from "./pages/portal/PortalServices";
import { PortalServiceRequest }  from "./pages/portal/PortalServiceRequest";
import { PortalServiceDetail }   from "./pages/portal/PortalServiceDetail";
import { PortalSessions }        from "./pages/portal/PortalSessions";
import { PortalDocuments }       from "./pages/portal/PortalDocuments";
import { PortalOffers }          from "./pages/portal/PortalOffers";
import { PortalApps }            from "./pages/portal/PortalApps";
import { PortalResources }       from "./pages/portal/PortalResources";
import { PortalSupport }         from "./pages/portal/PortalSupport";
import { PortalSettings }        from "./pages/portal/PortalSettings";

// ── Admin ──
// admin/signin sits outside the AdminLayout (no sidebar)
// admin/* routes are wrapped by the pathless AdminLayout
import { AdminSignInPage } from "./pages/admin/AdminSignInPage";
import { AdminLayout }     from "./pages/admin/AdminLayout";
import { AdminDashboard }  from "./pages/admin/AdminDashboard";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ScrollToHash } from "./components/ScrollToHash";

function Root() { return <>
  <ScrollToHash />
  <Outlet />
</>; }
function Layout() { return <Outlet />; }

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "help", Component: HelpCenterPage },
      { path: "about/what-we-do", Component: WhatWeDoPage },
      { path: "about/process", Component: OurProcessPage },
      { path: "about/our-process", Component: OurProcessPage },
      { path: "about/work-with-us", Component: WorkWithUsPage },
      { path: "legal", Component: LegalIndexPage },
      { path: "legal/privacy-policy", Component: PrivacyPolicyPage },
      { path: "legal/terms-of-use", Component: TermsOfUsePage },
      { path: "legal/terms-of-engagement", Component: TermsOfEngagementPage },
      { path: "legal/payment-policy", Component: PaymentPolicyPage },
      { path: "legal/services-policy", Component: ServicesPolicyPage },
      { path: "thank-you", Component: ThankYouPage },
      { path: "contact/success", Component: ContactSuccessPage },
      { path: "booking-confirmation", Component: BookingConfirmationPage },
      { path: "confirmation/thank-you", Component: ThankYouPage },
      { path: "confirmation/contact-success", Component: ContactSuccessPage },
      { path: "confirmation/booking-confirmation", Component: BookingConfirmationPage },
      { path: "confirmation/membership-confirmation", Component: MembershipConfirmationPage },

      // ── Top-level legacy / direct routes ──
      { path: "services", Component: ServicesPage },
      { path: "business-advisor", Component: BusinessAdvisorPage },
      { path: "docushare", Component: DocuSharePage },
      { path: "document-nucleus/overview", Component: DocumentOverviewPage },
      { path: "document-nucleus/category/:id", Component: DocumentCategoryPage },
      { path: "document-nucleus/product/:id", Component: DocumentProductPage },
      { path: "applications-legacy", Component: ApplicationsPage },
      { path: "sign-in", Component: SignInPage },
      { path: "dashboard", Component: DashboardPage },

      {
        path: "portal",
        Component: PortalLayout,
        children: [
          { path: "dashboard",  Component: PortalDashboard },
          {
            path: "services",
            Component: Layout,
            children: [
              { index: true,          Component: PortalServices },
              { path: "request",      Component: PortalServiceRequest },
              { path: ":id",          Component: PortalServiceDetail },
            ],
          },
          { path: "sessions",   Component: PortalSessions },
          { path: "documents",  Component: PortalDocuments },
          { path: "offers",     Component: PortalOffers },
          { path: "apps",       Component: PortalApps },
          { path: "resources",  Component: PortalResources },
          { path: "support",    Component: PortalSupport },
          { path: "settings",   Component: PortalSettings },
        ],
      },

      // ── Admin ──
      // admin/signin sits outside the AdminLayout (no sidebar)
      // admin/* routes are wrapped by the pathless AdminLayout
      {
        path: "admin",
        children: [
          { path: "signin", Component: AdminSignInPage },
          {
            Component: AdminLayout,
            children: [
              { path: "dashboard",    Component: AdminDashboard },
              { path: "members",      Component: AdminDashboard },
              { path: "services",     Component: AdminDashboard },
              { path: "applications", Component: AdminDashboard },
              { path: "sessions",     Component: AdminDashboard },
              { path: "documents",    Component: AdminDashboard },
              { path: "offers",       Component: AdminDashboard },
              { path: "the-fixer",    Component: AdminDashboard },
              { path: "settings",     Component: AdminDashboard },
              { path: "*",            Component: AdminDashboard },
            ],
          },
        ],
      },

      // ── On-Demand Services ──
      {
        path: "on-demand",
        Component: Layout,
        children: [
          { index: true, Component: OnDemandPage },
          { path: "business-advisor", Component: BusinessAdvisorPage },
          { path: "services", Component: ServicesPage },
          { path: "documents", Component: DocuSharePage },
          { path: "decision-desk", Component: DecisionDeskPage },
          { path: "the-fixer", Component: TheFixerPage },
          { path: "risk-advisor", Component: RiskAdvisorPage },
        ],
      },

      // ── Managed Services ──
      {
        path: "managed-services",
        Component: Layout,
        children: [
          { index: true, Component: ManagedServicesPage },
          { path: "bid-management", Component: BidManagementPage },
          { path: "real-estate", Component: RealEstatePage },
          { path: "hr-services", Component: HRServicesPage },
        ],
      },

      // ── Business Applications ──
      { path: "applications", Component: BusinessApplicationsPage },

      // ── Business Marketplace ──
      {
        path: "marketplace",
        Component: Layout,
        children: [
          { index: true, Component: MarketplacePage },
          { path: "product/:id", Component: MarketplacePage },
        ],
      },

      // ── Membership ──
      {
        path: "membership",
        Component: Layout,
        children: [
          { index: true, Component: MembershipOverviewPage },
          { path: "overview", Component: MembershipOverviewPage },
          { path: "remote-business-partner-membership", Component: RemoteBusinessPartnerMembershipPage },
          { path: "inclusions", Component: MembershipInclusionsPage },
          { path: "pricing", Component: MembershipPricingPage },
          { path: "usage", Component: MembershipUsagePage },
          { path: "payment-terms", Component: MembershipPaymentTermsPage },
          { path: "sign-up-now", Component: MembershipSignUpPage },
          { path: "frequently-asked-questions", Component: MembershipFaqPage },
          { path: "confirmation", Component: MembershipConfirmationPage },
        ],
      },

      // ── Resources ──
      { path: "resources", Component: ResourcesPage },

      // ── Operations Center ──
      {
        path: "operations",
        Component: Layout,
        children: [
          { index: true, Component: OperationsCenterPage },
          {
            path: "finance",
            Component: Layout,
            children: [
              { index: true, Component: FinancePage },
              { path: "business-lending", Component: BusinessLendingPage },
              { path: "business-insurance", Component: BusinessInsurancePage },
              { path: "financial-planning", Component: FinancialPlanningPage },
              { path: "credit-and-funding", Component: CreditFundingPage },
            ],
          },
          { path: "insurance", Component: BusinessInsurancePage },
          { path: "calculators", Component: FinanceCalculatorsPage },
          { path: "superloop", Component: SuperloopPage },
          { path: "connectivity/superloop", Component: SuperloopPage },
          { path: "connectivity", Component: ConnectivityPage },
          { path: "nbn-phone", Component: NbnPhonePage },
          { path: "connectivity/nbn-phone", Component: NbnPhonePage },
          { path: "coming-soon", Component: OperationsComingSoonPage },
        ],
      },

      // ── Business Offers ──
      { path: "offers", Component: OffersPage },

      // ── Legacy finance routes ──
      {
        path: "finance",
        Component: Layout,
        children: [
          { index: true, Component: FinancePage },
          { path: "business-lending", Component: BusinessLendingPage },
          { path: "business-insurance", Component: BusinessInsurancePage },
          { path: "financial-planning", Component: FinancialPlanningPage },
          { path: "credit-and-funding", Component: CreditFundingPage },
        ],
      },

      { path: "*", Component: NotFoundPage },
    ],
  },
]);
