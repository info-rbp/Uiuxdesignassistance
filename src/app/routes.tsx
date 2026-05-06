
import { createBrowserRouter, Outlet } from "react-router-dom";

// Existing pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { MembershipPage } from "./pages/MembershipPage";
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
import { HelpPage } from "./pages/HelpPage";

// On-Demand sub-pages
import { DecisionDeskPage } from "./pages/on-demand/DecisionDeskPage";
import { TheFixerPage }     from "./pages/on-demand/TheFixerPage";
import { RiskAdvisorPage } from "./pages/on-demand/RiskAdvisorPage";

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
import { ConnectivityPage } from "./pages/operations/ConnectivityPage";
import { NbnPhonePage } from "./pages/operations/NbnPhonePage";
import { OperationsComingSoonPage } from "./pages/operations/OperationsComingSoonPage";

// ApplicationsPage (old)
import ApplicationsPage from "./pages/ApplicationsPage";
import { SignInPage } from "./pages/SignInPage";
import { DashboardPage } from "./pages/DashboardPage";

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
import { AdminOnDemandPage } from "./pages/admin/AdminOnDemandPage";
import { AdminManagedServicesPage } from "./pages/admin/AdminManagedServicesPage";
import { AdminApplicationsPage } from "./pages/admin/AdminApplicationsPage";
import { AdminOperationsPage } from "./pages/admin/AdminOperationsPage";
import { AdminMarketplacePage } from "./pages/admin/AdminMarketplacePage";
import { AdminMembershipPage } from "./pages/admin/AdminMembershipPage";
import { AdminOffersPage } from "./pages/admin/AdminOffersPage";
import { AdminResourcesPage } from "./pages/admin/AdminResourcesPage";
import { AdminHelpCenterPage } from "./pages/admin/AdminHelpCenterPage";
import { AdminSiteContentPage } from "./pages/admin/AdminSiteContentPage";
import { AdminSettingsPage } from "./pages/admin/AdminSettingsPage";
import { SecurityTemplate, DisasterRecoveryTemplate, ComplianceTemplate } from "./templates";

// About sub-pages
import { WhatWeDoPage } from "./pages/about/WhatWeDoPage";
import { OurProcessPage } from "./pages/about/OurProcessPage";
import { WorkWithUsPage } from "./pages/about/WorkWithUsPage";

// Membership sub-pages
import { MembershipOverviewPage } from "./pages/membership/MembershipOverviewPage";
import { RemoteBusinessPartnerMembershipPage } from "./pages/membership/RemoteBusinessPartnerMembershipPage";
import { MembershipInclusionsPage } from "./pages/membership/MembershipInclusionsPage";
import { MembershipPricingPage } from "./pages/membership/MembershipPricingPage";
import { MembershipUsagePage } from "./pages/membership/MembershipUsagePage";
import { MembershipPaymentTermsPage } from "./pages/membership/MembershipPaymentTermsPage";
import { MembershipSignUpPage } from "./pages/membership/MembershipSignUpPage";

