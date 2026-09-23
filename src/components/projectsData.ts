import type { Project } from "./ProjectCard";

// Add github URLs and optional image paths here when ready.
// Screenshots belong in public/images/projects; URLs start with /images/projects/.
export const projects: Project[] = [
  {
    title: "Anticipate",
    description: "An agentic pest surveillance platform that classifies crop pests and predicts spread using environmental and geospatial signals. Finalist at HackDavis 2026.",
    stack: ["React Native", "Python", "Gemini", "Supabase"],
  },
  {
    title: "Scope",
    description: "A real-time photography coach that analyzes composition, saliency, and objects in live camera frames to help you take stronger photos.",
    stack: ["OpenCV", "YOLO", "FastAPI", "GCP"],
  },
  {
    title: "Delivery Optimizer",
    description: "A route optimization platform for local businesses, with live delivery tracking and route visualization. Balances vehicle capacity, weather, and traffic constraints.",
    stack: ["OSRM", "VROOM", "Route optimization"],
  },
  {
    title: "Self-Defense Learning System",
    description: "A real-time training tool using pose detection to match movements and provide live feedback and correction guidance.",
    stack: ["Python", "MediaPipe", "OpenCV", "FastAPI", "React"],
  },
  {
    title: "Skill Scalar",
    description: "Matches résumés with job listings and recommends courses to bridge skill gaps. Led a team of five at Google Developer Student Club UC Davis; won Best Technical Project at the showcase.",
    stack: ["FastAPI", "React", "BeautifulSoup", "LangChain"],
  },
  {
    title: "Diabetes Risk Prediction",
    description: "A machine learning project with AI Student Collective at UC Davis, predicting health risk from indicators such as blood pressure, insulin levels, and BMI. Evaluated Random Forest, Logistic Regression, and SVM models.",
    stack: ["Python", "Scikit-learn", "React"],
  },
  {
    title: "DO-GOODING",
    description: "An item-based donation platform connecting 200+ donors with recipients from four NGOs. Uses location-based matching to help distribute supplies, stationery, and clothing.",
    stack: ["React", "MongoDB", "Google Maps", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    description: "The earlier version of my personal portfolio, built with React and Tailwind, with responsive layouts and smooth scrolling.",
    stack: ["React", "Tailwind", "JavaScript"],
    image: "/images/projects/portfolio.png",
    imageAlt: "Screenshot of my earlier personal portfolio",
  },
];
