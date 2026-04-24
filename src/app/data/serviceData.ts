export type ServiceCategory = {
  title: string;
  slug: string;
  description: string;
  examples: string[];
  heroImage: string;
};

export type ServiceItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  deliverables: string[];
  process: string[];
  idealFor: string[];
  ctaLabel?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Operations Advisory",
    slug: "operations-advisory",
    description: "Improve systems, workflows, delivery processes, and operational performance.",
    examples: ["Process improvement", "Workflow design", "Operational review"],
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Human Resource Advisory",
    slug: "human-resource-advisory",
    description: "Support people, structure, performance, compliance, and workplace processes.",
    examples: ["HR systems review", "Workforce planning", "Performance improvement"],
    heroImage:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Management Consulting",
    slug: "management-consulting",
    description: "Clarify direction, solve business problems, and improve decision-making.",
    examples: ["Business review", "Strategic planning", "Performance diagnostics"],
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Change Management",
    slug: "change-management",
    description: "Plan and manage change across people, systems, processes, and operations.",
    examples: ["Change planning", "Implementation support", "Stakeholder alignment"],
    heroImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Implementation and Adoption",
    slug: "ai-implementation-adoption",
    description: "Identify practical AI opportunities and support adoption across the business.",
    examples: ["AI readiness review", "Workflow automation", "AI adoption planning"],
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Admin and Finance Consulting",
    slug: "admin-finance-consulting",
    description: "Improve business administration, financial processes, reporting, and controls.",
    examples: ["Admin systems review", "Cash flow process review", "Reporting improvement"],
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Customised Solutions",
    slug: "customised-solutions",
    description: "Tailored consulting support for business problems that do not fit neatly into one category.",
    examples: ["Custom advisory projects", "Business problem solving", "Implementation support"],
    heroImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
];

