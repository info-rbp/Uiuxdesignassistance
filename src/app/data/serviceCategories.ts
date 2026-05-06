import { IServiceCategory } from "../types";

export const serviceCategories: IServiceCategory[] = [
  {
    label: "Design",
    path: "design",
    services: [
      {
        label: "Logo Design",
        path: "logo-design"
      },
      {
        label: "Website Design",
        path: "website-design"
      },
      {
        label: "App Design",
        path: "app-design"
      },
      {
        label: "Brand Identity",
        path: "brand-identity"
      }
    ]
  },
  {
    label: "Development",
    path: "development",
    services: [
      {
        label: "Web Development",
        path: "web-development"
      },
      {
        label: "App Development",
        path: "app-development"
      },
      {
        label: "Backend Development",
        path: "backend-development"
      },
      {
        label: "DevOps",
        path: "devops"
      }
    ]
  },
  {
    label: "Marketing",
    path: "marketing",
    services: [
      {
        label: "SEO",
        path: "seo"
      },
      {
        label: "PPC",
        path: "ppc"
      },
      {
        label: "Content Marketing",
        path: "content-marketing"
      },
      {
        label: "Social Media Marketing",
        path: "social-media-marketing"
      }
    ]
  },
  {
    label: "Business",
    path: "business",
    services: [
      {
        label: "Business Strategy",
        path: "business-strategy"
      },
      {
        label: "Market Research",
        path: "market-research"
      },
      {
        label: "Financial Planning",
        path: "financial-planning"
      },
      {
        label: "Legal Services",
        path: "legal-services"
      }
    ]
  }
];
