import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-container">
      <div className="about-card">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m Hiral Arora, a freshman studing Computer Science & Engineering at UC Davis with a passion for building solutions that create meaningful impact. Whether it’s AI, full-stack development, or data analysis, I gravitate toward projects that challenge me and contribute to something bigger than myself.
        </p>
        <p className="about-text">
          Affable, Organized, and Resourceful — these words best describe me. I've led award-winning teams, built a resume-matching platform recognized at the GDSC Mid-Year Showcase, and interned in AI roles where I developed personalized recommendation systems and chatbot assistants using LangChain, Ollama, and pgvector. I thrive when I’m combining technical problem-solving with real-world application.
        </p>
        <p className="about-text">
            Outside the classroom, I’ve contributed to mental health platforms, built donation networks for NGOs, and worked on real-time systems like self-defense training tools. I’m always eager to learn, collaborate, and grow—especially in spaces where tech can drive positive change.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;