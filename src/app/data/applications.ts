import {
  Building2, Users, CalendarDays, Files, TrendingUp, LayoutTemplate,
  ShoppingCart, BookOpen, CreditCard, PiggyBank, BarChart3,
  Headphones, MessageCircle, GraduationCap, Sparkles, FolderKanban
} from "lucide-react";

export const applicationsData = [
  {
    id: "business-operating-system",
    slug: "business-operating-system",
    name: "Business Operating System / ERP",
    category: "Run the Business",
    icon: Building2,
    color: "bg-slate-100 text-slate-700",
    shortDesc: "Manage core operations, records, accounting, workflows, purchasing, selling and administration from one business hub.",
    benefits: [
      "Centralise business operations",
      "Manage purchasing and selling",
      "Streamline business administration",
      "Track company-wide workflows",
      "Maintain operational records",
      "Eliminate duplicate data entry"
    ],
    capabilities: [
      { name: "Centralised Records", desc: "Keep all critical business information in one accessible location." },
      { name: "Workflow Management", desc: "Track and manage standard operating procedures across your team." },
      { name: "Accounting Prep", desc: "Prepare and organise financial data before reporting." },
      { name: "Purchasing Control", desc: "Manage supplier relationships and purchasing approvals." }
    ],
    audience: [
      "growing small businesses",
      "business managers",
      "operations teams",
      "founders scaling beyond spreadsheets"
    ],
    relatedSlugs: ["finance-payments-hub", "people-hr", "insights-reporting"]
  },
  {
    id: "crm-sales-hub",
    slug: "crm-sales-hub",
    name: "CRM & Sales Hub",
    category: "Grow the Business",
    icon: TrendingUp,
    color: "bg-blue-100 text-blue-700",
    shortDesc: "Track leads, customers, opportunities, sales activity, follow-ups and relationship history.",
    benefits: [
      "Capture and manage leads",
      "Track sales opportunities",
      "Maintain customer records",
      "Manage follow-ups and reminders",
      "View sales activity",
      "Connect sales data with wider business workflows"
    ],
    capabilities: [
      { name: "Lead Management", desc: "Capture, organise and track potential customers." },
      { name: "Pipeline Visibility", desc: "View opportunities by stage, value and next action." },
      { name: "Customer Records", desc: "Keep contact details, notes and activity history in one place." },
      { name: "Task and Follow-Up Tracking", desc: "Create reminders and next steps for customer interactions." }
    ],
    audience: [
      "small business owners",
      "founders",
      "sales teams",
      "service-based businesses",
      "businesses replacing spreadsheets or disconnected CRMs"
    ],
    relatedSlugs: ["finance-payments-hub", "support-desk", "insights-reporting"]
  },
  {
    id: "finance-payments-hub",
    slug: "finance-payments-hub",
    name: "Finance & Payments Hub",
    category: "Manage Money",
    icon: CreditCard,
    color: "bg-emerald-100 text-emerald-700",
    shortDesc: "Manage invoicing, payments, billing records, financial workflows and Australian business finance setup.",
    benefits: [
      "Send professional invoices",
      "Track incoming payments",
      "Manage billing schedules",
      "Improve cash flow visibility",
      "Simplify accounting prep",
      "Stay compliant with Australian standards"
    ],
    capabilities: [
      { name: "Invoicing", desc: "Create and send invoices quickly and accurately." },
      { name: "Payment Tracking", desc: "Monitor unpaid invoices and automatically follow up." },
      { name: "Billing Records", desc: "Keep historical data organised for tax time." },
      { name: "Financial Workflows", desc: "Connect your billing with other business operations seamlessly." }
    ],
    audience: [
      "business owners",
      "finance administration",
      "service providers",
      "contractors"
    ],
    relatedSlugs: ["business-operating-system", "lending-funding-hub", "crm-sales-hub"]
  },
  {
    id: "lending-funding-hub",
    slug: "lending-funding-hub",
    name: "Lending / Funding Hub",
    category: "Manage Money",
    icon: PiggyBank,
    color: "bg-teal-100 text-teal-700",
    shortDesc: "Support finance enquiries, funding workflows, lending records and referral pathways.",
    benefits: [
      "Track funding applications",
      "Manage lending documents",
      "Explore referral pathways",
      "Access finance resources",
      "Organise asset finance data",
      "Improve capital readiness"
    ],
    capabilities: [
      { name: "Enquiry Tracking", desc: "Keep track of active lending conversations and next steps." },
      { name: "Document Collection", desc: "Request and securely store documents required for funding." },
      { name: "Lending Workflows", desc: "Follow structured steps to progress finance applications." },
      { name: "Referral Engine", desc: "Connect smoothly with advisory and lending partners." }
    ],
    audience: [
      "businesses seeking capital",
      "equipment-heavy industries",
      "growing operations",
      "founders"
    ],
    relatedSlugs: ["finance-payments-hub", "business-operating-system", "documents-docushare"]
  },
  {
    id: "ecommerce-webshop",
    slug: "ecommerce-webshop",
    name: "E-commerce / Webshop",
    category: "Grow the Business",
    icon: ShoppingCart,
    color: "bg-fuchsia-100 text-fuchsia-700",
    shortDesc: "Sell products or services online with catalogue, checkout, shipping and e-commerce integrations.",
    benefits: [
      "List products easily",
      "Manage online orders",
      "Handle secure checkout",
      "Integrate shipping options",
      "Track inventory levels",
      "Connect with finance hubs"
    ],
    capabilities: [
      { name: "Product Catalogue", desc: "Build a beautiful list of physical or digital products." },
      { name: "Secure Checkout", desc: "Process transactions smoothly and securely." },
      { name: "Order Management", desc: "Track, fulfill, and update orders in real-time." },
      { name: "Shipping Integration", desc: "Calculate rates and generate labels quickly." }
    ],
    audience: [
      "retailers",
      "product creators",
      "agencies selling fixed-price services",
      "online stores"
    ],
    relatedSlugs: ["crm-sales-hub", "finance-payments-hub", "website-cms-content"]
  },
  {
    id: "documents-docushare",
    slug: "docushare",
    name: "Documents / DocuShare",
    category: "Run the Business",
    icon: Files,
    color: "bg-amber-100 text-amber-700",
    shortDesc: "Access templates, toolkits, document packs, downloadable resources and business document workflows.",
    benefits: [
      "Access professional templates",
      "Secure document sharing",
      "Manage client documents",
      "Organise internal policies",
      "Request files from customers",
      "Maintain document versions"
    ],
    capabilities: [
      { name: "Template Library", desc: "Access essential business documents across HR, ops, and legal." },
      { name: "Secure Sharing", desc: "Share files internally and externally with access controls." },
      { name: "Document Requests", desc: "Request and collect files smoothly from clients." },
      { name: "Version Control", desc: "Always know which document is the most recent." }
    ],
    audience: [
      "all small businesses",
      "service providers",
      "advisory clients",
      "teams needing shared access"
    ],
    relatedSlugs: ["business-operating-system", "people-hr", "resource-centre"]
  },
  {
    id: "website-cms-content",
    slug: "website-cms-content",
    name: "Website / CMS / Content Hub",
    category: "Grow the Business",
    icon: LayoutTemplate,
    color: "bg-rose-100 text-rose-700",
    shortDesc: "Build landing pages, publish content, manage blogs, newsletters and website resources.",
    benefits: [
      "Publish content easily",
      "Manage landing pages",
      "Send engaging newsletters",
      "Drive inbound traffic",
      "Control your web presence",
      "Design without coding"
    ],
    capabilities: [
      { name: "Drag & Drop Builder", desc: "Create engaging pages quickly." },
      { name: "Blogging Engine", desc: "Publish articles and news to attract visitors." },
      { name: "Newsletter Manager", desc: "Keep your audience updated with built-in emails." },
      { name: "Resource Publishing", desc: "Share lead magnets and gated content." }
    ],
    audience: [
      "marketing personnel",
      "founders",
      "content creators",
      "service businesses"
    ],
    relatedSlugs: ["crm-sales-hub", "ecommerce-webshop", "insights-reporting"]
  },
  {
    id: "resource-centre",
    slug: "resource-centre",
    name: "Resource Centre / Knowledge Base",
    category: "Learn and Improve",
    icon: BookOpen,
    color: "bg-orange-100 text-orange-700",
    shortDesc: "Access guides, articles, downloads, business resources and educational reference content.",
    benefits: [
      "Provide customer self-serve support",
      "Host internal team guides",
      "Centralise business reference",
      "Reduce repetitive queries",
      "Organise helpful downloads",
      "Structure learning paths"
    ],
    capabilities: [
      { name: "Article Management", desc: "Create and categorise helpful articles." },
      { name: "Searchability", desc: "Allow users to find answers quickly with robust search." },
      { name: "Internal & External Views", desc: "Separate team knowledge from customer knowledge." },
      { name: "Download Hubs", desc: "Host assets and resources for easy distribution." }
    ],
    audience: [
      "support teams",
      "HR teams",
      "customer success",
      "training managers"
    ],
    relatedSlugs: ["support-desk", "learning-centre", "documents-docushare"]
  },
  {
    id: "support-desk",
    slug: "support-desk",
    name: "Support Desk",
    category: "Support Customers",
    icon: Headphones,
    color: "bg-violet-100 text-violet-700",
    shortDesc: "Manage customer support tickets, email support, WhatsApp communication, calls and issue resolution.",
    benefits: [
      "Centralise customer queries",
      "Track issue resolution times",
      "Provide multi-channel support",
      "Collaborate on tickets",
      "Prevent dropped conversations",
      "Connect support to CRM"
    ],
    capabilities: [
      { name: "Ticket Management", desc: "Turn emails, chats and form fills into manageable tickets." },
      { name: "Omnichannel Inbox", desc: "View WhatsApp, email, and social messages in one place." },
      { name: "Collaboration", desc: "Assign tickets and leave internal notes for the team." },
      { name: "Resolution Metrics", desc: "Track how fast and effectively issues are resolved." }
    ],
    audience: [
      "customer support teams",
      "operations managers",
      "service businesses",
      "client success roles"
    ],
    relatedSlugs: ["crm-sales-hub", "resource-centre", "insights-reporting"]
  },
  {
    id: "people-hr",
    slug: "people-hr",
    name: "People / HR Hub",
    category: "Run the Business",
    icon: Users,
    color: "bg-cyan-100 text-cyan-700",
    shortDesc: "Manage employee records, leave, HR workflows, people operations and workforce administration.",
    benefits: [
      "Centralise employee data",
      "Track leave requests",
      "Manage onboarding checklists",
      "Organise HR policies",
      "Run performance reviews",
      "Improve team communication"
    ],
    capabilities: [
      { name: "Employee Directory", desc: "Keep key details, roles and contact info updated." },
      { name: "Leave Tracking", desc: "Allow staff to request time off and managers to approve." },
      { name: "Onboarding Flows", desc: "Ensure every new hire gets a consistent, welcoming start." },
      { name: "Document Storage", desc: "Keep contracts and performance details secure." }
    ],
    audience: [
      "HR managers",
      "founders",
      "operations teams",
      "businesses with 5+ employees"
    ],
    relatedSlugs: ["business-operating-system", "learning-centre", "meetings-collaboration"]
  },
  {
    id: "learning-centre",
    slug: "learning-centre",
    name: "Learning Centre",
    category: "Learn and Improve",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-700",
    shortDesc: "Deliver training, courses, onboarding, assignments and structured learning programs.",
    benefits: [
      "Standardise employee training",
      "Create modular courses",
      "Track learning progress",
      "Assess knowledge retention",
      "Provide ongoing education",
      "Reduce training time"
    ],
    capabilities: [
      { name: "Course Builder", desc: "Assemble videos, text, and documents into structured courses." },
      { name: "Progress Tracking", desc: "See who has completed essential compliance or training." },
      { name: "Assignments", desc: "Test knowledge with quizzes and practical submissions." },
      { name: "Certification", desc: "Reward completion with verifiable internal certificates." }
    ],
    audience: [
      "operations managers",
      "HR teams",
      "scaling businesses",
      "advisory clients"
    ],
    relatedSlugs: ["people-hr", "resource-centre", "business-operating-system"]
  },
  {
    id: "meetings-collaboration",
    slug: "meetings-collaboration",
    name: "Meetings & Collaboration",
    category: "Run the Business",
    icon: CalendarDays,
    color: "bg-lime-100 text-lime-700",
    shortDesc: "Manage meetings, team planning, discussions, projects, collaboration and communication.",
    benefits: [
      "Coordinate team schedules",
      "Track project progress",
      "Centralise internal messaging",
      "Store meeting agendas and notes",
      "Assign action items smoothly",
      "Reduce messy email threads"
    ],
    capabilities: [
      { name: "Meeting Manager", desc: "Set agendas, record minutes, and track action items." },
      { name: "Project Boards", desc: "Visualise work with Kanban or list views." },
      { name: "Team Discussions", desc: "Keep conversations organised by topic or project." },
      { name: "Shared Calendars", desc: "Align on key dates, deadines, and availability." }
    ],
    audience: [
      "project managers",
      "remote teams",
      "agencies",
      "operations staff"
    ],
    relatedSlugs: ["business-operating-system", "people-hr", "support-desk"]
  },
  {
    id: "insights-reporting",
    slug: "insights-reporting",
    name: "Insights / Reporting Hub",
    category: "Manage Money",
    icon: BarChart3,
    color: "bg-sky-100 text-sky-700",
    shortDesc: "View dashboards, KPIs, analytics, reporting and visibility across business data.",
    benefits: [
      "Visualise key metrics",
      "Track business growth",
      "Generate management reports",
      "Spot trends quickly",
      "Make data-driven decisions",
      "Align team on shared goals"
    ],
    capabilities: [
      { name: "Custom Dashboards", desc: "Build views of the data that matters most to you." },
      { name: "Automated Reporting", desc: "Schedule reports to be sent to stakeholders weekly or monthly." },
      { name: "Goal Tracking", desc: "Set targets and monitor progress automatically." },
      { name: "Cross-App Data", desc: "Pull insights from finance, sales, and operations." }
    ],
    audience: [
      "founders",
      "management teams",
      "advisors",
      "finance personnel"
    ],
    relatedSlugs: ["business-operating-system", "crm-sales-hub", "finance-payments-hub"]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    name: "AI / Automation Layer",
    category: "Learn and Improve",
    icon: Sparkles,
    color: "bg-purple-100 text-purple-700",
    shortDesc: "Support AI-assisted workflows, translation, automation, recommendations and intelligent process support.",
    benefits: [
      "Automate repetitive tasks",
      "Generate content outlines",
      "Summarise long documents",
      "Translate communications",
      "Get intelligent business recommendations",
      "Save hours of administrative time"
    ],
    capabilities: [
      { name: "Workflow Triggers", desc: "Set rules to automate actions across your applications." },
      { name: "AI Drafting", desc: "Use AI to help write emails, documents, or job descriptions." },
      { name: "Smart Summarisation", desc: "Quickly digest meeting notes or long threads." },
      { name: "Data Translation", desc: "Seamlessly translate or reformat data for better usability." }
    ],
    audience: [
      "innovative founders",
      "operations managers",
      "teams looking for efficiency",
      "content creators"
    ],
    relatedSlugs: ["insights-reporting", "business-operating-system", "website-cms-content"]
  }
];

export const CATEGORIES = [
  {
    name: "Run the Business",
    description: "Core operations, HR, collaboration and document management.",
  },
  {
    name: "Grow the Business",
    description: "CRM, sales, e-commerce, and website management.",
  },
  {
    name: "Manage Money",
    description: "Finance, payments, lending, funding, and reporting.",
  },
  {
    name: "Support Customers",
    description: "Ticketing, support desks, and communications.",
  },
  {
    name: "Learn and Improve",
    description: "Learning, resources, and AI automation.",
  }
];
