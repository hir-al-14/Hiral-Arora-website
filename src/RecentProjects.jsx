import React, { useRef } from 'react';
import './RecentProjects.css';
import portfolioImg from './assets/images/portfolio.png';

const projects = [
  {
    title: 'Self-Defense Learning System (In Progress)',
    image: '/images/blogapi.png',
    description: [
      'Real-time training tool using MediaPipe pose detection and OpenCV.',
      'Pose matching with live feedback and correction guidance.',
      'Full-stack system with FastAPI, WebSockets, TensorFlow, React, PostgreSQL, Docker.',
    ],
    skills: ['Python', 'MediaPipe', 'OpenCV', 'FastAPI', 'React.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Skill Scalar @ Google Developer Student Club UC Davis',
    image: '/images/taskmanager.png',
    description: [
      'Led a team of five as Project Manager and won Best Technical Project at the Project Showcase.',
      'Built a web app that matches resumes with job listings scraped from platforms like Linkedin, Indeed, Google, etc. using BeautifulSoup.',
      'Provided course recommendations to bridge skill gaps via resume analysis, using OpenRouter AI prompts and a LangChain chatbot.',
      'Linked frontend and backend using FastAPI, and implemented pose detection with MediaPipe (ongoing) to suggest interview attire.'
    ],
    skills: ['FastAPI', 'React.js', 'BeautifulSoup', 'LangChain', 'MediaPipe', 'PostgreSQL'],
  },
  {
    title: 'Diabetes Risk Prediction @ AI Student Collective UC Davis',
    image: '/images/weather.png',
    description: [
      'Developed a machine learning model to predict health risk based on key health indicators like blood pressure, insulin levels, and BMI.',
      'Trained and evaluated models using Random Forest, Logistic Regression, and SVM for accurate risk classification.'
    ],
    skills: ['Python', 'Scikit-Learn', 'React.js', 'Random Forest', 'Logistic Regression', 'SVM'],
  },
  {
    title: 'DO-GOODING',
    image: '/images/chatbot.png',
    description: [
      'Developed a ReactJS web application that facilitates item-based donations by linking 200+ donors with recipients from 4 NGOs.',
      'Incorporated location-based matching to enable effective distribution of consumables, stationary, and clothing.',
      'Used MongoDB and an integrated Google Maps API for proximity filtering, real-time updates and scalable performance were guaranteed.'
    ],
    skills: ['Python', 'Tailwind', 'React', 'JavaScript'],
  },
  {
    title: 'Portfolio Website',
    image: portfolioImg,
    description: [
      'Personal website built using React and Tailwind.',
      'Responsive design with smooth scrolling.',
    ],
    skills: ['React', 'Tailwind', 'JavaScript'],
  }
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
      <div className="slider-controls">
        <button className="arrow-btn" onClick={() => scroll('left')}>&lt;</button>
        <div className="projects-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {/* <img src={project.image} alt={project.title} className="project-img" /> */}
              <h3 className="project-title">{project.title}</h3>

              <ul className="project-desc">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

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
