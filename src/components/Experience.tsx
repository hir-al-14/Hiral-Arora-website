import { useState, type KeyboardEvent } from "react";

const experiences = [
  {
    company: "Hyphae", role: "Software Engineer Intern", date: "July 2026 – Present", location: "Sausalito, CA",
    bullets: [
      "Built an ingestion pipeline using AWS (S3), Firecrawl, MongoDB to index 30,000+ supplier materials into a queryable database",
      "Designed hybrid retrieval and metadata indexing pipeline, reducing LLM token use by 80% and achieving sub-300ms search latency",
      "Engineered fault tolerant ingestion workflows to handle validation, re-ingestion, and updates as the materials database scaled",
    ],
  },
  {
    company: "Benevolent Bandwidth", organization: "Benevolent Bandwidth Foundation", role: "Software Engineer", date: "Jan 2026 – Jun 2026", location: "Remote", project: "Delivery Optimizer",
    bullets: [
      "Developed a route optimization platform enabling 100+ local businesses to automate deliveries with live tracking and visualization",
      "Built a Vehicle Routing Problem (VRP) engine using OSRM and VROOM, balancing capacity, weather, and traffic constraints",
    ],
  },
  {
    company: "Infinite Computer Solutions", role: "Software Engineer Intern (AI/ML)", date: "June 2025 – Sep 2025", location: "Roseville, MD", project: "Recommendation Systems Infrastructure",
    bullets: [
      "Optimized Tata Play’s recommendation engine (20M+ users) via PyTorch-based collaborative filtering, dynamic weighting, and Bayesian hyperparameter tuning across popularity, freshness and content similarity models, improving engagement by 15%",
      "Improved cold start recommendation coverage from 40% to 70% using semantic embeddings and content-aware similarity modeling",
      "Implemented dynamic auto-tuning for LightFM, built strategy selectors for recommendation rails, and created a Redis caching system",
    ],
  },
  {
    company: "India Today Group", role: "Software Engineer Intern", date: "July 2025 – Nov 2025", location: "Remote, part-time", project: "Agentic AI Infrastructure",
    bullets: [
      "Launched an election intelligence platform indexing 50 years of election data across 247 constituencies, serving ~100,000 users",
      "Created a RAG pipeline using BM25, vector search, and cross encoder reranking, improving answer accuracy from 63% to 94%",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const experience = experiences[active];
  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = event.key === "ArrowDown" ? (index + 1) % experiences.length
      : event.key === "ArrowUp" ? (index + experiences.length - 1) % experiences.length
      : event.key === "Home" ? 0 : event.key === "End" ? experiences.length - 1 : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`experience-tab-${next}`)?.focus();
  };

  return (
    <section className="experience" id="experience" aria-labelledby="experience-heading">
      <div className="experience-inner">
        <header className="experience-heading">
          <p>02 / experience</p>
          <h2 id="experience-heading">a few tracks so far.</h2>
          <span>different teams, plenty to learn. pick a track.</span>
        </header>
        <div className="experience-layout">
          <div className="experience-selector">
            <div className="tape-player" aria-hidden="true">
              <div className="player-brand">HIRAL <span>stereo</span></div>
              <div className="cassette">
                <div className="cassette-label">SIDE A · TRACK 0{active + 1}</div>
                <div className="tape-reels"><i /><span /><i /></div>
                <div className="cassette-name">{experience.company}</div>
              </div>
              <div className="player-speaker" />
              <div className="player-controls"><span>◀◀</span><span className="player-play">▶</span><span>■</span></div>
              <span className="player-jack" />
            </div>
            <svg className="experience-wire" viewBox="0 0 64 288" preserveAspectRatio="none" aria-hidden="true">
              <path className="wire-shadow" d={`M 0 170 C 58 170, 6 ${active * 72 + 36}, 64 ${active * 72 + 36}`} />
              <path d={`M 0 170 C 58 170, 6 ${active * 72 + 36}, 64 ${active * 72 + 36}`} />
              <circle cx="61" cy={active * 72 + 36} r="4" />
            </svg>
            <div className="experience-tabs" role="tablist" aria-label="Professional experience" aria-orientation="vertical">
              {experiences.map((item, index) => (
                <button key={item.company} type="button" role="tab" id={`experience-tab-${index}`} aria-controls="experience-panel" aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => selectWithKeyboard(event, index)}>
                  <span className="track-number">0{index + 1}</span>{item.company}
                </button>
              ))}
            </div>
            <p className="player-caption">a little work history, on tape.</p>
          </div>
          <div className="experience-panel" id="experience-panel" role="tabpanel" aria-labelledby={`experience-tab-${active}`} tabIndex={0}>
            <p className="experience-playing">TRACK 0{active + 1} / 04</p>
            <h3>{experience.role} <span>@ {experience.organization ?? experience.company}</span></h3>
            <p className="experience-date">{experience.date} <span>· {experience.location}</span></p>
            {experience.project && <p className="experience-project">{experience.project}</p>}
            <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
