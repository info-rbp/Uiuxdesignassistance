import { createBrowserRouter, Outlet } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
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
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "docushare", Component: DocuSharePage },
      { path: "applications", Component: ApplicationsPage },
      { path: "offers", Component: OffersPage },
      { path: "finance", Component: FinancePage },
      { path: "resources", Component: ResourcesPage },
      { path: "membership", Component: MembershipPage },
      { path: "business-advisor", Component: BusinessAdvisorPage },
      { path: "document-nucleus/overview", Component: DocumentOverviewPage },
      { path: "document-nucleus/category/:id", Component: DocumentCategoryPage },
      { path: "document-nucleus/product/:id", Component: DocumentProductPage },
    ],
  },
]);