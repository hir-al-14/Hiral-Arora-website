import React, { useEffect, useState } from 'react';
import './RecentProjects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const GITHUB_API = 'https://api.github.com/users/hir-al-14/repos?sort=updated';

function RecentProjects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(GITHUB_API)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 10)); // Limit to 10 recent
        }
      });
  }, []);

  if (!repos.length) return <div className="recent-projects">Loading projects...</div>;

  return (
    <div className="recent-projects">
      <h2 className="projects-title">Projects</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
        modules={[Navigation]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {repos.map(repo => (
          <SwiperSlide key={repo.id}>
            <div className="project-card">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <h3>{repo.name}</h3>
                <p>{repo.description ? repo.description.slice(0, 150) : "No description available"}...</p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecentProjects;
