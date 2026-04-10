import financePreview from "../assets/images/finance-preview.png";
import dashboardPreview from "../assets/images/admin-preview.png";
import portfolioPreview from "../assets/images/portfolio-preview.png";

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
        liveUrl: "https://personal-finance-tracker-1-project.netlify.app/",
        githubUrl: "https://github.com/AliNadirov/personal-finance-tracker",
        image: financePreview,
    },
    {
        title: "Admin Dashboard",
        description: "A responsive dashboard interface focused on structure, components, and modern layout.",
        tech: ["React", "JavaScript", "CSS"],
        liveUrl: "https://react-admin-dashboard-2026.netlify.app/",
        githubUrl: "https://github.com/AliNadirov/admin-dashboard",
        image: dashboardPreview,
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio built to present projects, skills, and frontend work clearly.",
        tech: ["React", "TypeScript", "SCSS"],
        liveUrl: "hhttps://ali-dev-works.netlify.app/",
        githubUrl: "https://github.com/AliNadirov/my-portfolio",
        image: portfolioPreview,
    },
];