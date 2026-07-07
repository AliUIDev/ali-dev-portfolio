import financePreview from "../assets/images/projects/finance-preview.png";
import dashboardPreview from "../assets/images/projects/admin-preview.png";
import maisonPreview from "../assets/images/projects/maisonPreview.png";

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
        title: "Personal Finance Platform",
        description:
            "A responsive finance dashboard for managing income, expenses, budgets, and user authentication.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://budgetbee-personal-finance-tracker.vercel.app/",
        githubUrl: "https://github.com/AliUIDev/personal-finance-tracker",
        image: financePreview,
    },
    {
        title: "Admin Dashboard UI",
        description:
            "A responsive admin dashboard UI focused on layout structure, reusable components, and modern interface design.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://admin-dashboard-app-ui.vercel.app/",
        githubUrl: "https://github.com/AliUIDev/admin-dashboard",
        image: dashboardPreview,
    },
    {
        title: "MAISON Operations Ledger",
        description:
            "A luxury retail operations dashboard for visualizing business metrics, reports, and performance insights.",
        tech: ["React", "TypeScript", "SCSS", "Recharts"],
        liveUrl: "https://maison-operations-ledger.vercel.app/",
        githubUrl: "https://github.com/AliUIDev/maison-operations-ledger",
        image: maisonPreview,
    },
];