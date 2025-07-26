import React, { useRef } from 'react';
import './RecentProjects.css';
import dumpsterImg from './assets/images/Dumpster.png';

const projects = [
  {
    title: 'Portfolio Website',
    image: dumpsterImg,
    description: 'Personal website built using React and Tailwind.',
    skills: ['React', 'Tailwind', 'JavaScript'],
  },
  {
    title: 'Blog API',
    image: '/images/blogapi.png',
    description: 'REST API for a blog using Flask and MySQL.',
    skills: ['Flask', 'Python', 'MySQL'],
  },
  {
    title: 'Task Manager',
    image: '/images/taskmanager.png',
    description: 'Task tracking app with user auth.',
    skills: ['Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Weather App',
    image: '/images/weather.png',
    description: 'Weather dashboard with OpenWeather API.',
    skills: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'ChatBot',
    image: '/images/chatbot.png',
    description: 'AI-powered customer service bot.',
    skills: ['Python', 'LangChain', 'React'],
  },
];

function ProjectsSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -350 : 350,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">PROJECTS</h2>
      <div className="slider-controls">
        <button className="arrow-btn" onClick={() => scroll('left')}>&lt;</button>
        <div className="projects-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-img" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <hr className="separator" />
              <div className="skill-tags">
                {project.skills.map((skill, idx) => (
                  <span className="tag" key={idx}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-btn" onClick={() => scroll('right')}>&gt;</button>
      </div>
    </section>
  );
}

export default ProjectsSection;
