import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="projects-inner">
        <h2 id="projects-heading">Projects</h2>
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
