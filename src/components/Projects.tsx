import SectionHeading from "./SectionHeading";

const projects = [
  {
    number: "01",
    title: "Anticipate",
    type: "AI · MOBILE · HACKDAVIS",
    description:
      "An agentic early-warning system for agricultural pest risk using environmental and geospatial signals.",
    stack: [
      "React Native",
      "Python",
      "Gemini",
      "Supabase",
    ],
  },
  {
    number: "02",
    title: "Scope",
    type: "COMPUTER VISION · PHOTOGRAPHY",
    description:
      "A real-time photography coach that analyzes composition, saliency, and objects to help frame stronger photos.",
    stack: [
      "OpenCV",
      "YOLO",
      "FastAPI",
      "GCP",
    ],
  },
  {
    number: "03",
    title: "Delivery Optimizer",
    type: "ROUTING · FULL STACK",
    description:
      "A route optimization platform for local delivery operations with live driver workflows and route visualization.",
    stack: [
      "React Native",
      "Python",
      "OSRM",
      "VROOM",
    ],
  },
];

function Projects() {
  return (
    <section
      className="content-section projects"
      id="projects"
    >
      <SectionHeading
        number="02"
        title="projects"
        description="a few things i've enjoyed turning from ideas into working systems."
      />

      <div className="project-list">
        {projects.map((project) => (
          <article
            className="project"
            key={project.title}
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-stack">
              {project.stack.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <span className="project-arrow">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;