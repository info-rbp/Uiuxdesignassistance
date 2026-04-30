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
          { path: "product/:id", Component: MarketplacePage }, // placeholder product detail
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

      // ── Document Nucleus (legacy + new) ──
      { path: "docushare", Component: DocuSharePage },
      { path: "document-nucleus/overview", Component: DocumentOverviewPage },
      { path: "document-nucleus/category/:id", Component: DocumentCategoryPage },
      { path: "document-nucleus/product/:id", Component: DocumentProductPage },

      // ── Legacy finance routes (keep for backward compat) ──
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

      // ── Legacy applications route ──
      { path: "applications-legacy", Component: ApplicationsPage },

      // ── Sign-in placeholder ──
      { path: "sign-in", Component: ContactPage },
    ],
  },
]);