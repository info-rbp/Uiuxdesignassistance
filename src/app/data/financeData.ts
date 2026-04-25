import { 
  Shield, 
  ShieldCheck, 
  Lock, 
  Users, 
  ClipboardCheck, 
  Truck, 
  Hammer,
  DollarSign,
  Briefcase,
  Landmark,
  TrendingUp,
  Zap,
  BarChart3,
  CreditCard,
  Package,
  HardHat,
  Scale,
  FileText,
  AlertCircle,
  HelpCircle,
  Stethoscope,
  Key,
  Boxes,
  Microscope,
  Construction,
  Coins,
  Building2,
  Home
} from "lucide-react";

export interface InsuranceCategory {
  slug: string;
  name: string;
  summary: string;
  description: string;
  icon: any;
  featuredPolicies: string[]; // Slugs
}

export interface InsurancePolicy {
  slug: string;
  categorySlug: string;
  name: string;
  summary: string;
  fullDescription: string;
  generally_covers: string[];
  exclusions: string[];
  relevantFor: string[];
  scenarios: { title: string; desc: string }[];
  costFactors: string[];
  faq: { q: string; a: string }[];
  seoTitle: string;
  metaDescription: string;
}

export const INSURANCE_CATEGORIES: InsuranceCategory[] = [
  {
    slug: "liability-professional-risk",
    name: "Liability & Professional Risk",
    summary: "Protecting your business against legal liability and professional negligence claims.",
    description: "Whether you provide advice, sell products, or interact with the public, liability insurance is the foundation of any risk management strategy.",
    icon: Shield,
    featuredPolicies: ["public-liability", "professional-indemnity"]
  },
  {
    slug: "property-business-assets",
    name: "Property, Premises & Business Assets",
    summary: "Protection for your physical premises, equipment, stock, and fit-out.",
    description: "From buildings to the tools you use every day, our property insurance discovery helps you protect your physical livelihood.",
    icon: Building2,
    featuredPolicies: ["business-insurance-pack", "tools-equipment"]
  },
  {
    slug: "interruption-business-continuity",
    name: "Interruption & Business Continuity",
    summary: "Maintaining cash flow and operations when the unexpected happens.",
    description: "Cover designed to keep your business running or provide income support following insured events or illness.",
    icon: TrendingUp,
    featuredPolicies: ["business-interruption", "personal-accident"]
  },
  {
    slug: "cyber-digital-risk",
    name: "Cyber & Digital Risk",
    summary: "Protection against hacking, data breaches, and digital extortion.",
    description: "In an increasingly digital world, protecting your data and your customer's privacy is critical.",
    icon: Lock,
    featuredPolicies: ["cyber-insurance"]
  },
  {
    slug: "vehicles-transport",
    name: "Vehicles, Transport & Moving Assets",
    summary: "Cover for vehicles used for business and the goods they carry.",
    description: "Tailored protection for utes, vans, fleets, and transit-related risks.",
    icon: Truck,
    featuredPolicies: ["commercial-vehicle", "marine-cargo-transit"]
  },
  {
    slug: "people-workforce",
    name: "People, Employment & Workforce",
    summary: "Obligations and protection related to your team.",
    description: "Managing your statutory obligations as an employer and protecting against internal risks.",
    icon: Users,
    featuredPolicies: ["workers-compensation"]
  },
  {
    slug: "construction-trade-specialist",
    name: "Construction, Project & Trade Specialist",
    summary: "Specialized cover for build projects and trade-based credit risks.",
    description: "Protection for works in progress, materials, and specialized financial risks.",
    icon: Construction,
    featuredPolicies: ["contract-works", "trade-credit"]
  }
];

