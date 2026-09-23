import { useState, type KeyboardEvent } from "react";
import Walkman from "./Walkman";

const experiences = [
  {
    company: "Hyphae",
    role: "Software Engineer Intern",
    date: "July 2026 – Present",
    location: "Sausalito, CA",
    bullets: [
      "Built the ingestion system behind a 30,000+ material database, including a triage layer around our custom Firecrawl-based scraper that classified single-supplier, multi-supplier, and trade-show sources before routing each through its own extraction strategy.",
      "Designed hybrid vector search + metadata filtering over normalized material-science data, narrowing retrieval before sending context to the LLM to cut token usage by ~80% while keeping search under 300ms.",
      "Made ingestion fault tolerant with validation, retries, re-ingestion, and incremental updates so individual materials and sources could be reprocessed as supplier data changed without rebuilding the full index.",
    ],
  },

  {
    company: "Benevolent Bandwidth",
    organization: "Benevolent Bandwidth Foundation",
    role: "Open Source Software Engineer",
    date: "Jan 2026 – Jun 2026",
    location: "Remote",
    project: "Delivery Optimizer",
    bullets: [
      "Built the mobile driver experience for an open-source delivery platform used by multiple local businesses, turning delivery stops into optimized routes that drivers could follow, update, and complete in real time.",
      "Built traffic and weather-aware route optimization around OSRM and VROOM, combining road-network routing with Vehicle Routing Problem optimization and changing route conditions to generate practical multi-stop delivery plans.",
      "Built the driver workflow around those routes, including session import/export, delivery status + timestamps, issue reporting, deep links, and remaining/incomplete/completed views so route state stayed usable throughout a delivery run.",
    ],
  },

  {
    company: "Infinite Computer Solutions",
    role: "Software Engineer Intern (AI/ML)",
    date: "June 2025 – Sep 2025",
    location: "Rockville, MD",
    project: "Recommendation Systems Infrastructure",
    bullets: [
      "Worked on Tata Play's recommendation system serving 20M+ users, combining collaborative filtering with popularity, freshness, and content-similarity signals, then dynamically weighting those strategies to improve engagement by 15%.",
      "Improved cold-start coverage from 40% to 70% with semantic embeddings and content-aware similarity, and built 'because you watched this' recommendations that used viewing history to retrieve related content when collaborative signals were sparse.",
      "Automated LightFM tuning with Bayesian optimization and built recommendation-rail strategy selection, then added Redis caching with time-to-live (TTL) policies so frequently requested recommendations stayed fast while automatically refreshing as content and user signals changed.",
    ],
  },

  {
    company: "India Today Group",
    role: "Software Engineer Intern",
    date: "July 2025 – Nov 2025",
    location: "Remote, part-time",
    project: "Agentic AI Infrastructure",
    bullets: [
      "Built an election intelligence platform over decades of structured election data, translating natural-language questions into retrieval and data queries so answers were grounded in historical constituency, candidate, and party records instead of LLM memory.",
      "Engineered a RAG pipeline combining BM25 keyword retrieval, vector search, and cross-encoder reranking, retrieving and reordering the strongest evidence before generation and improving evaluated answer accuracy from 63% to 94%.",
      "Built election-aware entity resolution with fuzzy matching for constituency, candidate, and party names, handling misspellings and ambiguous queries before the platform launched to ~100,000 nationwide users.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const experience = experiences[active];

  const selectWithKeyboard = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    const next =
      event.key === "ArrowDown"
        ? (index + 1) % experiences.length
        : event.key === "ArrowUp"
          ? (index + experiences.length - 1) % experiences.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? experiences.length - 1
              : null;

    if (next === null) return;

    event.preventDefault();
    setActive(next);

    document
      .getElementById(`experience-tab-${next}`)
      ?.focus();
  };

  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="experience-inner">
        <header className="experience-heading">
          <h2 id="experience-heading">Experiences</h2>
        </header>

        <div className="experience-layout">
          <div className="experience-selector">
            <Walkman
              track={active + 1}
              label={experience.company}
            />

            <svg
              className="experience-wire"
              viewBox={`0 0 64 ${experiences.length * 72}`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                className="wire-shadow"
                d={`M 0 170 C 58 170, 6 ${
                  active * 72 + 36
                }, 64 ${active * 72 + 36}`}
              />

              <path
                d={`M 0 170 C 58 170, 6 ${
                  active * 72 + 36
                }, 64 ${active * 72 + 36}`}
              />

              <circle
                cx="61"
                cy={active * 72 + 36}
                r="4"
              />
            </svg>

            <div
              className="experience-tabs"
              role="tablist"
              aria-label="Professional experience"
              aria-orientation="vertical"
            >
              {experiences.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  role="tab"
                  id={`experience-tab-${index}`}
                  aria-controls="experience-panel"
                  aria-selected={active === index}
                  tabIndex={active === index ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) =>
                    selectWithKeyboard(event, index)
                  }
                >
                  <span className="track-number">
                    0{index + 1}
                  </span>

                  {item.company}
                </button>
              ))}
            </div>

            <p className="player-caption">
              I LOVE WALKMANS!!
            </p>
          </div>

          <div
            className="experience-panel"
            id="experience-panel"
            role="tabpanel"
            aria-labelledby={`experience-tab-${active}`}
            tabIndex={0}
          >
            <h3>
              {experience.role}{" "}
              <span>
                @{" "}
                {experience.organization ??
                  experience.company}
              </span>
            </h3>

            <p className="experience-date">
              {experience.date}
              <span>
                {" "}
                · {experience.location}
              </span>
            </p>

            {experience.project && (
              <p className="experience-project">
                {experience.project}
              </p>
            )}

            <ul>
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}