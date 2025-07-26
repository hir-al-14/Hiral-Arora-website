import React, { useEffect, useState } from 'react';
import './Blogs.css';

const RSS_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hiral-arora';

function BlogsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(RSS_URL)
      .then(res => res.json())
      .then(data => {
        if (data.items) {
          setPosts(data.items.filter(item => item.categories.length > 0)); // filter out non-blog items
        }
      });
  }, []);

  return (
    <div className="blogs-container">
      <h1 className="blogs-title">My Medium Blogs</h1>
      <div className="blogs-grid">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card"
          >
            <img src={post.thumbnail} alt={post.title} className="blog-thumbnail" />
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p>{post.pubDate.substring(0, 10)}</p>
              <div dangerouslySetInnerHTML={{ __html: post.description.substring(0, 120) + '...' }} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogsPage;
