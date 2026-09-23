import type { Project } from "./ProjectCard";

// Descriptions use the available READMEs, résumé, previous portfolio, and supplied Devpost copy.
export const projects: Project[] = [
  {
    title: "Scope",
    description: "A real-time photography coach that uses composition, saliency, and object detection to help you frame stronger photos.",
    stack: ["OpenCV", "YOLO", "FastAPI", "React Native"],
    github: "https://github.com/AICollectiveDavis/photography-scene-finder",
  },
  {
    title: "Anticipate",
    demo: "https://www.youtube.com/watch?v=mlmwJxAM94k",
    description: "An offline-capable app for farmers to report pests, identify species with Gemini, and alert nearby fields using wind, irrigation, and crop-adjacency risk. HackDavis 2026 finalist.",
    stack: ["React Native", "Python", "Gemini", "Supabase"],
    github: "https://github.com/sathvikparasa/hackdavis26",
  },
  {
    title: "NomNom",
    demo: "https://drive.google.com/file/d/1yaOvkMenW4OiAsAqx_L459V4DX5AzPM9/view?usp=sharing",
    description: "A food-discovery app for exploring menus around dietary needs. Share restrictions with a Food-note QR card, compare ingredients, and chat with restaurants.",
    stack: ["Expo", "React Native", "TypeScript", "Supabase"],
    github: "https://github.com/hir-al-14/NomNom",
  },
  {
    title: "Skill Scalar",
    description: "Matches résumés with job listings and recommends courses to bridge skill gaps. Led a team of five; won Best Technical Project at the GDSC UC Davis showcase.",
    stack: ["FastAPI", "React", "BeautifulSoup", "LangChain"],
    github: "https://github.com/GDSC-UCD-Cohort-24-25/team-vertex",
  },
  {
    title: "Portfolio Website",
    description: "My personal corner of the web: a rainy introduction, a framed photo wall, and a cassette player for exploring my work history.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    github: "https://github.com/hir-al-14/Hiral-Arora-website",
  },
  {
    title: "Self-Defense Learning System",
    status: "In progress",
    description: "A real-time training tool using pose detection to match movements and provide live feedback and correction guidance.",
    stack: ["Python", "MediaPipe", "OpenCV", "FastAPI"],
    github: "https://github.com/hir-al-14/Computer-Vision-Projects",
  },
  {
    title: "SerenAI",
    demo: "https://www.youtube.com/watch?v=WBizWO22fTk",
    description: "A mental-health chatbot prototype with emotion tagging and personalized recommendations, paired with a therapist dashboard for reviewing emotional trends and risk flags.",
    stack: ["React", "FastAPI", "Gemini", "Hugging Face"],
    github: "https://github.com/hir-al-14/SereneAI",
  },
  {
    title: "NAMI Yolo Portal",
    description: "A volunteer-management prototype for NAMI Yolo County, with event scheduling, availability, and application tracking. Built at HackDavis 2025; I contributed to the frontend and Figma design.",
    stack: ["React", "Firebase", "Figma"],
    github: "https://github.com/aalcar/hackdavis-25",
    website: "https://namiyolo.org/",
    websiteLabel: "NAMI Yolo County",
  },
];
