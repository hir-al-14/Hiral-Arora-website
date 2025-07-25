import React, { useState, useEffect } from 'react';
import './index.css';
import AboutMe from './AboutMe';
import RecentProjects from './RecentProjects';
import RecentBlogs from './RecentBlogs';
import profileImg from './assets/img.jpeg';
import { Sun, Moon } from 'lucide-react';

function RoleRotator() {
  const roles = ['Hiral Arora', 'Software Engineer', 'Innovator', 'Researcher', 'Student'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[index];
    const isEnd = !isDeleting && charIndex === current.length;
    const isStart = isDeleting && charIndex === 0;

    let timeout = 100;

    if (isEnd) {
      timeout = 1200; // pause before deleting
    } else if (isStart) {
      timeout = 300;
    }

    const timer = setTimeout(() => {
      const nextText = isDeleting
        ? current.substring(0, charIndex - 1)
        : current.substring(0, charIndex + 1);
      setText(nextText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (isEnd) setIsDeleting(true);
      if (isStart) {
        setIsDeleting(false);
        setIndex((index + 1) % roles.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <h2 className="role bold-typewriter">
      {text}
      <span className="cursor">|</span>
    </h2>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.body.className = next;
  };

  return (
    <div className="main">
      <nav className="navbar">
        <div className="logo">Hiral Arora</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer">Blogs</a>
          <a href="#contact">Contact</a>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? <Sun size={30} /> : <Moon size={30} />}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-text">
          <h1 className="gradient-header">Hello, I’m</h1>
          <RoleRotator />
          <p className="tagline">I do my most meaningful work when I connect with the vision, because that’s when passion comes naturally to me.</p>
          <p className="tagline">Looking for such opportunities in the field of Computer Science</p>
          <div className="buttons">
            <button className="primary">Contact Me</button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="secondary">
              Download Resume
            </a>
          </div>
        </div>
        <div className="floating-container">
          <img src={profileImg} alt="Hiral" className="floating-img" />
        </div>
      </header>
      <AboutMe />
      <RecentProjects />
      <RecentBlogs />
    </div>
  );
}

export default App;