export const INSURANCE_POLICIES: InsurancePolicy[] = [
  // --- Category 1: Liability ---
  {
    slug: "public-liability",
    categorySlug: "liability-professional-risk",
    name: "Public Liability Insurance",
    summary: "Protects against claims for third-party injury or property damage.",
    fullDescription: "Public Liability insurance is essential for businesses that interact with third parties. It generally responds to claims of personal injury or property damage sustained by someone other than an employee as a result of your business activities.",
    generally_covers: [
      "Third-party personal injury claims",
      "Damage to property owned by others",
      "Legal defense and investigation costs",
      "Compensation or settlement payouts"
    ],
    exclusions: [
      "Injuries to your own employees",
      "Damage to your own business property",
      "Professional advice errors",
      "Intentional or criminal acts"
    ],
    relevantFor: ["Trades", "Retail", "Hospitality", "Contractors"],
    scenarios: [
      { title: "Slip and Fall", desc: "A customer slips on a spill in your shop and sues for medical costs." },
      { title: "Property Damage", desc: "A contractor accidentally damages a client's building while working." }
    ],
    costFactors: ["Industry risk level", "Annual turnover", "Indemnity limit chosen", "Claims history"],
    faq: [
      { q: "Is it mandatory?", a: "Not by law in all cases, but often required by client contracts or landlords." }
    ],
    seoTitle: "Public Liability Insurance for Small Business | RBP",
    metaDescription: "Understand Public Liability cover. Learn what it protects, common exclusions, and how to get a quote."
  },
  {
    slug: "professional-indemnity",
    categorySlug: "liability-professional-risk",
    name: "Professional Indemnity Insurance",
    summary: "Coverage for professionals against claims of negligence in their advice.",
    fullDescription: "Professional Indemnity (PI) insurance protects you if a client claims your advice or service was negligent and caused them a financial loss.",
    generally_covers: [
      "Negligent acts, errors, or omissions",
      "Breach of professional duty",
      "Legal defense costs",
      "Defamation or breach of confidentiality"
    ],
    exclusions: ["Known prior acts", "Intentional non-performance", "Bodily injury claims", "Fraudulent acts"],
    relevantFor: ["Consultants", "Accountants", "Designers", "Advisors"],
    scenarios: [
        { title: "Advice Error", desc: "A consultant's strategy leads to a major loss for a client." },
        { title: "Data Entry Mistake", desc: "A bookkeeper makes an error resulting in a tax penalty for a user." }
    ],
    costFactors: ["Service type", "Annual fee income", "Business size", "Limit of cover"],
    faq: [{ q: "What is run-off cover?", a: "Protects you for claims arising after you've closed your business." }],
    seoTitle: "Professional Indemnity Insurance for Consultants | RBP",
    metaDescription: "Protect your professional advice with PI insurance. Coverage for errors, omissions, and negligence."
  },
  {
    slug: "product-liability",
    categorySlug: "liability-professional-risk",
    name: "Product Liability Insurance",
    summary: "Protects against injury or damage arising from products sold or supplied.",
    fullDescription: "Protects your business if a product you manufactured, sold, or supplied causes injury to a person or damage to their property.",
    generally_covers: [
      "Faulty design or manufacturing claims",
      "Inadequate warnings or instructions",
      "Illness from food/drink supply",
      "Legal and investigation costs"
    ],
    exclusions: ["Product recalls (separate cover)", "Warranty/performance issues", "Intentional misuse"],
    relevantFor: ["Wholesalers", "Retailers", "Manufacturers", "Importers"],
    scenarios: [
      { title: "Electronics Fault", desc: "A toaster you sold sparks and causes a house fire." },
      { title: "Food Poisoning", desc: "A customer falls ill from a packaged meal you manufactured." }
    ],
    costFactors: ["Product type", "Import source", "Turnover", "Quality controls"],
    faq: [{ q: "What if I didn't make it?", a: "You can still be liable as the supplier or importer." }],
    seoTitle: "Product Liability Insurance | Manufacturers & Retailers | RBP",
    metaDescription: "Does your business sell or supply goods? Understand how Product Liability protects you."
  },
  {
    slug: "management-liability",
    categorySlug: "liability-professional-risk",
    name: "Management Liability Insurance",
    summary: "Protects directors and the business entity against management failures.",
    fullDescription: "Covers the 'management' risks of running a company, including employment practices, director liability, and statutory breaches.",
    generally_covers: [
      "Unfair dismissal / Harassment claims",
      "Directors & Officers liability",
      "Statutory fines (OH&S)",
      "Employee theft / Fidelity"
    ],
    exclusions: ["Professional advice (requires PI)", "Bodily injury", "Known litigation"],
    relevantFor: ["Private Companies", "Startups", "Incorporated Entities"],
    scenarios: [
      { title: "Unfair Dismissal", desc: "A former employee sues for wrongful termination." },
      { title: "Statutory Breach", desc: "A company is fined for a workplace safety violation." }
    ],
    costFactors: ["Staff numbers", "Annual revenue", "Company age", "Ownership structure"],
    faq: [{ q: "Is it just for directors?", a: "No, it also covers the business entity itself." }],
    seoTitle: "Management Liability Insurance for Private Companies | RBP",
    metaDescription: "Protect your directors and your business from employment and statutory risks."
  },
  {
    slug: "directors-officers",
    categorySlug: "liability-professional-risk",
    name: "Directors & Officers Insurance",
    summary: "Personal liability protection for company directors and officers.",
    fullDescription: "Specifically designed to protect the personal assets of company directors and officers from claims of wrongful acts in their capacity as leaders.",
    generally_covers: [
      "Personal liability for decisions",
      "Legal defense costs for directors",
      "Regulatory investigation costs",
      "Extradition proceedings"
    ],
    exclusions: ["Criminal acts", "Intentional fraud", "Personal profit gain"],
    relevantFor: ["Board Members", "Senior Executives", "Company Secretaries"],
    scenarios: [
      { title: "Shareholder Claim", desc: "Investors sue directors over a decision that devalued the company." },
      { title: "Regulatory Action", desc: "A director is personally named in a government investigation." }
    ],
    costFactors: ["Company size", "Industry sector", "Decision-making complexity"],
    faq: [{ q: "Is this in a Biz Pack?", a: "Usually not; it is often a stand-alone or part of Management Liability." }],
    seoTitle: "Directors & Officers (D&O) Insurance Explained | RBP",
    metaDescription: "Protect your personal assets as a company leader with D&O liability insurance."
  },
  {
    slug: "statutory-liability",
    categorySlug: "liability-professional-risk",
    name: "Statutory Liability Insurance",
    summary: "Covers fines and penalties from statutory breaches.",
    fullDescription: "Covers the costs associated with accidental breaches of certain Acts of Parliament, including legal costs and insurable fines.",
    generally_covers: [
      "Insurable statutory fines",
      "Legal representation at hearings",
      "Investigation costs",
      "Compliance advice following a claim"
    ],
    exclusions: ["Uninsurable penalties (e.g. some EPA fines)", "Deliberate breaches", "Criminal prosecution"],
    relevantFor: ["Construction", "Logistics", "Manufacturing"],
    scenarios: [
      { title: "Safety Fine", desc: "The business is fined for an accidental breach of safety regulations." },
      { title: "Environmental Incident", desc: "A spill leads to a council investigation and fine." }
    ],
    costFactors: ["Industry risk", "Compliance history", "Turnover"],
    faq: [{ q: "Is every fine insurable?", a: "No, some laws prevent insurance from paying certain criminal fines." }],
    seoTitle: "Statutory Liability Insurance | Fine & Penalty Cover | RBP",
    metaDescription: "Understand how Statutory Liability covers fines and legal costs from regulatory breaches."
  },

  // --- Category 2: Property ---
  {
    slug: "business-insurance-pack",
    categorySlug: "property-business-assets",
    name: "Business Insurance Pack",
    summary: "A bundled policy for premises-based small businesses.",
    fullDescription: "Known as a 'BizPack', this bundles multiple covers like Property, Liability, Theft, and Glass into one convenient policy.",
    generally_covers: [
      "Public Liability module",
      "Physical Property & Contents",
      "Theft and Money",
      "Glass Breakage and Signage"
    ],
    exclusions: ["Machinery breakdown (often add-on)", "Cyber acts", "Flood (check terms)"],
    relevantFor: ["Retailers", "Offices", "Clinics", "Hospitality"],
    scenarios: [
      { title: "Storm Damage", desc: "A roof leak damages shop stock and customer files." },
      { title: "Theft", desc: "A shop is broken into overnight and several machines are stolen." }
    ],
    costFactors: ["Location", "Security measures", "Building construction", "Sum insured"],
    faq: [{ q: "Can I pick modules?", a: "Yes, you only pay for the sections you choose to include." }],
    seoTitle: "Business Insurance Pack for SMEs | Comprehensive Cover | RBP",
    metaDescription: "Bundle your insurance. Business Packs combine property, liability, and more."
  },
  {
      slug: "tools-equipment",
      categorySlug: "property-business-assets",
      name: "Tools & Equipment Insurance",
      summary: "Protects trade tools and portable gear against theft and damage.",
      fullDescription: "Specifically designed for portable field-based gear that moves from site to site.",
      generally_covers: ["Theft from locked vehicles", "Accidental damage", "Fire and storm", "Transit risks"],
      exclusions: ["Unsecured theft", "Wear and tear", "Mechanical failure", "Inventory items"],
      relevantFor: ["Tradies", "Mobile Techs", "Freelance Creatives"],
      scenarios: [
        { title: "Ute Break-in", desc: "A locked canopy is forced open and $10k of drills are stolen." },
        { title: "Site Loss", desc: "Tools are destroyed in a fire at a customer's work site." }
      ],
      costFactors: ["Total policy limit", "Single item value", "Security used"],
      faq: [{ q: "Are they covered at night?", a: "Usually yes, if stored in a locked vehicle or garage." }],
      seoTitle: "Tools and Equipment Insurance for Tradies | RBP",
      metaDescription: "Don't risk your livelihood. Protect your portable tools and gear today."
  },
  {
    slug: "business-property",
    categorySlug: "property-business-assets",
    name: "Business Property Insurance",
    summary: "Protection for buildings and contents at a fixed location.",
    fullDescription: "Covers physical damage to your business premises and its contents from fire, storm, and other insured events.",
    generally_covers: ["Fire and Storm damage", "Impact damage", "Malicious damage", "Explosion or earthquake"],
    exclusions: ["Wear and tear", "Lack of maintenance", "Flood (varies by policy)"],
    relevantFor: ["Building Owners", "Tenants with Fit-out"],
    scenarios: [
        { title: "Fire", desc: "An electrical fault leads to a fire in the office storage room." },
        { title: "Impact", desc: "A vehicle accidentally drives into the shopfront window." }
    ],
    costFactors: ["Rebuild cost", "Property age", "Security features"],
    faq: [{ q: "Do I need it as a tenant?", a: "Yes, to cover your internal fit-out and contents." }],
    seoTitle: "Business Property Insurance | Premises & Contents | RBP",
    metaDescription: "Protect your business location and assets from fire, storm, and damage."
  },
  {
    slug: "building-insurance",
    categorySlug: "property-business-assets",
    name: "Building Insurance",
    summary: "Covers physical structures owned by the business.",
    fullDescription: "Protects the physical structure of your building from defined events like fire, storm, and impact.",
    generally_covers: ["Structural damage", "Permanent fixtures", "Removal of debris", "Architect fees during rebuild"],
    exclusions: ["Foundation movement", "Rust or corrosion", "Vermin damage"],
    relevantFor: ["Commercial Landlords", "Owner-Occupiers"],
    scenarios: [{ title: "Severe Storm", desc: "Hurricane-force winds rip roofing off the factory." }],
    costFactors: ["Construction material", "Bushfire risk zone", "Building age"],
    faq: [{ q: "Is it market value?", a: "No, it is usually based on full replacement/rebuild cost." }],
    seoTitle: "Commercial Building Insurance for Owners | RBP",
    metaDescription: "Protect your commercial property investment with specialized building cover."
  },
  {
    slug: "contents-insurance",
    categorySlug: "property-business-assets",
    name: "Contents Insurance",
    summary: "Protects loose assets like furniture and office gear.",
    fullDescription: "Covers the non-structural items inside your business location.",
    generally_covers: ["Office furniture", "Laptops & printers", "Displays & fit-out", "Employee personal effects"],
    exclusions: ["Inventory (requires Stock cover)", "Cash on hand", "Items off-premises"],
    relevantFor: ["Offices", "Retailers", "Creative Studios"],
    scenarios: [{ title: "Water Leak", desc: "A pipe bursts and ruins all office desks and carpets." }],
    costFactors: ["Total internal value", "Industry type", "Security"],
    faq: [{ q: "Are laptops covered offsite?", a: "Usually no, they need 'Portable Equipment' cover for that." }],
    seoTitle: "Business Contents Insurance | Office & Retail | RBP",
    metaDescription: "Coverage for your business furniture, tech, and internal assets."
  },
  {
    slug: "stock-insurance",
    categorySlug: "property-business-assets",
    name: "Stock Insurance",
    summary: "Protection for inventory and raw materials.",
    fullDescription: "Covers your saleable goods and materials while stored at your business location.",
    generally_covers: ["Saleable inventory", "Raw materials", "Goods held in trust", "Deterioration of stock"],
    exclusions: ["Loss during process", "Inventory shortage (theft only)", "Theft by staff"],
    relevantFor: ["Wholesalers", "Retailers", "E-commerce"],
    scenarios: [{ title: "Freezer Failure", desc: "Inventory in a cool room spoils after a compressor fail." }],
    costFactors: ["Average stock levels", "Maximum peak stock", "Storage environment"],
    faq: [{ q: "What about high-value items?", a: "Ensure you declare these specifically to get full cover." }],
    seoTitle: "Stock and Inventory Insurance for Retailers | RBP",
    metaDescription: "Protect your saleable goods from fire, theft, and damage."
  },
  {
    slug: "glass-insurance",
    categorySlug: "property-business-assets",
    name: "Glass Insurance",
    summary: "Covers breakage of external or internal glass.",
    fullDescription: "A specialized module to cover the cost of replacing glass and potentially shutters/signage.",
    generally_covers: ["External shopfront glass", "Internal showcases", "Signage on glass", "Fittings and frames"],
    exclusions: ["Existing cracks", "Scratches/marring", "Glass in transit"],
    relevantFor: ["Ground floor shops", "Display-based businesses"],
    scenarios: [{ title: "Vandalism", desc: "A person throws a brick through the main display window." }],
    costFactors: ["Square meters of glass", "Glass type", "Location"],
    faq: [{ q: "Is it part of a Biz Pack?", a: "Yes, almost always included in a Package policy." }],
    seoTitle: "Shopfront Glass Insurance for Business | RBP",
    metaDescription: "Coverage for accidental and malicious glass breakage in your business."
  },
  {
    slug: "machinery-breakdown",
    categorySlug: "property-business-assets",
    name: "Machinery Breakdown Insurance",
    summary: "Covers internal failure and breakdown of critical gear.",
    fullDescription: "Covers the cost to repair or replace machinery following a sudden and unforeseen mechanical or electrical breakdown.",
    generally_covers: ["Electrical burn-out", "Mechanical failure", "Damage to non-stationary gear", "Repair and labor costs"],
    exclusions: ["Maintenance related wear", "Manufacturer defect", "Fire/Storm damage (use Property)"],
    relevantFor: ["Printers", "Lifts", "HVAC units", "Production lines"],
    scenarios: [{ title: "Motor Burnout", desc: "A main drive motor on a production line fails suddenly." }],
    costFactors: ["Machine age", "Maintenance logs", "Machine value"],
    faq: [{ q: "Is it just for factories?", a: "No, many offices use it for elevators and air conditioning." }],
    seoTitle: "Machinery Breakdown Insurance | MEP Equipment | RBP",
    metaDescription: "Protect against sudden mechanical or electrical failure of business assets."
  },
  {
    slug: "electronic-equipment",
    categorySlug: "property-business-assets",
    name: "Electronic Equipment Insurance",
    summary: "Comprehensive cover for high-value IT and medical gear.",
    fullDescription: "Goes beyond standard contents cover for delicate and expensive electronics.",
    generally_covers: ["Server damage", "Medical diagnostic gear", "Specialized tech assets", "Increased cost of working"],
    exclusions: ["Data loss (use Cyber)", "Software bugs", "Gradual performance drop"],
    relevantFor: ["Medical Clinics", "IT Houses", "Media Labs"],
    scenarios: [{ title: "Power Surge", desc: "A voltage spike ruins the main server motherboard." }],
    costFactors: ["Tech sensitivity", "Climate control", "Redundancy levels"],
    faq: [{ q: "Is it different to contents?", a: "Yes, it often includes accidental damage and breakdown extensions." }],
    seoTitle: "Electronic Equipment Insurance | IT & Medical Tech | RBP",
    metaDescription: "Specialized protection for sensitive and high-value electronic business equipment."
  },
  {
    slug: "portable-equipment",
    categorySlug: "property-business-assets",
    name: "Portable Equipment Insurance",
    summary: "Cover for tools and tech used outside the office.",
    fullDescription: "Also called General Property, this covers assets that travel with you.",
    generally_covers: ["Laptops and phones", "Sales sample gear", "Portable diagnostic tools", "Theft and accident"],
    exclusions: ["Unwatched theft", "Unexplained loss", "Mechanical breakdown"],
    relevantFor: ["Mobile Sales", "Digital Nomads", "Site Surveyors"],
    scenarios: [{ title: "Coffee Shop Theft", desc: "A laptop is snatched while a user is working in public." }],
    costFactors: ["Replacement value", "Usage suburbs", "Item list"],
    faq: [{ q: "Is it covered in the car?", a: "Yes, if the vehicle is locked and items are out of sight." }],
    seoTitle: "Portable Equipment Insurance | General Property | RBP",
    metaDescription: "Protect your business tech and tools when working on the move or offsite."
  },

  // --- Category 3: Interruption ---
  {
    slug: "business-interruption",
    categorySlug: "interruption-business-continuity",
    name: "Business Interruption Insurance",
    summary: "Covers loss of income following a catastrophe.",
    fullDescription: "Helps you maintain revenue if you are unable to trade due to an insured event like fire or storm.",
    generally_covers: ["Lost gross profit", "Ongoing operational costs", "Relocation expenses", "Increased cost of working"],
    exclusions: ["Interruption from cyber (use Cyber)", "Market trend downturn", "Voluntary closure"],
    relevantFor: ["Retail", "Manufacturing", "Service Hubs"],
    scenarios: [{ title: "Fire Recovery", desc: "The shop is closed for 3 months while repairs are made; policy pays lost profit." }],
    costFactors: ["Indemnity period", "Annual profit", "Dependency on physical location"],
    faq: [{ q: "How long does it pay?", a: "Typically 6, 12, or 24 months depending on your choice." }],
    seoTitle: "Business Interruption Insurance | Income Protection | RBP",
    metaDescription: "Don't let a disaster stop your cash flow. Insurance to cover lost profit and bills."
  },
  {
    slug: "personal-accident",
    categorySlug: "interruption-business-continuity",
    name: "Personal Accident Insurance",
    summary: "Income support for owners and workers following injury.",
    fullDescription: "Provides a weekly benefit if an insured person is unable to work due to accident or illness.",
    generally_covers: ["Weekly income benefit", "Lump sum for death/disablement", "Rehabilitation offset", "Business expense cover (optional)"],
    exclusions: ["Pre-existing conditions", "Self-harm", "Extreme sports", "Drug/Alcohol related"],
    relevantFor: ["Sole Traders", "Partnerships", "Active Directors"],
    scenarios: [{ title: "Broken Leg", desc: "A sole trader can't work for 6 weeks; policy pays a weekly allowance." }],
    costFactors: ["Weekly benefit amount", "Waiting period", "Occupation risk"],
    faq: [{ q: "Is it Workers Comp?", a: "No, it's often used by owners who aren't covered by standard Workers Comp." }],
    seoTitle: "Personal Accident and Illness Insurance for Small Business | RBP",
    metaDescription: "Protect your personal income if you are unable to work due to accident or sickness."
  },
  {
    slug: "key-person",
    categorySlug: "interruption-business-continuity",
    name: "Key Person Insurance",
    summary: "Protects against the loss of a critical individual.",
    fullDescription: "Provides financial support to the business if a key person is unable to contribute due to death or illness.",
    generally_covers: ["Revenue loss offset", "Recruitment costs", "Credit protection", "Shareholder buyout support"],
    exclusions: ["Suicide (initially)", "Intentional acts", "Termination of employment"],
    relevantFor: ["Lead Developers", "Managing Directors", "Top Salespeople"],
    scenarios: [{ title: "Founder Illness", desc: "A founder is incapacitated; policy provides funds to hire an interim CEO." }],
    costFactors: ["Sum insured", "Person's age/health", "Role importance"],
    faq: [{ q: "Is it Life Insurance?", a: "Technically yes, but the benefit is paid to the business, not the family." }],
    seoTitle: "Key Person Insurance | Business Succession | RBP",
    metaDescription: "Manage the risk of losing a critical team member with Key Person protection."
  },

  // --- Category 4: Cyber ---
  {
    slug: "cyber-insurance",
    categorySlug: "cyber-digital-risk",
    name: "Cyber Insurance",
    summary: "Comprehensive protection against digital crime and data breaches.",
    fullDescription: "Covers the direct financial loss and legal liability resulting from cyber incidents and hacking.",
    generally_covers: ["Incident response (24/7)", "Data restoration", "Extortion/Ransomware payouts", "Privacy legal liability"],
    exclusions: ["Intentional internal acts", "Unpatched vulnerabilities", "Utility failures"],
    relevantFor: ["E-commerce", "SaaS", "Any business with data"],
    scenarios: [{ title: "Ransomware", desc: "A hacker locks all files and demands payment to release them." }],
    costFactors: ["Revenue", "Volume of data", "Security controls (MFA)"],
    faq: [{ q: "Do I have this in a Biz Pack?", a: "Usually no; standard property policies exclude cyber crime." }],
    seoTitle: "Cyber Insurance for Small Business | Data Breach Cover | RBP",
    metaDescription: "Protect your business from hacking, ransomware, and digital extortion."
  },

  // --- Category 5: Vehicles ---
  {
    slug: "commercial-vehicle",
    categorySlug: "vehicles-transport",
    name: "Commercial Vehicle Insurance",
    summary: "Cover for cars, utes, and vans used for business.",
    fullDescription: "Protects your mobile assets and the liability arising from their use in business.",
    generally_covers: ["Accidental damage", "Theft and fire", "Third-party liability", "Hire car following accident"],
    exclusions: ["Non-business usage (if not declared)", "Driving under influence", "Wear & tear"],
    relevantFor: ["Tradies", "Delivery Services", "Field Staff"],
    scenarios: [{ title: "Delivery Prang", desc: "A van rear-ends a luxury car while on a customer run." }],
    costFactors: ["Vehicle type", "Suburbs garaged", "Driver history"],
    faq: [{ q: "Can I use personal insurance?", a: "Not for primary business activities; claims may be denied." }],
    seoTitle: "Commercial Vehicle Insurance | Work Utes & Vans | RBP",
    metaDescription: "Specialized cover for vehicles used in your daily business operations."
  },
  {
    slug: "fleet-insurance",
    categorySlug: "vehicles-transport",
    name: "Fleet Insurance",
    summary: "Consolidated cover for multiple business vehicles.",
    fullDescription: "Streamlined insurance for businesses operating 5 or more vehicles.",
    generally_covers: ["Any driver cover", "Simplified renewal", "Automatic addition/deletion", "Volume premium rates"],
    exclusions: ["Specific hazardous cargo", "Unlicensed drivers", "Use outside radius"],
    relevantFor: ["Logistics", "Sales Teams", "Service Fleets"],
    scenarios: [{ title: "Fleet Management", desc: "A business with 20 vans manages all insurance on one monthly bill." }],
    costFactors: ["Number of vehicles", "Fleet safety record", "Vehicle values"],
    faq: [{ q: "How many vehicles for a fleet?", a: "Typically starts at 5 to 15 vehicles depending on the insurer." }],
    seoTitle: "Commercial Fleet Insurance | Multi-Vehicle Cover | RBP",
    metaDescription: "Manage your business fleet with a consolidated, efficient insurance policy."
  },
  {
    slug: "marine-cargo-transit",
    categorySlug: "vehicles-transport",
    name: "Marine Cargo / Transit Insurance",
    summary: "Protection for goods while being shipped or moved.",
    fullDescription: "Covers loss or damage to goods while in transit by sea, land, or air.",
    generally_covers: ["Theft during transit", "Collision damage", "Loading/Unloading incidents", "General average (Sea)"],
    exclusions: ["Inherent vice", "Poor packaging", "Inventory shrinkage"],
    relevantFor: ["Importers", "Exporters", "Distributors"],
    scenarios: [{ title: "Lost Shipment", desc: "A container is lost at sea during a storm; policy pays the value." }],
    costFactors: ["Transit locations", "Goods value", "Shipping methods"],
    faq: [{ q: "Is it just for ships?", a: "No, it covers road and air freight as well." }],
    seoTitle: "Marine Cargo and Transit Insurance | Goods in Transit | RBP",
    metaDescription: "Ensure your stock is protected from warehouse to customer, globally."
  },

  // --- Category 6: People ---
  {
    slug: "workers-compensation",
    categorySlug: "people-workforce",
    name: "Workers Compensation Insurance",
    summary: "Mandatory cover for employee workplace injuries.",
    fullDescription: "Provides support to workers injured on the job and protects employers from injury-related lawsuits.",
    generally_covers: ["Medical expenses", "Wages while off work", "Rehabilitation support", "Common law liability"],
    exclusions: ["Journey claims (varies by state)", "Self-inflicted injury", "Misconduct related"],
    relevantFor: ["Any business with employees"],
    scenarios: [{ title: "Back Injury", desc: "A warehouse worker is injured lifting; policy pays wages and surgery." }],
    costFactors: ["Annual payroll", "Industry class code", "Claims history"],
    faq: [{ q: "Is it mandatory?", a: "Yes, once you have employees, you must have a policy in your state." }],
    seoTitle: "Workers Compensation Insurance Obligations for Employers | RBP",
    metaDescription: "Understand your state-based obligations for managing worker injury and safety."
  },
  {
    slug: "employee-dishonesty-fidelity",
    categorySlug: "people-workforce",
    name: "Employee Dishonesty / Fidelity Cover",
    summary: "Protects against theft or fraud by staff.",
    fullDescription: "Covers the loss of money, securities, or property resulting from fraudulent employee acts.",
    generally_covers: ["Stock theft", "Cash embezzlement", "Electronic fraud", "Audit/Assistance costs"],
    exclusions: ["Inventory shortage only", "Owner fraud", "Known past offenders"],
    relevantFor: ["Retailers", "Finance Teams", "Trust-based businesses"],
    scenarios: [{ title: "Accounts Fraud", desc: "An accountant siphons $50k into a personal account over two years." }],
    costFactors: ["Internal controls", "Number of handling staff", "Sum insured"],
    faq: [{ q: "What's a discovery trigger?", a: "The policy often pays based on when the crime was *found*." }],
    seoTitle: "Employee Dishonesty & Fidelity Insurance | RBP",
    metaDescription: "Protect your business assets from internal fraud and employee theft."
  },

  // --- Category 7: Special ---
  {
    slug: "contract-works",
    categorySlug: "construction-trade-specialist",
    name: "Contract Works Insurance",
    summary: "Protection for build projects and materials in progress.",
    fullDescription: "Covers damage to the project itself, site materials, and the liability of the project site.",
    generally_covers: ["Work in progress", "Site materials", "Transit to site", "Liability on site"],
    exclusions: ["Design defects", "Consequential loss", "Liquidated damages"],
    relevantFor: ["Builders", "Developers", "Owner-Builders"],
    scenarios: [{ title: "On-site Fire", desc: "A house under construction is destroyed by fire before completion." }],
    costFactors: ["Total project contract value", "Work type", "Duration"],
    faq: [{ q: "Is it just for the house?", a: "It also covers materials sitting on the site waiting to be used." }],
    seoTitle: "Contract Works Insurance | Construction & Projects | RBP",
    metaDescription: "Protect your building projects while they are under construction."
  },
  {
    slug: "trade-credit",
    categorySlug: "construction-trade-specialist",
    name: "Trade Credit Insurance",
    summary: "Protects against customer non-payment and insolvency.",
    fullDescription: "Safeguards your cash flow by paying a percentage of unpaid invoices if a customer goes bust.",
    generally_covers: ["Bad debt protection", "Customer insolvency", "Late payment collection", "Political risk (Export)"],
    exclusions: ["Disputed invoices", "Pre-existing default", "Cash sales"],
    relevantFor: ["Wholesalers", "B2B Manufacturers", "Materials Suppliers"],
    scenarios: [{ title: "Client Bankruptcy", desc: "A major client collapses owing you $200k; policy pays 90% of the debt." }],
    costFactors: ["Annual credit turnover", "Customer list quality", "Collection policy"],
    faq: [{ q: "Does it help with cash?", a: "Lenders often lend more if you have trade credit insurance in place." }],
    seoTitle: "Trade Credit Insurance | Protect Your Accounts Receivable | RBP",
    metaDescription: "Don't let customer bad debt ruin your business. Insurance for your unpaid invoices."
  }
];

