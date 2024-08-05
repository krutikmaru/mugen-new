import {
  Box,
  BriefcaseBusiness,
  File,
  ListCheck,
  LucideIcon,
  School,
  Server,
  Ship,
  Wallet,
  Warehouse,
} from "lucide-react";

export const projects: Project[] = [
  {
    id: 1,
    title: "Business Center Operations",
    icon: BriefcaseBusiness,
    industry: "Business Services",
    duration: "2 months",
    overview:
      "Enhanced customized ERP solutions for better business services and operational efficiency.",
    name: "Manufacturing Focussed ERP for Engineering Company",
    sector: ["Engineering", "Manufacturing"],
    integrations: [
      { title: "CRM", icon: Server },
      { title: "Accounts", icon: File },
      { title: "Inventory", icon: Warehouse },
      { title: "Task Management", icon: ListCheck },
      { title: "Payroll Systems", icon: Wallet },
    ],
    difficulty: {
      title: "mid",
      progress: 70,
    },
    timeline: 1.5,
    content: [
      {
        type: "h1",
        data: "Challenges",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Inefficient management of business units, access cards, and parking spaces using Excel. Lack of a Human Resource Management System (HRMS) causing difficulties in salary processing and leave management. Need for an effective lead management system to enhance sales team performance and client engagement.
`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h1",
        data: "Solutions Provided",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "h2",
        data: "1. Software Implementation for Business Operations:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Problem: The business center was facing significant challenges in managing the allocation of business units, access cards, and parking spaces using Excel. This led to inefficiencies and errors in day-to-day operations.
`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Solution: We implemented a comprehensive software solution designed to streamline these processes. The new system allowed for efficient allocation and management, reducing errors and saving time.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Outcome: The business center experienced improved organization and efficiency in managing their business units, access cards, and parking spaces.
`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "2. HRMS System Implementation:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Problem: The absence of an HRMS system meant that the accounts team had to handle salary processing and leave management manually, leading to potential errors and inefficiencies.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Solution: We provided and maintained an HRMS system tailored to the business center's needs. This system automated salary processing, leave management, and other HR-related tasks.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Outcome: The new HRMS system enhanced the accuracy and efficiency of HR operations, freeing up the accounts team to focus on other critical tasks.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "3. Lead Management System for Sales Team:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Implementation: The sales team at the business center successfully implemented a lead management system to improve their lead handling and client engagement processes.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Outcome: The lead management system enabled the sales team to better track and manage leads, resulting in improved client engagement and increased sales efficiency.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Conclusion: The implementation of these solutions transformed the operational efficiency of XYZ Business Center. By addressing their key challenges with tailored software solutions, we helped them achieve a more organized, efficient, and productive work environment.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "Client Testimonial:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `"The new systems have significantly improved our operational efficiency. The software for managing business units and access cards, the HRMS system, and the lead management system have all contributed to a smoother and more efficient workflow. We are extremely satisfied with the results." - Sreeji, UWBC`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
    ],
  },
  {
    id: 2,
    title: "Optimizing Educational Operations",
    icon: School,
    industry: "Education",
    duration: "2 months",
    overview:
      "Streamlined student data management, timetables, lead follow-ups with tailored ERP solutions.",
    name: "Manufacturing Focussed ERP for Engineering Company",
    sector: ["Education", "Retail", "Manufacturing"],
    integrations: [
      { title: "CRM", icon: Server },
      { title: "Accounts", icon: File },
      { title: "Inventory", icon: Warehouse },
      { title: "Task Management", icon: ListCheck },
      { title: "Payroll Systems", icon: Wallet },
    ],
    difficulty: {
      title: "High",
      progress: 90,
    },
    timeline: 2,
    content: [
      {
        type: "h1",
        data: "Challenges",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Inefficient management of students' data. Difficulty in organizing and maintaining timetables. Ineffective lead follow-up processes. Challenges in attendance management, parent reviews, and tracking student progression.`,
        tailwindCss: "mb-5",
      },
      {
        type: "h1",
        data: "Solutions Provided",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "h2",
        data: "Comprehensive Student Data Management:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Implemented software to manage student data efficiently, ensuring accurate and accessible information.`,
        tailwindCss: "mb-5",
      },
      {
        type: "h2",
        data: "Timetable Organization:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Developed a system to streamline the creation and maintenance of timetables, reducing conflicts and optimizing schedules.`,
        tailwindCss: "mb-5",
      },

      {
        type: "h2",
        data: "Lead Follow-up System:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Provided a lead management tool to track and engage with prospective students, improving follow-up processes and conversion rates.`,
        tailwindCss: "mb-5",
      },
      {
        type: "h2",
        data: "Attendance Management and Parent Communication:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Facilitated attendance tracking and provided tools for parent reviews.`,
        tailwindCss: "",
      },
      {
        type: "li",
        data: `Implemented a system for tracking student progression and updating parents regularly.`,
        tailwindCss: "",
      },
      {
        type: "li",
        data: `Maintained records internally for easy access and management.`,
        tailwindCss: "mb-5",
      },
      {
        type: "h2",
        data: "Outcome:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `The software solution transformed the institute's operations, making data management, timetable organization, lead follow-ups, attendance tracking, parent communication, and student progression tracking more efficient and effective. The institute experienced enhanced productivity, better resource management, and improved communication with parents, aligning with their specific needs.`,
        tailwindCss: "mb-5",
      },
      {
        type: "h2",
        data: "Client Testimonial:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `"The new systems have significantly improved our operational efficiency. The software for managing business units and access cards, the HRMS system, and the lead management system have all contributed to a smoother and more efficient workflow. We are extremely satisfied with the results." - Sreeji, UWBC`,
      },
    ],
  },
  {
    id: 3,
    title: "Shipchandler Quotation Management",
    icon: Ship,
    industry: "Marine Supplies",
    duration: "1 month",
    overview:
      "Streamlined ShipChandler's supplier quotation process with a customized software solution, automating price comparison and awarding.",
    name: "Manufacturing Focussed ERP for Engineering Company",
    sector: ["Education", "Retail", "Manufacturing"],
    integrations: [
      { title: "CRM", icon: Server },
      { title: "Accounts", icon: File },
      { title: "Inventory", icon: Warehouse },
      { title: "Task Management", icon: ListCheck },
      { title: "Payroll Systems", icon: Wallet },
    ],
    difficulty: {
      title: "Low",
      progress: 25,
    },
    timeline: 1,
    content: [
      {
        type: "h1",
        data: "Challenges",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Difficulty in obtaining quotations from multiple suppliers. Inefficient process for awarding quotations based on supplier prices. Need for customized solutions to meet specific business requirements.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h1",
        data: "Solutions Provided",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "h2",
        data: "1. Automated Quotation Management:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Implemented a system to streamline the process of obtaining quotations from various suppliers.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Enabled the company to receive and compare supplier prices efficiently.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "2. Quotation Awarding System:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Developed a solution to automate the awarding of quotations based on supplier prices.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Ensured a transparent and efficient selection process for suppliers.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "3. Customized Features:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Tailored the system to meet the specific needs of ShipChandler.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Included features to manage and finalize quotations based on orders.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "Outcome:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `The customized software solution significantly improved the company's ability to manage supplier quotations. By automating and optimizing the process of obtaining, comparing, and awarding quotations, the company experienced enhanced efficiency and accuracy in its operations. The tailored features ensured that the system aligned perfectly with their specific business needs, leading to better decision-making and streamlined workflow.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
    ],
  },
  {
    id: 4,
    title: "Optimizing Wholesale Distribution",
    icon: Box,
    industry: "Wholesale Distribution",
    duration: "3 month",
    overview:
      "Streamlined operations for a wholesale distributor with a custom dashboard, enhancing efficiency multiple child companies.",
    name: "Manufacturing Focussed ERP for Engineering Company",
    sector: ["Retail", "Manufacturing"],
    integrations: [
      { title: "CRM", icon: Server },
      { title: "Accounts", icon: File },
      { title: "Inventory", icon: Warehouse },
      { title: "Task Management", icon: ListCheck },
      { title: "Payroll Systems", icon: Wallet },
    ],
    difficulty: {
      title: "High",
      progress: 85,
    },
    timeline: 1,
    content: [
      {
        type: "h1",
        data: "About the Client",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `The client is a fast-growing, trusted distributor of general food and non-food items, specializing in bulk grocery trading, with a strong footprint across the entire Middle East.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h1",
        data: "Challenges",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `Managing operations for multiple child companies. Difficulty in synchronizing tasks and to-do lists across different companies. Need for a centralized and personalized dashboard to streamline operations based on roles and responsibilities.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h1",
        data: "Solutions Provided",
        tailwindCss: "mb-2 text-5xl text-black dark:text-white",
      },
      {
        type: "h2",
        data: "1. Custom Dashboard Implementation:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Created a personalized dashboard to manage different child companies.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Centralized the to-do lists for various companies, synchronized according to the employees’ roles and responsibilities.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "2. System Customization:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "li",
        data: `Implemented a system tailored to the client's specific needs.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "li",
        data: `Enabled seamless integration and synchronization of tasks across multiple entities within the company.`,
        tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
      },
      {
        type: "h2",
        data: "Outcome:",
        tailwindCss: "mb-2 text-2xl text-black dark:text-white",
      },
      {
        type: "p",
        data: `The implementation of a custom dashboard and tailored system significantly enhanced the client's operational efficiency. By centralizing and synchronizing tasks and to-do lists, the company achieved better coordination and productivity across its various child companies. The personalized approach ensured that each employee had a clear understanding of their roles and responsibilities, leading to improved workflow and overall performance.`,
        tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
      },
    ],
  },
];

type Integration = {
  title: string;
  icon: LucideIcon;
};

type Difficulty = {
  title: string;
  progress: number;
};

type Content = {
  type: string;
  data: string;
  tailwindCss?: string;
};

export type Project = {
  id: number;
  title: string;
  icon: LucideIcon;
  industry: string;
  duration: string;
  overview: string;
  name: string;
  sector: string[];
  integrations: Integration[];
  difficulty: Difficulty;
  timeline: number;
  content: Content[];
};
