import React from 'react';
import firstImage from './first.png';

const TitleComponent: React.FC = () => {
  return (
    <div style={{ ...styles.titleContainer }}>
      <h1 style={styles.title}>
        <span style={styles.plainText}>The</span>{' '}
        <span style={styles.gradientText}>Wallstreet DAO</span>
      </h1>
      <p style={{ ...styles.tagline, ...styles.glassmorphism }}>
        The first of its kind university DAO community
      </p>
      <div style={styles.imageContainer}>
        <img src={firstImage} alt="First Image" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  titleContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    marginTop: '2rem',
    minHeight: '100vh', // Adjust as needed
  } as React.CSSProperties,
  title: {
    fontFamily: 'Glitch Goblin, sans-serif', // Use Glitch Goblin font
    fontSize: '8rem',
    marginBottom: '0.5rem', // Adjust spacing between title and tagline
  } as React.CSSProperties,
  plainText: {
    color: '#ffffff',
  } as React.CSSProperties,
  gradientText: {
    backgroundImage: 'linear-gradient(to right, #61f2e9 0%, #6fff00 100%, lime)',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  } as React.CSSProperties,
  tagline: {
    color: '#ffffff',
    fontSize: '3rem',
    lineHeight: '1.5',
  } as React.CSSProperties,
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.2)', // Adjust the opacity as needed
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    padding: '1rem', // Add padding to create space around the text
  } as React.CSSProperties,
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  } as React.CSSProperties,
  image: {
    maxWidth: '23rem', // Ensure image doesn't exceed container width
    height: '23rem', // Maintain aspect ratio
  } as React.CSSProperties,
};

export default TitleComponent;
