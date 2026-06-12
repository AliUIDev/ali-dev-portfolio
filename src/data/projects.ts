import financePreview from "../assets/images/finance-preview.png";
import dashboardPreview from "../assets/images/admin-preview.png";
import maisonPreview from "../assets/images/maisonPreview.png"

export type Project = {
    title: string;
    description: string;
    tech: string[];
    liveUrl: string;
    githubUrl: string;
    image?: string;
};

export const projects: Project[] = [
    {
        title: "Personal Finance Tracker",
        description: "A web app to manage daily expenses with a clean interface and practical user flow.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://budgetbee-personal-finance-tracker.vercel.app/",
        githubUrl: "https://github.com/AliUIDev/personal-finance-tracker",
        image: financePreview,
    },
    {
        title: "Admin Dashboard",
        description: "A responsive dashboard interface focused on structure, components, and modern layout.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://admin-dashboard-app-ui.vercel.app/",
        githubUrl: "https://github.com/AliUIDev/admin-dashboard",
        image: dashboardPreview,
    },
    {
        title: "MAISON Operations Ledger",
        description: "Luxury retail operations dashboard built with React, TypeScript, SCSS, and Recharts.",
        tech: ["React", "TypeScript", "SCSS", "Recharts"],
        liveUrl: "https://maison-operations-ledger.vercel.app/",
        githubUrl: "https://github.com/AliUIDev/maison-operations-ledger",
        image: maisonPreview,
    },
];