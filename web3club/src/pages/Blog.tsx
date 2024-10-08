import React, { useState, useEffect } from 'react';
import './backbutton.css'; // Import the CSS file
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface BlogPost {
  title: string;
  imageUrl: string;
  link: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const blogPostsCollection = collection(db, 'blogPosts');
      const blogPostsSnapshot = await getDocs(blogPostsCollection);
      const blogPostsList = blogPostsSnapshot.docs.map(doc => doc.data() as BlogPost);
      console.log(blogPostsList); // Log the fetched blog posts
      setBlogPosts(blogPostsList);
    };
    

    fetchBlogPosts();

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const options = {
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const cards = document.querySelectorAll('.blog-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div style={styles.container}>
      <button 
        className="btn" 
        onMouseEnter={() => setHoveredIndex(-1)} 
        onMouseLeave={() => setHoveredIndex(null)} 
        onClick={() => window.history.back()}
      >
        Back
      </button>
      <h1 style={{ ...styles.header, fontFamily: "'Audiowide', sans-serif" }}>Blogs</h1>
      <div style={styles.list}>
        {blogPosts.map((post, index) => {
          // Log each blog post's image URL
          console.log(`Rendering blog post ${index}:`, post);
          
          return (
            <a 
              key={index} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blog-card"
              style={{ 
                ...styles.card, 
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                opacity: 1 
              }}
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={styles.imageContainer}>
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  style={styles.image}
                  onError={() => console.error(`Failed to load image from ${post.imageUrl}`)} 
                />
              </div>
              <div style={styles.content}>
                <h2 style={{ ...styles.title, fontFamily: "'Audiowide', sans-serif" }}>{post.title}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
  
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#121212',
    color: '#ffffff',
    fontFamily: "'Audiowide', sans-serif",
  } as React.CSSProperties,
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  } as React.CSSProperties,
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as React.CSSProperties,
  card: {
    width: '80%',
    maxWidth: '600px',
    marginBottom: '20px',
    textDecoration: 'none',
    color: '#ffffff',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, opacity 0.5s ease-in-out',
    background: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
  } as React.CSSProperties,
  imageContainer: {
    flex: 1,
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  } as React.CSSProperties,
  content: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#000000',
  } as React.CSSProperties,
  title: {
    margin: 0,
  } as React.CSSProperties,
};

export default Blog;