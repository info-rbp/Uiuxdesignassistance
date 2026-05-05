import { createBrowserRouter, Outlet } from "react-router";

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

function Root() { return <Outlet />; }
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
              { path: "dashboard",    Component: AdminDashboard },
              { path: "members",      Component: AdminDashboard },
              { path: "services",     Component: AdminDashboard },
              { path: "applications", Component: AdminDashboard },
              { path: "sessions",     Component: AdminDashboard },
              { path: "documents",    Component: AdminDashboard },
              { path: "offers",       Component: AdminDashboard },
              { path: "the-fixer",    Component: AdminDashboard },
              { path: "settings",     Component: AdminDashboard },
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
      { path: "membership", Component: MembershipPage },

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
    ],
  },
]);