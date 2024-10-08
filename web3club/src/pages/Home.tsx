import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fonts/fonts.css';
import bg1 from './bg1.png';
import WhatsInIt from './WhatsInIt';

const Home: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.whiteText}>the </span>
            <span style={styles.gradientText}>Wallstreet DAO</span>
          </h1>
          <p style={styles.heroSubtitle}>
            The first of its kind university DAO community, based KLH Uni
          </p>
        </div>
      </div>
      <WhatsInIt />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Audiowide', sans-serif",
    minHeight: '100vh',
  } as React.CSSProperties,
  heroSection: {
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '0 1rem', // Add padding to ensure content doesn't touch edges on smaller screens
  } as React.CSSProperties,
  heroContent: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '1rem',
    borderRadius: '8px',
    maxWidth: '80%',
    width: '100%',
  } as React.CSSProperties,
  heroTitle: {
    fontFamily: 'Glitch Goblin, sans-serif',
    fontSize: '5rem', // Adjust font size for responsiveness
    marginBottom: '0.5rem',
    display: 'inline-block',
    wordBreak: 'break-word', // Ensure title breaks correctly on small screens
  } as React.CSSProperties,
  gradientText: {
    background: `linear-gradient(90deg, #90f542, lime)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } as React.CSSProperties,
  whiteText: {
    color: '#ffffff',
  } as React.CSSProperties,
  heroSubtitle: {
    fontSize: '1.5rem', // Adjust subtitle font size for responsiveness
  } as React.CSSProperties,
};

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: 'Audiowide', sans-serif;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .visible {
    opacity: 1 !important;
  }
  @media (max-width: 768px) {
    .heroTitle {
      font-size: 1rem; /* Adjust font size for mobile screens */
    }
    .heroSubtitle {
      font-size: 1.2rem; /* Adjust subtitle font size for mobile screens */
    }
    .heroContent {
      padding: 0.5rem; /* Adjust padding for mobile screens */
    }
  }
`;
document.head.appendChild(globalStyles);

export default Home;