export const FUNDING_CATEGORIES: InsuranceCategory[] = [
  {
    slug: "business-funding",
    name: "Business Funding",
    summary: "General purpose finance to support business growth and operations.",
    description: "From short-term cash flow support to long-term expansion capital.",
    icon: Landmark,
    featuredPolicies: ["business-loans", "working-capital-finance"]
  },
  {
    slug: "asset-equipment-vehicle-finance",
    name: "Asset, Equipment & Vehicle Finance",
    summary: "Funding specifically for machinery, vehicles, and business assets.",
    description: "Protect your capital by financing the equipment you need to grow.",
    icon: Truck,
    featuredPolicies: ["equipment-finance", "vehicle-finance"]
  },
  {
    slug: "receivables-trade-finance",
    name: "Receivables, Trade & Working Cycle",
    summary: "Unlock cash tied up in invoices and supply chains.",
    description: "Finance structured around your sales ledger and trade flow.",
    icon: BarChart3,
    featuredPolicies: ["invoice-finance", "trade-finance"]
  },
  {
    slug: "property-growth-finance",
    name: "Property, Growth & Structured Funding",
    summary: "Large scale funding for property and major projects.",
    description: "Structured finance for property acquisition and business expansion.",
    icon: Building2,
    featuredPolicies: ["commercial-property-finance", "business-expansion-funding"]
  },
  {
    slug: "home-loans",
    name: "Home Loans",
    summary: "Mortgage solutions for owners and investors.",
    description: "Educational overviews of common home loan structures and pathways.",
    icon: Home,
    featuredPolicies: ["owner-occupier-home-loans", "first-home-buyer-loans"]
  }
];

