// AboutMe.jsx
import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="experience-section">
      <div className="experience-grid">
        <div className="experience-title">
          <h2>BACKGROUND</h2>
        </div>
        <div className="experience-text">
          <p>
            <strong>Heyy!! I’m Hiral Arora — a sophomore at UC Davis, majoring in Computer Science with a Minor in Economics.</strong>
          </p>
          <p>
            I have a <strong>deep passion for building solutions that create meaningful impact and connect with people on a personal and more relatable level.</strong> My work is grounded in developing systems with a strong <strong>user-centric mindset.</strong>
          </p>
          <p>
            I’m especially drawn to the transformative power of <strong>Artificial Intelligence and Machine Learning fields</strong>,  where innovation meets real-world problems. I want to be part of building systems that not only perform but also understand, adapt, and elevate user experience.
          </p>
          <p>
            <strong>For me, it’s never just about writing code — it’s about aligning with a vision I believe in, and giving it my full focus, energy, and heart.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
