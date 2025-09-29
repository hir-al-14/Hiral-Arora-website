import React from "react";
import "./AboutMe.css";

function AboutMe() {
  const experiences = [
    {
      date: "Jun 2025 – Now",
      title: "Artificial Intelligence Intern - India Today",
      points: [
        "Built a domain-specific election chatbot using LangGraph and OpenAI prompting to generate optimized SQL queries on IndiaToday’s news dataset (1970–present), enabling accurate, data-driven responses.",
        "Developed a retrieval-augmented generation (RAG) pipeline that reuses SQL query patterns from semantically similar past queries, reducing time of response while improving reliability.",
        "Trained the system on Indian election terminology (e.g., incumbent, turncoat, swing vote) and implemented fuzzy matching of MLA names to handle discrepancies between common and official records—delivering high domain-specific accuracy.",
        "Deployed currently for Bihar state elections, with public release planned for Nov 2025 on the India Today News Channel, making it the first election-data-trained chatbot in Indian media.",
        "Currently writing a research paper documenting the architecture, technical challenges, and innovations behind this project."
      ]
    },
    {
      date: "Jun 2025 – Sep 2025",
      title: "AI/ML Intern - Infinite Computer Solutions",
      points: [
        "Optimized the recommendation system for TATA play (an OTT platform) leveraging Bayesian hyperparameter tuning agents to optimize user engagement metrics and recalibrate model weighting in real time.",
        "Built a dynamic auto tuning for LightFM, different rail’s recommendation strategy selector.",
        "Worked on a dynamic TTL generator for redis based caches, and a “Because you watched X, here’s Y” type of functionality."
      ]
    },
    {
      date: "Jun 2023 – Jun 2025",
      title: "Director of Technology - Project Neurova",
      points: [
        "Overseeing the technology department, managed 10 members and worked with them to plan and build the project’s website.",
        "Built a therapist-style mental health chatbot using LangChain, integrating a third party Mental health content API."
      ]
    },
    {
      date: "Sep 2022 – Nov 2023",
      title: "LIDAR Beginner Intern - Sai Infotech Systems Ltd. (SISL)",
      points: [
        "Worked under mentors on LIDAR projects, learned about LIDAR fundamentals and its geospatial information systems application developed by SISL."
      ]
    }
  ];

  return (
    <section className="experience-section">
      <div className="experience-grid">

        {/* Background */}
        <div className="experience-title">
          <h2>BACKGROUND</h2>
        </div>
        <div className="experience-text">
          <p>
            <strong>Heyy!! I’m Hiral Arora — a sophomore at UC Davis, majoring in Computer Science with a Minor in Electrical Engineering and Economics.</strong>
            <br />
            I have a <strong>deep passion for building solutions that create meaningful impact</strong> and connect with people on a personal and more relatable level.
            <br />
            I’m especially drawn to the transformative power of <strong>Artificial Intelligence and Machine Learning</strong>, where innovation meets real-world problems.
            <br />
            <strong>For me, it’s never just about writing code — it’s about aligning with a vision I believe in, and giving it my full focus, energy, and heart.</strong>
          </p>
        </div>

        {/* Experience */}
        <div className="experience-title">
          <h2>EXPERIENCE</h2>
        </div>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-entry">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-role">{exp.date}</span>
                <ul className="timeline-points">
                  {exp.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="experience-title">
          <h2>RESEARCH</h2>
        </div>
        <div className="experience-text">
          <p>
            <ul>
              <li>
                <strong>Citation: </strong>Arora, H., Jayal, A., & Prakash, E. (2023, September). 
                <em>An Exploratory Ukraine Rising Commodities Price Analysis: Towards a Resilient Food System</em>. 
                In <strong>UK Workshop on Computational Intelligence</strong> (pp. 249-258). 
                Cham: Springer Nature Switzerland.
              </li>
              <li>
                Received the <strong>Young Researcher Award (Sep 2023)</strong>.
              </li>
              <li>
                Presented the paper at the 
                <strong>22nd United Kingdom Workshop on Computational Intelligence</strong>, 
                Aston University, United Kingdom.
              </li>
            </ul>
          </p>
        </div>
        <div className="experience-title">
          <h2>PROJECTS</h2>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