export const FUNDING_PRODUCTS: any[] = [
  // --- Category 1: Business Funding ---
  {
    slug: "business-loans",
    categorySlug: "business-funding",
    name: "Business Loans",
    summary: "General-purpose funding for business growth, stock, or expansion.",
    icon: Landmark,
    common_use_case: "Inventory purchase or team expansion",
    ctaLabel: "View Loan Guide",
    ctaHref: "/finance/products/business-loans",
    fullDescription: "A business loan provides upfront capital for almost any legitimate business purpose, usually structured with regular repayments over a set term.",
    how_it_works: [
      "Application & Review of business performance",
      "Lender appraisal of serviceability",
      "Term and rate offer based on risk profile",
      "Funds disbursed for business use"
    ],
    useCases: [
      { title: "Stock Purchase", desc: "Buying bulk inventory to fulfill orders." },
      { title: "Staffing", desc: "Hiring new team members ahead of a growth phase." }
    ],
    relevantFor: ["SMEs", "Contractors", "Established Businesses"],
    documents: ["Latest P&L", "Balance Sheet", "6 Months Bank Statements", "ATO Portals"],
    costFactors: ["Business credit score", "Time in business", "Annual turnover", "Security offered"],
    faq: [{ q: "What's the typical term?", a: "Generally 1 to 5 years depending on the purpose." }],
    seoTitle: "Business Loans for Small Business | Growth Funding | RBP",
    metaDescription: "Understand business loan options. Compare secured and unsecured pathways for growth."
  },
  {
    slug: "working-capital-finance",
    categorySlug: "business-funding",
    name: "Working Capital Finance",
    summary: "Funding designed to cover day-to-day operating expenses.",
    icon: Zap,
    common_use_case: "Bridging timing gaps in cash flow",
    ctaLabel: "View Finance Guide",
    ctaHref: "/finance/products/working-capital-finance",
    fullDescription: "Working capital finance is structured to bridge the gap between paying suppliers and receiving payment from customers.",
    how_it_works: [
      "Assessment of operating cycle",
      "Identification of timing gaps",
      "Access to revolving credit or short-term funds",
      "Paydown as revenue is realized"
    ],
    useCases: [
      { title: "Seasonal Peaks", desc: "Hiring extra staff during holidays." },
      { title: "Operational Gaps", desc: "Paying rent and utilities while waiting for a major invoice." }
    ],
    relevantFor: ["Retailers", "Service Labs", "Seasonal Businesses"],
    documents: ["Recent BAS", "Cash flow forecast", "Bank statements"],
    costFactors: ["Current assets ratio", "Operating history", "Revenue stability"],
    faq: [{ q: "How is it different to a loan?", a: "It's often shorter-term and more focused on immediate liquidity." }],
    seoTitle: "Working Capital Finance Explainer | SME Cash Flow | RBP",
    metaDescription: "Manage your daily cash flow requirements with specialized working capital finance."
  },

  // --- Category 2: Assets ---
  {
    slug: "equipment-finance",
    categorySlug: "asset-equipment-vehicle-finance",
    name: "Equipment Finance",
    summary: "Funding for the purchase of new or used business equipment.",
    icon: Package,
    common_use_case: "Acquiring new machinery or technology",
    ctaLabel: "View Asset Guide",
    ctaHref: "/finance/products/equipment-finance",
    fullDescription: "Equipment finance allows you to acquire the gear you need to operate without using all your available cash at once.",
    how_it_works: [
      "Select equipment and obtain quote",
      "Finance approved based on asset and business",
      "Lender pays supplier directly",
      "Repayments made over the useful life of the asset"
    ],
    useCases: [
      { title: "Tech Refresh", desc: "Replacing an office of outdated computers." },
      { title: "Workshop Gear", desc: "Buying a new CNC machine for manufacturing." }
    ],
    relevantFor: ["Tradies", "Clinics", "Manufacturers"],
    documents: ["Tax Returns", "Asset Invoice", "Identification", "Bank Statements"],
    costFactors: ["Asset type & age", "Balloon payment options", "Business term"],
    faq: [{ q: "Can I buy used equipment?", a: "Yes, many lenders finance equipment up to a certain age." }],
    seoTitle: "Equipment Finance for Small Business | Asset Funding | RBP",
    metaDescription: "Grow your business capabilities by financing the equipment you need."
  },

  // --- Category 3: Receivables ---
  {
    slug: "invoice-finance",
    categorySlug: "receivables-trade-finance",
    name: "Invoice Finance",
    summary: "Unlock the value of your outstanding invoices immediately.",
    icon: CreditCard,
    common_use_case: "Unlocking cash tied up in unpaid invoices",
    ctaLabel: "View Ledger Guide",
    ctaHref: "/finance/products/invoice-finance",
    fullDescription: "Also known as Factoring or Invoice Discounting, this product provides an advance on money your customers already owe you.",
    how_it_works: [
      "Sell/Provide goods and issue an invoice",
      "Finance provider advances up to 80-90% of value",
      "Customer pays the invoice",
      "Remaining balance paid to you minus fees"
    ],
    useCases: [
      { title: "Slow Payers", desc: "Managing cash flow when clients take 60 days to pay." },
      { title: "Large Contracts", desc: "Funding the next job while waiting for the last one's payment." }
    ],
    relevantFor: ["Wholesalers", "Recruiters", "Labour Hire"],
    documents: ["Aged Debtors Ledger", "Example Invoices", "Business Tax Returns"],
    costFactors: ["Customer credit quality", "Invoice volume", "Concentration of debtors"],
    faq: [{ q: "Do my clients know?", a: "Confidential facilities are available where clients remain unaware." }],
    seoTitle: "Invoice Finance | Receivables Funding | RBP",
    metaDescription: "Stop waiting for invoices to be paid. Get immediate cash for your receivables."
  },

   // --- Category 4: Property ---
   {
    slug: "commercial-property-finance",
    categorySlug: "property-growth-finance",
    name: "Commercial Property Finance",
    summary: "Loans for purchasing or refinancing commercial real estate.",
    icon: Building2,
    common_use_case: "Purchasing a warehouse or office space",
    ctaLabel: "View Property Guide",
    ctaHref: "/finance/products/commercial-property-finance",
    fullDescription: "Funding for warehouses, offices, retail shops, or specialized commercial premises.",
    how_it_works: [
      "Property valuation",
      "Serviceability based on rent or business income",
      "Loan-to-Value (LVR) assessment",
      "Staged or full drawdown"
    ],
    useCases: [
      { title: "Owner Occupier", desc: "Buying the warehouse you current rent." },
      { title: "Investment", desc: "Purchasing an office block for rental return." }
    ],
    relevantFor: ["Property Investors", "Business Owners"],
    documents: ["Lease agreements", "Financial statements", "Property appraisal"],
    costFactors: ["Location", "Tenant quality", "LVR percentage", "Interest cover ratio"],
    faq: [{ q: "What is the LVR?", a: "Typically 60% to 70% for commercial properties." }],
    seoTitle: "Commercial Property Loans | SME Warehouse & Office Finance | RBP",
    metaDescription: "Purchase your own business premises or invest in commercial real estate."
  },

  // --- Category 5: Home Loans ---
  {
    slug: "owner-occupier-home-loans",
    categorySlug: "home-loans",
    name: "Owner-Occupier Home Loans",
    summary: "Mortgage solutions for your principal place of residence.",
    icon: Home,
    common_use_case: "Purchasing a principal place of residence",
    ctaLabel: "View Home Guide",
    ctaHref: "/finance/products/owner-occupier-home-loans",
    fullDescription: "Standard mortgage funding for individuals or families buying a home to live in.",
    how_it_works: [
      "Pre-approval of borrowing capacity",
      "Property search and selection",
      "Formal approval and valuation",
      "Settlement and keys"
    ],
    useCases: [
      { title: "Upsizing", desc: "Moving to a larger home for a growing family." },
      { title: "First Home", desc: "Buying your very first apartment or house." }
    ],
    relevantFor: ["Home Buyers", "Refinancers"],
    documents: ["Payslips / Financials", "Living expense data", "Savings history"],
    costFactors: ["Credit history", "Deposit size", "Employment stability"],
    faq: [{ q: "What's an offset account?", a: "A linked account that reduces the interest you pay on the loan." }],
    seoTitle: "Home Loans for Owners | Principal Place of Residence | RBP",
    metaDescription: "Understand owner-occupier mortgage structures and pathways to home ownership."
  },
  {
    slug: "first-home-buyer-loans",
    categorySlug: "home-loans",
    name: "First Home Buyer Loans",
    summary: "Tailored pathways for those entering the market for the first time.",
    icon: Key,
    common_use_case: "Entering the property market for the first time",
    ctaLabel: "View Buyer Guide",
    ctaHref: "/finance/products/first-home-buyer-loans",
    fullDescription: "Specialized support and product structures designed to help first-time buyers overcome deposit hurdles.",
    how_it_works: [
      "Identifying grants and incentives",
      "LVR and LMI assessment",
      "Family guarantor review if applicable",
      "Loan structuring"
    ],
    useCases: [
      { title: "Grant Eligibility", desc: "Utilizing first home owner grants for a new build." },
      { title: "Small Deposit", desc: "Structuring a loan with 5% deposit." }
    ],
    relevantFor: ["First Time Buyers"],
    documents: ["Savings records", "ID", "Employment proof"],
    costFactors: ["LMI premiums", "Stamp duty exemptions", "Interest rates"],
    faq: [{ q: "What is LMI?", a: "Lenders Mortgage Insurance, usually required if deposit is under 20%." }],
    seoTitle: "First Home Buyer Mortgage Guide | Pathways to Ownership | RBP",
    metaDescription: "Entering the market? Explore first home buyer loan structures and incentives."
  },
  {
    slug: "refinance-home-loans",
    categorySlug: "home-loans",
    name: "Refinance Home Loans",
    summary: "Replacing your current mortgage with a new product or lender.",
    icon: TrendingUp,
    common_use_case: "Optimizing your current mortgage rate",
    ctaLabel: "View Refinance Guide",
    ctaHref: "/finance/products/refinance-home-loans",
    fullDescription: "Refinancing involves moving your home loan to a new provider, often to secure a better rate or different features.",
    how_it_works: [
      "Current loan health check",
      "Comparison with market options",
      "Application to new lender",
      "Payout of old loan"
    ],
    useCases: [
      { title: "Lower Rate", desc: "Moving to catch a more competitive interest rate." },
      { title: "Equity Release", desc: "Refinancing to pull out cash for renovations." }
    ],
    relevantFor: ["Existing Mortgage Holders"],
    documents: ["Current loan statements", "Updated income proof"],
    costFactors: ["Exit fees (if any)", "Valuation outcomes", "LVR movement"],
    faq: [{ q: "Is it worth it?", a: "Depends on whether the savings outweigh the costs of moving." }],
    seoTitle: "Refinance Your Home Loan | Mortgage Switch Guide | RBP",
    metaDescription: "Learn how to refinance your mortgage to save interest or access equity."
  }
];
