import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "Hyphae",
    role: "Software Engineer Intern",
    date: "2026 — present",
    description:
      "Building ingestion and retrieval infrastructure across large supplier material datasets.",
    tags: ["AWS", "MongoDB", "retrieval"],
  },
  {
    company: "India Today Group",
    role: "Software Engineer Intern · Agentic AI",
    date: "2025",
    description:
      "Built retrieval infrastructure for an election intelligence platform spanning decades of election data.",
    tags: ["RAG", "search", "AI"],
  },
  {
    company: "Infinite Computer Solutions",
    role: "Software Engineer Intern · AI/ML",
    date: "2025",
    description:
      "Worked on recommendation systems and cold-start modeling for large-scale streaming products.",
    tags: ["PyTorch", "recommendation", "ML"],
  },
];

function Experience() {
  return (
    <section
      className="content-section experience"
      id="experience"
    >
      <SectionHeading
        number="01"
        title="experience"
        description="places where i've built, learned, and shipped."
      />

      <div className="experience-list">
        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={experience.company}
          >
            <p className="experience-date">
              {experience.date}
            </p>

            <div className="experience-main">
              <h3>{experience.company}</h3>

              <p className="experience-role">
                {experience.role}
              </p>

              <p className="experience-description">
                {experience.description}
              </p>

              <div className="experience-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;