export const services: ServiceItem[] = [
  {
    id: "ops-process-review",
    slug: "process-improvement-review",
    title: "Process Improvement Review",
    category: "operations-advisory",
    summary: "Map bottlenecks, identify friction, and improve delivery workflows across your business.",
    overview:
      "A focused operational review designed to surface workflow issues, duplicated effort, approval delays, and handoff gaps. We assess how work currently moves through the business and recommend practical improvements that can be applied quickly.",
    deliverables: [
      "Current-state workflow review",
      "Bottleneck and dependency analysis",
      "Priority improvement recommendations",
      "Short implementation action plan",
    ],
    process: [
      "Discovery session to understand your operating model",
      "Review of current workflows, roles, and handoffs",
      "Identification of operational risks and friction points",
      "Presentation of recommendations and next-step priorities",
    ],
    idealFor: ["Growing teams", "Founders juggling delivery", "Operations managers needing clarity"],
  },
  {
    id: "ops-sop-design",
    slug: "workflow-and-sop-design",
    title: "Workflow and SOP Design",
    category: "operations-advisory",
    summary: "Turn informal ways of working into documented, repeatable operating procedures.",
    overview:
      "This service helps you create clear, usable workflows and SOPs so your team can deliver consistently. It is especially helpful when work lives in people's heads instead of a documented process.",
    deliverables: [
      "Documented workflow maps",
      "Standard operating procedures",
      "Roles and responsibility notes",
      "Implementation guidance for the team",
    ],
    process: [
      "Review existing process and pain points",
      "Define target workflow and ownership",
      "Draft SOPs and process documents",
      "Walkthrough and refinement session",
    ],
    idealFor: ["Small teams scaling quickly", "Service businesses", "Operations handover projects"],
  },
  {
    id: "hr-workforce-planning",
    slug: "workforce-planning-review",
    title: "Workforce Planning Review",
    category: "human-resource-advisory",
    summary: "Align team structure, role coverage, and people planning with business priorities.",
    overview:
      "A structured review of how your current team setup supports delivery, growth, and accountability. We look at role overlap, capability gaps, and practical workforce planning improvements.",
    deliverables: [
      "Current team structure review",
      "Role and capacity observations",
      "Gap analysis and risk notes",
      "Recommended workforce actions",
    ],
    process: [
      "Discovery discussion on roles and operating pressures",
      "Review of team responsibilities and dependencies",
      "Assessment of gaps, overlap, and role clarity",
      "Action-oriented recommendations",
    ],
    idealFor: ["SMEs growing headcount", "Teams with unclear role ownership", "Leaders preparing to hire"],
  },
  {
    id: "hr-performance-framework",
    slug: "performance-improvement-framework",
    title: "Performance Improvement Framework",
    category: "human-resource-advisory",
    summary: "Build a more consistent structure for feedback, expectations, and performance discussions.",
    overview:
      "This service helps businesses introduce a simple, practical performance framework so managers can set expectations clearly and support stronger follow-through across the team.",
    deliverables: [
      "Performance review framework",
      "Manager guidance notes",
      "Suggested review cycle structure",
      "Template recommendations for check-ins",
    ],
    process: [
      "Review current approach to performance management",
      "Define business needs and management maturity",
      "Design the framework and support materials",
      "Handover and rollout guidance",
    ],
    idealFor: ["Owner-led businesses", "First-time managers", "Teams without a formal review process"],
  },
  {
    id: "mgmt-strategy-review",
    slug: "strategic-business-review",
    title: "Strategic Business Review",
    category: "management-consulting",
    summary: "Step back, assess the business, and clarify priorities for the next stage of growth.",
    overview:
      "A high-level review that helps you understand what is working, what is stuck, and what needs attention first. Designed for leaders who need sharper direction and better decision-making structure.",
    deliverables: [
      "Business position review",
      "Priority themes and risks",
      "Strategic recommendation summary",
      "Leadership decision agenda",
    ],
    process: [
      "Leadership discovery session",
      "Review of current goals, issues, and constraints",
      "Analysis of business priorities and choices",
      "Recommendations and decision support summary",
    ],
    idealFor: ["Founders", "Directors", "Leadership teams at an inflection point"],
  },
  {
    id: "mgmt-planning",
    slug: "business-planning-support",
    title: "Business Planning Support",
    category: "management-consulting",
    summary: "Translate ambition into a clearer business plan, priorities, and operating direction.",
    overview:
      "This service supports businesses that need a sharper planning process, whether for internal alignment, growth planning, or preparing for external conversations such as funding or partnerships.",
    deliverables: [
      "Planning workshop output",
      "Priority roadmap",
      "Goal and milestone structure",
      "Recommended accountability framework",
    ],
    process: [
      "Clarify objectives and current business position",
      "Facilitate planning conversations",
      "Structure priorities into a roadmap",
      "Final review and refinement",
    ],
    idealFor: ["Growing SMEs", "Founder-led businesses", "Teams needing planning discipline"],
  },
  {
    id: "change-readiness",
    slug: "change-readiness-assessment",
    title: "Change Readiness Assessment",
    category: "change-management",
    summary: "Understand whether your people, process, and structure are ready for planned change.",
    overview:
      "A diagnostic service that evaluates readiness for change initiatives such as restructuring, new systems, or process redesign. It helps reduce avoidable disruption before rollout begins.",
    deliverables: [
      "Readiness assessment summary",
      "Stakeholder risk observations",
      "Key adoption blockers",
      "Recommended pre-change actions",
    ],
    process: [
      "Define the change scope and intended outcomes",
      "Assess impacted stakeholders and dependencies",
      "Identify adoption and communication risks",
      "Recommend readiness actions before rollout",
    ],
    idealFor: ["Restructuring projects", "System implementations", "Leadership-led change programmes"],
  },
  {
    id: "change-implementation",
    slug: "change-implementation-support",
    title: "Change Implementation Support",
    category: "change-management",
    summary: "Support change delivery with practical planning, communication, and adoption guidance.",
    overview:
      "Designed for businesses that already know change is required but need help planning rollout, stakeholder communication, and internal coordination so the change actually lands well.",
    deliverables: [
      "Implementation support plan",
      "Stakeholder communication outline",
      "Risk and issue tracking recommendations",
      "Adoption support actions",
    ],
    process: [
      "Set implementation scope and milestones",
      "Map stakeholders and communications",
      "Support coordination across teams",
      "Review progress and adapt actions",
    ],
    idealFor: ["Cross-functional changes", "Operational redesign", "Leaders managing business transition"],
  },
  {
    id: "ai-readiness",
    slug: "ai-readiness-review",
    title: "AI Readiness Review",
    category: "ai-implementation-adoption",
    summary: "Identify realistic AI use cases and the operational groundwork needed before adoption.",
    overview:
      "A practical review for businesses exploring AI without wanting hype or guesswork. We focus on where AI may help, where it may create risk, and what needs to be in place first.",
    deliverables: [
      "AI opportunity assessment",
      "Readiness observations across process and data",
      "Risk and governance considerations",
      "Recommended next-step priorities",
    ],
    process: [
      "Review business goals and current workflows",
      "Identify candidate AI use cases",
      "Assess readiness, risk, and feasibility",
      "Recommend short-term and medium-term actions",
    ],
    idealFor: ["SMEs exploring AI", "Operations teams", "Leaders wanting a grounded adoption plan"],
  },
  {
    id: "ai-adoption-plan",
    slug: "ai-adoption-planning",
    title: "AI Adoption Planning",
    category: "ai-implementation-adoption",
    summary: "Build a practical path for adopting AI tools across selected workflows and teams.",
    overview:
      "This service helps turn AI interest into an implementation plan. It covers priorities, pilot areas, team enablement, and change considerations so adoption is structured and realistic.",
    deliverables: [
      "AI adoption roadmap",
      "Suggested pilot priorities",
      "Team enablement considerations",
      "Implementation support recommendations",
    ],
    process: [
      "Clarify desired outcomes and business constraints",
      "Select practical pilot workflows",
      "Define adoption roadmap and support needs",
      "Deliver recommendations and next steps",
    ],
    idealFor: ["Teams ready to pilot AI", "Businesses improving admin workflows", "Leaders aligning technology and operations"],
  },
  {
    id: "finance-admin-review",
    slug: "admin-systems-review",
    title: "Admin Systems Review",
    category: "admin-finance-consulting",
    summary: "Review how administration work is handled and improve consistency, control, and visibility.",
    overview:
      "A practical review of recurring admin work, ownership, handoffs, and documentation. The goal is to improve the day-to-day engine room of the business so work is easier to track and manage.",
    deliverables: [
      "Admin workflow observations",
      "Process improvement recommendations",
      "Control and ownership notes",
      "Short implementation priorities",
    ],
    process: [
      "Review current admin activities and ownership",
      "Identify duplication, gaps, and risks",
      "Recommend streamlined operating approach",
      "Provide prioritised actions",
    ],
    idealFor: ["Small businesses with growing admin load", "Founders handling too much themselves", "Teams lacking process clarity"],
  },
  {
    id: "finance-reporting",
    slug: "reporting-and-controls-improvement",
    title: "Reporting and Controls Improvement",
    category: "admin-finance-consulting",
    summary: "Strengthen internal reporting rhythms, ownership, and process controls.",
    overview:
      "This service helps businesses improve how financial and operational information is prepared, reviewed, and used. It is focused on practical reporting discipline rather than complex finance transformation.",
    deliverables: [
      "Current reporting process review",
      "Control and accountability observations",
      "Suggested reporting rhythm improvements",
      "Recommended process changes",
    ],
    process: [
      "Understand current reporting approach",
      "Review existing inputs, timing, and ownership",
      "Identify weaknesses in visibility and controls",
      "Recommend a more reliable reporting structure",
    ],
    idealFor: ["Businesses needing more management visibility", "Teams preparing for growth", "Leaders improving decision support"],
  },
  {
    id: "custom-advisory",
    slug: "custom-advisory-project",
    title: "Custom Advisory Project",
    category: "customised-solutions",
    summary: "Tailored support for business challenges that cut across multiple areas.",
    overview:
      "A flexible advisory engagement for complex problems that do not fit one predefined service. It can combine elements of operations, people, planning, implementation, and project support.",
    deliverables: [
      "Scoped project brief",
      "Tailored work plan",
      "Recommendations and support output aligned to the project",
      "Next-step guidance",
    ],
    process: [
      "Define the problem and desired outcome",
      "Scope the work and agree priorities",
      "Deliver the agreed advisory support",
      "Review outcomes and next steps",
    ],
    idealFor: ["Cross-functional issues", "Leadership problem solving", "Businesses needing flexible support"],
  },
  {
    id: "custom-implementation",
    slug: "implementation-support-project",
    title: "Implementation Support Project",
    category: "customised-solutions",
    summary: "Hands-on support to help a business move from decision into delivery.",
    overview:
      "A project-based service for organisations that know what needs to change but need structured support to coordinate people, tasks, and follow-through during implementation.",
    deliverables: [
      "Implementation plan",
      "Priority tracking structure",
      "Coordination support recommendations",
      "Progress review summary",
    ],
    process: [
      "Clarify scope, stakeholders, and milestones",
      "Build an implementation structure",
      "Support progress reviews and issue handling",
      "Close out with recommendations for continuity",
    ],
    idealFor: ["Projects with many moving parts", "Leaders with limited internal bandwidth", "Execution-heavy business changes"],
  },
];

export const serviceCategoryMap = Object.fromEntries(
  serviceCategories.map((category) => [category.slug, category]),
) as Record<string, ServiceCategory>;

export const serviceMap = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<string, ServiceItem>;

export function getServicesByCategory(categorySlug: string) {
  return services.filter((service) => service.category === categorySlug);
}

