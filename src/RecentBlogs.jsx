import React, { useEffect, useState } from 'react';
import './RecentBlogs.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const RSS_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hiral-arora';

function RecentBlogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(RSS_URL)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setPosts(data.items);
        }
      });
  }, []);

  if (!posts.length) return <div className="recent-blogs">Loading blogs...</div>;

  return (
    <div className="recent-blogs">
      <h2 className="recent-title">My Blogs</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {posts.map(post => (
          <SwiperSlide key={post.guid}>
            <div className="blog-card">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <h3>{post.title}</h3>
                <p>{post.description.replace(/<[^>]+>/g, '').slice(0, 300)}...</p>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecentBlogs;