function Root() { return <Outlet />; }
function Layout() { return <Outlet />; }

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "about",
        Component: Layout,
        children: [
          { index: true, Component: AboutPage },
          { path: "what-we-do", Component: WhatWeDoPage },
          { path: "our-process", Component: OurProcessPage },
          { path: "work-with-us", Component: WorkWithUsPage },
        ],
      },
      { path: "contact", Component: ContactPage },
      { path: "help", Component: HelpPage },

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

      // ── Member Portal ──
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
              { path: "dashboard", Component: AdminDashboard },
              { path: "tasks", Component: AdminDashboard },
              { path: "discovery-calls", Component: AdminDashboard },
              { path: "other", Component: AdminDashboard },
              { path: "on-demand", Component: AdminOnDemandPage },
              { path: "on-demand/business-advisor", Component: AdminOnDemandPage },
              { path: "on-demand/decision-desk", Component: AdminOnDemandPage },
              { path: "on-demand/the-fixer", Component: AdminOnDemandPage },
              { path: "on-demand/document-nucleus", Component: AdminOnDemandPage },
              { path: "on-demand/document-nucleus/templates", Component: AdminOnDemandPage },
              { path: "on-demand/document-nucleus/documentation-suites", Component: AdminOnDemandPage },
              { path: "on-demand/document-nucleus/toolkits", Component: AdminOnDemandPage },
              { path: "on-demand/document-nucleus/process", Component: AdminOnDemandPage },
              { path: "on-demand/services", Component: AdminOnDemandPage },
              { path: "managed-services", Component: AdminManagedServicesPage },
              { path: "managed-services/bid-management", Component: AdminManagedServicesPage },
              { path: "managed-services/real-estate", Component: AdminManagedServicesPage },
              { path: "managed-services/hr-services", Component: AdminManagedServicesPage },
              { path: "managed-services/document-management", Component: AdminManagedServicesPage },
              { path: "managed-services/business-sale-support", Component: AdminManagedServicesPage },
              { path: "managed-services/custom-solutions", Component: AdminManagedServicesPage },
              { path: "applications", Component: AdminApplicationsPage },
              { path: "applications/operations-finance", Component: AdminApplicationsPage },
              { path: "applications/people-hr", Component: AdminApplicationsPage },
              { path: "applications/sales-crm", Component: AdminApplicationsPage },
              { path: "applications/documents", Component: AdminApplicationsPage },
              { path: "applications/support-desk", Component: AdminApplicationsPage },
              { path: "applications/learning", Component: AdminApplicationsPage },
              { path: "applications/analytics", Component: AdminApplicationsPage },
              { path: "applications/payments-billing", Component: AdminApplicationsPage },
              { path: "applications/integrations", Component: AdminApplicationsPage },
              { path: "operations", Component: AdminOperationsPage },
              { path: "operations/business-finance", Component: AdminOperationsPage },
              { path: "operations/business-insurance", Component: AdminOperationsPage },
              { path: "operations/superloop-connectivity", Component: AdminOperationsPage },
              { path: "operations/calculators", Component: AdminOperationsPage },
              { path: "marketplace", Component: AdminMarketplacePage },
              { path: "marketplace/listings", Component: AdminMarketplacePage },
              { path: "marketplace/buying-process", Component: AdminMarketplacePage },
              { path: "marketplace/list-with-us", Component: AdminMarketplacePage },
              { path: "membership", Component: AdminMembershipPage },
              { path: "membership/memberships", Component: AdminMembershipPage },
              { path: "membership/members", Component: AdminMembershipPage },
              { path: "membership/payments", Component: AdminMembershipPage },
              { path: "membership/portal-access", Component: AdminMembershipPage },
              { path: "offers", Component: AdminOffersPage },
              { path: "offers/all", Component: AdminOffersPage },
              { path: "offers/listings", Component: AdminOffersPage },
              { path: "offers/categories", Component: AdminOffersPage },
              { path: "offers/redemptions", Component: AdminOffersPage },
              { path: "resources", Component: AdminResourcesPage },
              { path: "resources/articles", Component: AdminResourcesPage },
              { path: "resources/guides", Component: AdminResourcesPage },
              { path: "resources/tools", Component: AdminResourcesPage },
              { path: "resources/downloads", Component: AdminResourcesPage },
              { path: "resources/educational", Component: AdminResourcesPage },
              { path: "help-center", Component: AdminHelpCenterPage },
              { path: "help-center/faqs", Component: AdminHelpCenterPage },
              { path: "help-center/knowledge-base", Component: AdminHelpCenterPage },
              { path: "help-center/troubleshooting", Component: AdminHelpCenterPage },
              { path: "help-center/resources", Component: AdminHelpCenterPage },
              { path: "help-center/support", Component: AdminHelpCenterPage },
              { path: "site-content/pages", Component: AdminSiteContentPage },
              { path: "site-content/sections", Component: AdminSiteContentPage },
              { path: "site-content/mega-menu", Component: AdminSiteContentPage },
              { path: "site-content/seo", Component: AdminSiteContentPage },
              { path: "site-content/header-footer", Component: AdminSiteContentPage },
              { path: "site-content/status", Component: AdminSiteContentPage },
              { path: "settings/platform", Component: AdminSettingsPage },
              { path: "settings/admin-users", Component: AdminSettingsPage },
              { path: "settings/integrations", Component: AdminSettingsPage },
              { path: "settings/firebase-readiness", Component: AdminSettingsPage },
              { path: "settings/access-control", Component: AdminSettingsPage },
              { path: "members", Component: AdminMembershipPage },
              { path: "services", Component: AdminOnDemandPage },
              { path: "documents", Component: AdminOnDemandPage },
              { path: "sessions", Component: AdminDashboard },
              { path: "the-fixer", Component: AdminOnDemandPage },
              { path: "settings", Component: AdminSettingsPage },
              { path: "*", Component: AdminDashboard },
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
          { index: true, Component: MembershipPage },
          { path: "overview", Component: MembershipOverviewPage },
          { path: "remote-business-partner", Component: RemoteBusinessPartnerMembershipPage },
          { path: "inclusions", Component: MembershipInclusionsPage },
          { path: "pricing", Component: MembershipPricingPage },
          { path: "usage", Component: MembershipUsagePage },
          { path: "payment-terms", Component: MembershipPaymentTermsPage },
          { path: "sign-up", Component: MembershipSignUpPage },
        ]
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
          { path: "connectivity", Component: ConnectivityPage },
          { path: "nbn-and-phone", Component: NbnPhonePage },
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
      { path: "security", Component: SecurityTemplate },
      { path: "disaster-recovery", Component: DisasterRecoveryTemplate },
      { path: "compliance", Component: ComplianceTemplate },
    ],
  },
]);
