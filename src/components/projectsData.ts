import type { Project } from "./ProjectCard";

export const projects: Project[] = [
  {
    title: "Scope",
    description:
      "A real-time photography coach that reads a camera frame using composition, saliency, and YOLO object detection.\nHelps you find a stronger crop while you're taking the photo.",
    stack: ["OpenCV", "YOLO", "FastAPI", "React Native"],
    github:
      "https://github.com/AICollectiveDavis/photography-scene-finder",
  },

  {
    title: "Anticipate",
    demo: "https://www.youtube.com/watch?v=mlmwJxAM94k",
    description:
      "A pest early-warning app that identifies reported species with Gemini, then uses wind, irrigation, crop, and location data to estimate which nearby farms could be at risk.\nHackDavis 2026 finalist.",
    stack: ["React Native", "Python", "Gemini", "Supabase"],
    github: "https://github.com/sathvikparasa/hackdavis26",
  },

  {
    title: "NomNom",
    demo:
      "https://drive.google.com/file/d/1yaOvkMenW4OiAsAqx_L459V4DX5AzPM9/view?usp=sharing",
    description:
      "A food-discovery app built around dietary restrictions, especially for post-surgical patients navigating what they can safely eat.\nBecause recovering shouldn't mean missing out on good food with the people you love :)",
    stack: ["Expo", "React Native", "TypeScript", "Supabase"],
    github: "https://github.com/hir-al-14/NomNom",
  },

  {
    title: "Skill Scalar",
    description:
      "Compares skills from your résumé against job listings, finds what's missing, and turns those gaps into course recommendations.\nLed a team of five members.\nWon Best Technical Project at the GDSC UC Davis showcase.",
    stack: ["FastAPI", "React", "BeautifulSoup", "LangChain"],
    github:
      "https://github.com/GDSC-UCD-Cohort-24-25/team-vertex",
  },

  {
    title: "Portfolio Website",
    description:
      "This website! Built from scratch with React and TypeScript and includes all the things I love: \nRain, photo memories, a Walkman, coffee,and probably too much time spent on tiny details :)",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    github:
      "https://github.com/hir-al-14/Hiral-Arora-website",
  },

  {
    title: "Self-Defense Learning System",
    status: "In progress",
    description:
      "A real-time movement coach that tracks body landmarks with MediaPipe and compares your pose against a reference movement.\nUses those differences to give live correction feedback.",
    stack: ["Python", "MediaPipe", "OpenCV", "FastAPI"],
    github:
      "https://github.com/hir-al-14/Computer-Vision-Projects",
  },

  {
    title: "SerenAI",
    demo: "https://www.youtube.com/watch?v=WBizWO22fTk",
    description:
      "A chatbot prototype that tags emotion across conversations and turns those signals into longer-term trends.\nIncludes a separate dashboard for reviewing emotional patterns and risk flags.",
    stack: ["React", "FastAPI", "Gemini", "Hugging Face"],
    github: "https://github.com/hir-al-14/SereneAI",
  },

  {
    title: "NAMI Yolo Portal",
    description:
      "A volunteer portal for NAMI Yolo County that brings event scheduling, availability, and applications into one place.\nHackDavis 2025.",
    stack: ["React", "Firebase", "Figma"],
    github: "https://github.com/aalcar/hackdavis-25",
    website: "https://namiyolo.org/",
    websiteLabel: "NAMI Yolo County",
  },
];