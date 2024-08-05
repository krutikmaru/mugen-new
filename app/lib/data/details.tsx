import {
  Activity,
  BadgeCheck,
  Blend,
  Brackets,
  BrickWall,
  Calendar,
  ChartCandlestick,
  CircleDollarSign,
  ClipboardPlus,
  Container,
  Factory,
  FolderKanban,
  Globe,
  Hammer,
  HandCoins,
  Landmark,
  LibraryBig,
  Link,
  Mail,
  PictureInPicture2,
  Pyramid,
  RefreshCcw,
  Server,
  Settings2,
  ShoppingBag,
  ShoppingCart,
  SquareMousePointer,
  Store,
  Truck,
  Ungroup,
  Users,
  WalletCards,
  Warehouse,
} from "lucide-react";

const ecommerce = {
  icon: ShoppingBag,
  title: "E-Commerce",
  overview:
    "Manage your online store with ease. Manage inventory, generate invoices, track sales",
  modules: ["Sales", "CRM", "Inventory", "Accounting", "Website"],
  details: [
    {
      icon: Truck,
      title: "E-Commerce",
      description:
        "Discounts, Promotions, Loyalty, Customer Management, Inventory Management, Sales Management, Payments, & Wallet Management",
    },
    {
      icon: WalletCards,
      title: "Payment & Integrations",
      description:
        "Paypal, Stripe, Razorpay, Paytm, Google Pay, Apple Pay, & More",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const manufacturing = {
  icon: Factory,
  title: "Manufacturing (MRP)",
  overview:
    "Get a 360° view of your manufacturing operations. Manage your production, track your inventory, generate reports",
  modules: [
    "Sales",
    "Purchase",
    "HCM & Payrole",
    "Project",
    "Inventory",
    "Accounting",
    "Calendar",
  ],
  details: [
    {
      icon: Hammer,
      title: "Engineering & Planning",
      description:
        "PLM, MPS, BOM, Work Orders, Production Scheduling, Routing, Timesheets, Quality Control, Costing, Downtime",
    },
    {
      icon: Link,
      title: "Supply Chain",
      description: "Manage Inventory, Bills, Lead Times, Purchase Rules",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const tracability = {
  icon: Brackets,
  title: "Tracability",
  overview:
    "Track your products from raw materials to finished goods. Manage your inventory Product Recalls",
  modules: [
    "Sales",
    "Purchase",
    "Inventory",
    "Accounting",
    "Calendar",
    "Quality",
  ],
  details: [
    {
      icon: Brackets,
      title: "Track & trace",
      description:
        "Barcodes, QR Codes, 2D Matrix Codes, Serial Number, Batch Number, Lot Number, Expiry, Chain Of Custody",
    },
    {
      icon: Pyramid,
      title: "Compliance And Governance",
      description:
        "Manage Recalls, Quarantine, Sync With Governance Portals. Track Defective Items By Batch/Party",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const accounting = {
  icon: Landmark,
  title: "Accounting",
  overview: "Accounting, Invoicing, Payments, Bank Reconciliation",
  modules: [
    "Sales",
    "Purchase",
    "HCM & Payroll",
    "Project",
    "Inventory",
    "Calendar",
    "Manufacturing",
  ],
  details: [
    {
      icon: Landmark,
      title: "360 Accounting",
      description:
        "Chart Of Accounts, Cost Centers, General Ledger, Accounts Payable, Accounts Receivable, Bank Reconciliation",
    },
    {
      icon: Pyramid,
      title: "Compliance And Governance",
      description:
        "GST, TDS, TCS, VAT, Excise, Customs, Audit Reports, Budget, Automated SOA",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const asset = {
  icon: ChartCandlestick,
  title: "Asset",
  overview: "Manage your assets with ease. Track depreciation, maintenance",
  modules: [
    "Purchase",
    "HCM & Payroll",
    "Project",
    "Inventory",
    "Calendar",
    "Accounting",
  ],
  details: [
    {
      icon: ChartCandlestick,
      title: "Fixed Assets Management",
      description:
        "Manage Property, Plant, And Equipment. Track Depreciation, Maintenance",
    },
    {
      icon: RefreshCcw,
      title: "Lifecycle & Maintenance",
      description: "Change Management, Asset Lifecycle, Asset Maintenance",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const hcm = {
  icon: Users,
  title: "HCM & Payroll",
  overview:
    "360° HR Management. From recruitment to separation. Manage your employees with ease.",
  modules: [
    "Sales",
    "Project",
    "Asset",
    "Calendar",
    "Accounting",
    "Manufacturing",
  ],
  details: [
    {
      icon: Users,
      title: "Human Capital Management",
      description:
        "Recruitment Employee Lifecycle Management, Leave Management, Attendance Management, Appraisals",
    },
    {
      icon: HandCoins,
      title: "Payroll & Expenses",
      description:
        "Manage Your Payroll With Ease. Track Your Employees' Expenses, Generate Reports",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const warehouse = {
  icon: Warehouse,
  title: "Inventory & Warehouse",
  overview:
    "360° Inventory Management and WMS. Manage forecasts, lead times, and stock balances",
  modules: [
    "Sales",
    "Purchase",
    "Asset",
    "Project",
    "Calendar",
    "Accounting",
    "Manufacturing",
  ],
  details: [
    {
      icon: Users,
      title: "Stock Operations",
      description:
        "Auto Re-Order, Stock Level Alerts, Batching, Serialization, Variants, Bundling, Multiple Price Lists, Aging & Movement Trackers",
    },
    {
      icon: HandCoins,
      title: "Advance Operation",
      description:
        "Cross Docking, Drop Shipping, Putaway, Picking, Packing, Shipping, Receiving, Inventory Valuation",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const project = {
  icon: FolderKanban,
  title: "Project Management",
  overview:
    "Dynamic project management with costing, activities and timesheets",
  modules: [
    "Sales",
    "CRM",
    "Inventory",
    "Accounting",
    "Website",
    "Purchase",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
    "Quality",
    "Calendar",
  ],
  details: [
    {
      icon: FolderKanban,
      title: "Project Management",
      description:
        "Organize, Schedule And Plan Projects. Generate Tasks From Projects And Assign Them To Users.",
    },
    {
      icon: CircleDollarSign,
      title: "Costing & Profitability",
      description:
        "Track Project Costs And Generate Invoices. Analyze Costs By Project, Task, Or Employee.",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const purchase = {
  icon: ShoppingCart,
  title: "Purchase",
  overview:
    "From procurement planing to invoice generation, stock booking and vendor management in one screen.",
  modules: [
    "Sales",
    "Inventory",
    "Accounting",
    "Manufacturing",
    "Asset",
    "Calendar",
    "Project",
  ],
  details: [
    {
      icon: Ungroup,
      title: "Procurement",
      description:
        "Generate RFQs, Purchase Orders, And Track Deliveries. Manage Your Vendors And Generate Invoices.",
    },
    {
      icon: Blend,
      title: "Advance Procurement",
      description:
        "Purchase Agreements, Purchase Contracts,Purchase Analysis, Purchase Alerts, Purchase KPIs Etc. Pricing And Shipping Rules",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const sale = {
  icon: CircleDollarSign,
  title: "Sales",
  overview:
    "Manage your sales with ease. Track your sales pipeline, quotations, orders, and invoices",
  modules: [
    "CRM",
    "Inventory",
    "Accounting",
    "Purchase",
    "Manufacturing",
    "Asset",
    "Calendar",
    "Project",
  ],
  details: [
    {
      icon: Warehouse,
      title: "Sales Management",
      description:
        "Manage Your Sales Pipeline, Quotations, Orders, And Invoices. Track Your Sales Team's Performance.",
    },
    {
      icon: Blend,
      title: "Advanced Feature",
      description:
        "Employee And Partner Commissions, Forecasting, Sales Analysis, Sales Alerts, Sales KPIs, Pricing And Shipping Rules",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const website = {
  icon: Globe,
  title: "Website",
  overview:
    "Create your own website and Integrate with Google Ads, Facebook, Instagram, Motamo and more.",
  modules: [
    "Sales",
    "CRM",
    "Inventory",
    "Accounting",
    "Purchase",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
    "Calendar",
  ],
  details: [
    {
      icon: BrickWall,
      title: "Website builder",
      description:
        "Create Your Own Website With Our Built In Website Builder. No Coding Skills Required.",
    },
    {
      icon: ShoppingBag,
      title: "E-Commerce",
      description:
        "Sell Your Products Online. Manage Your Inventory, Orders, And Payments.",
    },
    {
      icon: Activity,
      title: "Marketing",
      description:
        "Integrate With Google Ads, Facebook, Instagram, Motamo And More. Generate Leads And Sales.",
    },
  ],
};

const eLearning = {
  icon: LibraryBig,
  title: "ELearning",
  overview:
    "Create and manage your online training content for your team. Track your progress and generate certificates and accumulate points.",
  modules: ["HCM"],
  details: [
    {
      icon: LibraryBig,
      title: "ELearning",
      description:
        "Create And Manage Your Online Training Content For Your Team. Track Your Progress And Generate Certificates And Accumulate Points.",
    },
    {
      icon: Blend,
      title: "Advanced Features",
      description:
        "Analysis, Alerts, KPIs, Certificates, Points, Quizzes And Surveys",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const calendar = {
  icon: Calendar,
  title: "Calendar Events",
  overview:
    "Manage your calendar events and meetings, scheduled and assigned tasks, todos. Track your team's availability and schedule meetings.",
  modules: [
    "Sales",
    "CRM",
    "Inventory",
    "Accounting",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
  ],
  details: [
    {
      icon: Calendar,
      title: "Calendar",
      description:
        "Manage Your Calendar Events And Meetings, Scheduled And Assigned Tasks, Todos. Track Your Team's Availability And Schedule Meetings.",
    },
    {
      icon: Blend,
      title: "Advanced Features",
      description: "SMS/Email Reminders, Sync With Google Calendar And More",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const quality = {
  icon: BadgeCheck,
  title: "Quality",
  overview:
    "Manage your quality control process. Track your quality issues and generate reports.",
  modules: [
    "Sales",
    "Inventory",
    "Accounting",
    "Purchase",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
    "Calendar",
  ],
  details: [
    {
      icon: BadgeCheck,
      title: "Quality Control",
      description: "Meetings, SOP , Goals, Actions, Review, NCR , Feedback",
    },
    {
      icon: Blend,
      title: "Advanced Features",
      description: "Analysis, Alerts, KPIs, Points",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const freight = {
  icon: Container,
  title: "Freight",
  overview:
    "Manage your freight operations with ease. Track shipments, generate invoices, manage customs",
  modules: [
    "Sales",
    "Purchase",
    "Manufacturing",
    "Inventory",
    "Accounting",
    "Calendar",
  ],
  details: [
    {
      title: "Freight Operations",
      description:
        "FTL/LTL, Agent, Consignee, Carrier/Transporter, Trucking/Shipping/Air Freight, Logistics, Warehousing, Freight Forwarding & Container management",
      icon: Container,
    },
    {
      title: "Customs Operations",
      description:
        "Customs Clearance, documentation, certification, Import, Export, & Customs management",
      icon: Settings2,
    },
    {
      title: "Reporting",
      description:
        "Real-time dashboards, reports, alerts, KPIs available across platforms",
      icon: ClipboardPlus,
    },
  ],
};

const pointOfSale = {
  icon: SquareMousePointer,
  title: "Point Of Sale",
  overview:
    "Use our Integrated Point of Sale system to manage your retail operations. Manage inventory, generate invoices, Van sales",
  modules: ["Sales", "CRM", "Inventory", "Accounting"],
  details: [
    {
      icon: SquareMousePointer,
      title: "Point Of Sale",
      description:
        "Discounts, Promotions, Loyalty, Customer Management, Inventory Management, Sales Management, Payments, & Wallet Management",
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description:
        "Manage Your Inventory. Track Stock, Generate Purchase Orders, Manage Vendors",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const vendor = {
  icon: Users,
  title: "Vendor Management",
  overview:
    "Manage your vendors with ease. Manage payments, balances, statements, orders",
  modules: ["Accounting", "Purchase", "Inventory", "Calendar", "Manufacturing"],
  details: [
    {
      icon: Users,
      title: "Vendor Management",
      description:
        "Vendor Management, Payments, Balances, Statements, Orders, & Invoices, Scoring And Blacklisting",
    },
    {
      icon: PictureInPicture2,
      title: "Vendor Portal",
      description:
        "Portal With 2fa, OTP, And Other Security Features For Vendors To Manage Their Own Accounts, Orders, And Invoices",
    },
    {
      icon: ClipboardPlus,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

export const details = {
  detailsStore: [
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing",
      mainContent: [
        ecommerce,
        manufacturing,
        tracability,
        accounting,
        asset,
        hcm,
        warehouse,
        project,
        purchase,
        sale,
        website,
        eLearning,
        calendar,
        quality,
      ],
    },
    {
      id: "retail",
      icon: Store,
      title: "Retail",
      mainContent: [
        freight,
        pointOfSale,
        ecommerce,
        vendor,
        accounting,
        asset,
        hcm,
        warehouse,
        project,
        purchase,
        sale,
        website,
        eLearning,
        calendar,
        quality,
      ],
    },
    {
      id: "logistics",
      icon: Warehouse,
      title: "Logistics",
      mainContent: [
        freight,
        ecommerce,
        accounting,
        asset,
        hcm,
        warehouse,
        project,
        purchase,
        sale,
        website,
        eLearning,
        calendar,
        quality,
      ],
    },
    {
      id: "services",
      icon: Server,
      title: "Services",
      mainContent: [
        ecommerce,
        accounting,
        asset,
        hcm,
        warehouse,
        project,
        sale,
        website,
        eLearning,
        calendar,
        quality,
      ],
    },
    {
      id: "general",
      icon: Mail,
      title: "General",
      mainContent: [
        ecommerce,
        accounting,
        asset,
        hcm,
        warehouse,
        project,
        sale,
        website,
        eLearning,
        calendar,
        quality,
      ],
    },
  ],
};
