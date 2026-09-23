export type Project = {
  title: string;
  demo?: string;
  description: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  github?: string;
  status?: string;
  website?: string;
  websiteLabel?: string;
};

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.28-5.12-1.25-5.12-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.63 0c2.15-1.46 3.1-1.15 3.1-1.15.61 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.41.35.77 1.03.77 2.08v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const label = project.github ? `Open ${project.title} on GitHub` : `GitHub link for ${project.title} coming soon`;
  return (
    <article className="project-card">
      {project.image && <img className="project-image" src={project.image} alt={project.imageAlt ?? `${project.title} screenshot`} loading="lazy" />}
      <div className="project-card-body">
        <div className="project-card-heading">
          <h3>{project.title}</h3>
          {project.github ? (
            <a className="project-github" href={project.github} target="_blank" rel="noreferrer" aria-label={label} title={label}><GithubIcon /></a>
          ) : (
            <span className="project-github project-github--placeholder" role="img" aria-label={label} title={label}><GithubIcon /></span>
          )}
        </div>
        {project.status && <span className="project-status">{project.status}</span>}
        <p>{project.description}</p>
        {project.demo && <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Watch ${project.title} demo`}>Watch demo <span aria-hidden="true">↗</span></a>}
        {project.website && <a className="project-website" href={project.website} target="_blank" rel="noreferrer">{project.websiteLabel ?? "Visit website"} ↗</a>}
        <ul className="project-stack" aria-label="Technologies">{project.stack.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
    </article>
  );
}
