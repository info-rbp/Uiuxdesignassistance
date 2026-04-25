import { createBrowserRouter, Outlet } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceCategoryPage } from "./pages/ServiceCategoryPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { DocuSharePage } from "./pages/DocuSharePage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { OffersPage } from "./pages/OffersPage";
import { FinancePage } from "./pages/FinancePage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { MembershipPage } from "./pages/MembershipPage";
import { BusinessAdvisorPage } from "./pages/BusinessAdvisorPage";
import { DocumentOverviewPage } from "./pages/DocumentOverviewPage";
import { DocumentCategoryPage } from "./pages/DocumentCategoryPage";
import { DocumentProductPage } from "./pages/DocumentProductPage";
import { ApplicationDetailPage } from "./pages/ApplicationDetailPage";
import { BusinessAdvisorIntakePage } from "./pages/BusinessAdvisorIntakePage";
import { FinanceEnquiryPage } from "./pages/FinanceEnquiryPage";
import { InsuranceHubPage } from "./pages/InsuranceHubPage";
import { InsuranceCategoryPage } from "./pages/InsuranceCategoryPage";
import { InsurancePolicyPage } from "./pages/InsurancePolicyPage";
import { FinanceProductsHubPage } from "./pages/FinanceProductsHubPage";
import { FinanceCategoryPage } from "./pages/FinanceCategoryPage";
import { FinanceProductPage } from "./pages/FinanceProductPage";
import { FundingHubPage } from "./pages/FundingHubPage";
import { ReferralDisclosurePage } from "./pages/ReferralDisclosurePage";
import { ManagedSolutionsPage } from "./pages/ManagedSolutionsPage";
import { ManagedConnectivityPage } from "./pages/ManagedConnectivityPage";
import { ManagedInternetPlansPage } from "./pages/ManagedInternetPlansPage";
import { BackupConnectivityPage } from "./pages/BackupConnectivityPage";
import { ManagedWifiPage } from "./pages/ManagedWifiPage";
import { MultiSiteConnectivityPage } from "./pages/MultiSiteConnectivityPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";

// Portal shell + pages
import { PortalLayout } from "./components/layouts/PortalLayout";
import { PortalDashboardPage } from "./pages/portal/PortalDashboardPage";
import { PortalMembershipPage } from "./pages/portal/PortalMembershipPage";
import { PortalSubscriptionPage } from "./pages/portal/PortalSubscriptionPage";
import { PortalCustomisationRequestsPage } from "./pages/portal/PortalCustomisationRequestsPage";
import { PortalDiscoveryCallsPage } from "./pages/portal/PortalDiscoveryCallsPage";
import { PortalSupportPage } from "./pages/portal/PortalSupportPage";
import { PortalSavedPage } from "./pages/portal/PortalSavedPage";
import { PortalProfilePage } from "./pages/portal/PortalProfilePage";

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "services/:category", Component: ServiceCategoryPage },
      { path: "service/:slug", Component: ServiceDetailPage },
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignupPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "docushare", Component: DocuSharePage },
      { path: "applications", Component: ApplicationsPage },
      { path: "applications/:slug", Component: ApplicationDetailPage },
      { path: "offers", Component: OffersPage },
      { path: "finance", Component: FinancePage },
      { path: "finance/enquiry", Component: FinanceEnquiryPage },

      // Insurance Hierarchy
      { path: "finance/insurance", Component: InsuranceHubPage },
      { path: "finance/insurance/cat/:categorySlug", Component: InsuranceCategoryPage },
      { path: "finance/insurance/:slug", Component: InsurancePolicyPage },

      // Finance Products Hierarchy
      { path: "finance/products", Component: FinanceProductsHubPage },
      { path: "finance/products/cat/:categorySlug", Component: FinanceCategoryPage },
      { path: "finance/products/:slug", Component: FinanceProductPage },

      // Legacy / Backup
      { path: "finance/funding", Component: FundingHubPage },

      { path: "referral-disclosure", Component: ReferralDisclosurePage },
      { path: "resources", Component: ResourcesPage },
      { path: "membership", Component: MembershipPage },
      { path: "business-advisor", Component: BusinessAdvisorPage },
      { path: "business-advisor/intake", Component: BusinessAdvisorIntakePage },
      { path: "document-nucleus/overview", Component: DocumentOverviewPage },
      { path: "document-nucleus/category/:id", Component: DocumentCategoryPage },
      { path: "document-nucleus/product/:id", Component: DocumentProductPage },

      // Managed Solutions Hierarchy
      { path: "managed-solutions", Component: ManagedSolutionsPage },
      { path: "managed-solutions/managed-connectivity", Component: ManagedConnectivityPage },
      { path: "managed-solutions/managed-connectivity/internet-plans", Component: ManagedInternetPlansPage },
      { path: "managed-solutions/managed-connectivity/backup-connectivity", Component: BackupConnectivityPage },
      { path: "managed-solutions/managed-wifi", Component: ManagedWifiPage },
      { path: "managed-solutions/multi-site-connectivity", Component: MultiSiteConnectivityPage },
    ],
  },
  {
    path: "/portal",
    Component: PortalLayout,
    children: [
      { index: true, Component: PortalDashboardPage },
      { path: "membership", Component: PortalMembershipPage },
      { path: "subscription", Component: PortalSubscriptionPage },
      { path: "saved", Component: PortalSavedPage },
      { path: "customisation-requests", Component: PortalCustomisationRequestsPage },
      { path: "discovery-calls", Component: PortalDiscoveryCallsPage },
      { path: "support", Component: PortalSupportPage },
      { path: "profile", Component: PortalProfilePage },
    ],
  },
]);
