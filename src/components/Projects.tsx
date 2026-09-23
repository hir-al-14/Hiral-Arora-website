import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

export default function Projects() {
  const slider = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    const element = slider.current;
    if (!element) return;

    const card = element.firstElementChild;
    const distance =
      (card?.getBoundingClientRect().width ?? 420) + 20;

    element.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
        ? "instant"
        : "smooth",
    });
  };

  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="projects-inner">
        <div className="projects-heading">
          <h2 id="projects-heading">Projects</h2>

          <div className="projects-controls">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous projects"
              aria-controls="project-slider"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next projects"
              aria-controls="project-slider"
            >
              →
            </button>
          </div>
        </div>

        <div
          className="project-list"
          id="project-slider"
          ref={slider}
          tabIndex={0}
          role="region"
          aria-label="Project carousel, scroll horizontally to explore"
          onKeyDown={(event) => {
            if (
              event.target !== event.currentTarget ||
              !["ArrowLeft", "ArrowRight"].includes(event.key)
            )
              return;

            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}