import {
  Bot,
  ChartNoAxesCombined,
  Compass,
  LayoutTemplate,
  RefreshCcwDot,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceId = "ai" | "web" | "redesign" | "integration" | "data" | "consulting";

export interface Service {
  id: ServiceId;
  icon: LucideIcon;
  title: string;
  /** Short name for chips and in-page navigation. */
  nav: string;
  short: string;
  desc: string;
  features: string[];
  /** Label used by the contact form's service picker. */
  formLabel: string;
  /** Estimator weight in weeks. */
  weeks: number;
}

export const SERVICES: Service[] = [
  {
    id: "ai",
    nav: "AI agents",
    icon: Bot,
    title: "AI agents and workflow automation",
    short: "Agents trained on your documents that support customers, qualify leads and run routine tasks.",
    desc: "We build agents on proven models from Google and Amazon and fine-tune them on your own data. They answer customer questions around the clock, qualify incoming leads, book calls and automate repetitive work across your team.",
    features: [
      "Trained on your business documents",
      "Web, WhatsApp and Slack",
      "Lead capture and scheduling",
      "Connected to your CRM",
    ],
    formLabel: "AI agent and automation",
    weeks: 2,
  },
  {
    id: "web",
    nav: "Web platforms",
    icon: LayoutTemplate,
    title: "Custom web and platform development",
    short: "Fast web apps, client portals and e-commerce, built from scratch.",
    desc: "Fast, responsive websites and web applications built for exactly how your business works, with no bloated off-the-shelf templates.",
    features: [
      "Next.js and React",
      "E-commerce and client portals",
      "Fast on mobile",
      "Built for search",
    ],
    formLabel: "Custom website or web app",
    weeks: 3,
  },
  {
    id: "redesign",
    nav: "Redesign",
    icon: RefreshCcwDot,
    title: "System redesign and modernization",
    short: "Slow, confusing legacy software rebuilt into something your team enjoys using.",
    desc: "Is your software slow, confusing or outdated? We restructure legacy tools into clear, modern systems, migrate every existing record, and switch over with zero downtime.",
    features: [
      "UI and UX overhaul",
      "Faster page and data loads",
      "Responsive on every screen",
      "No loss of existing data",
    ],
    formLabel: "System redesign and modernization",
    weeks: 3,
  },
  {
    id: "integration",
    nav: "Integration",
    icon: Workflow,
    title: "Software and API integration",
    short: "Your CRM, ERP, payments and databases, synced into one hub.",
    desc: "Stop typing the same data twice. We connect your CRM, ERP, Stripe payments, inventory and internal databases so they stay in sync on their own.",
    features: [
      "Third-party API connectors",
      "Stripe and payments",
      "ERP and CRM sync",
      "Automatic error alerts",
    ],
    formLabel: "Software and API integration",
    weeks: 2,
  },
  {
    id: "data",
    nav: "Dashboards",
    icon: ChartNoAxesCombined,
    title: "Data and analytics dashboards",
    short: "Clean databases, automated reports and dashboards you can read at a glance.",
    desc: "Take control of your company data with clean database structure, automated reports and clear dashboards for the decisions you make every week.",
    features: [
      "Real-time dashboards",
      "Daily and weekly reports",
      "Safe migration and backups",
      "Clean database design",
    ],
    formLabel: "Data and analytics",
    weeks: 2,
  },
  {
    id: "consulting",
    nav: "Consulting",
    icon: Compass,
    title: "Strategic consulting and growth planning",
    short: "Technical roadmaps, acquisition funnels and a virtual CTO when you need one.",
    desc: "Technical roadmapping and digital growth strategy so your software reaches the right audience and pays for itself.",
    features: [
      "Technical roadmaps",
      "Audience and funnel strategy",
      "Stack audits",
      "Ongoing advisory",
    ],
    formLabel: "Growth and tech consulting",
    weeks: 1,
  },
];

export const serviceById = (id: string) => SERVICES.find((s) => s.id === id);

export const PROCESS = [
  {
    title: "Discovery and architecture audit",
    desc: "We study your operations, user feedback and software bottlenecks to find the changes that matter most.",
  },
  {
    title: "Roadmap",
    desc: "A clear, step-by-step plan for the build, the launch and how you will reach your audience.",
  },
  {
    title: "Build in two-week milestones",
    desc: "Focused two-week milestones, each ending in a live demo, so you see progress from the first fortnight.",
  },
  {
    title: "Launch and support",
    desc: "We deploy to production, train your team and keep the system running at 99.99% availability.",
  },
];

export const PRINCIPLES = [
  {
    title: "Plain English, no jargon",
    desc: "You always know what we are building, why, and how it helps your business.",
  },
  {
    title: "Senior engineers, directly",
    desc: "No account managers or junior handoffs. You work with the people who write your code.",
  },
  {
    title: "You own 100% of it",
    desc: "Source code, design assets and data belong to your company from day one, on open standards with no lock-in.",
  },
  {
    title: "Predictable milestones",
    desc: "Working software every two weeks instead of a big reveal months from now.",
  },
];

/** `focus` crops a portrait into the shared 4:5 frame (object-position plus scale). */
export const TEAM: { name: string; role: string; image: string; focus?: { position: string; scale: number } }[] = [
  { name: "Win Chakma", role: "Founder and Lead Technical Architect", image: "/images/team_win_chakma.jpg" },
  { name: "Simon Chakma", role: "Founder and Head of Operations", image: "/images/team_simon_chakma.jpg" },
  { name: "Tushar Chakma", role: "Founder and Strategic Investment Partner", image: "/images/team_tushar_chakma.jpg", focus: { position: "50% 0%", scale: 1.07 } },
  { name: "Bhoumik Chakma", role: "Project Manager and Growth Marketing", image: "/images/team_bhoumik_chakma.jpg" },
  { name: "Durnibar Chakma", role: "Head of UI/UX Systems", image: "/images/team_durnibar_chakma.jpg" },
  { name: "Jasmin Chakma", role: "Technical Lead and Backend Architecture", image: "" },
];
