/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';  // Import Firestore instance
import backImage from './back.png';

const News = () => {
  interface NewsItem {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  }
  
  const [news, setNews] = useState<NewsItem[]>([]);  // State to store fetched news data

  useEffect(() => {
    // Fetch data from Firestore
    const fetchNews = async () => {
      const newsCollection = collection(db, 'news');
      const newsSnapshot = await getDocs(newsCollection);
      const newsList = newsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          title: data.title,
          description: data.description,
          link: data.link,
          imageUrl: data.imageUrl,
        } as NewsItem;
      });
      setNews(newsList);
    };
    
    fetchNews();
  }, []);

  return (
    <div css={styles.container}>
      <img src={backImage} alt="Back" css={styles.backButton} onClick={() => window.history.back()} />
      <h1 css={[styles.heading, styles.font]}>News</h1>
      <div css={styles.grid}>
        {news.map((item, index) => (
          <div key={index} css={[styles.card, styles.font]}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imageUrl} alt={item.title} css={styles.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: css({
    padding: '2rem',
    fontFamily: "'Audiowide', sans-serif",
  }),
  heading: css({
    fontSize: '7rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#7fff00', // Bright lime color
    textShadow: '0 0 100px #7fff00', // Neon lime yellow shadow
  }),
  font: css({
    fontFamily: "'Audiowide', sans-serif",
  }),
  backButton: css({
    width: '70px',
    height: '70px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
  }),
  card: css({
    background: 'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }),
  image: css({
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '10px',
  }),
};

export default News;
