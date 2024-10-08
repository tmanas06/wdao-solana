/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import backImage from './back.png'; // Import the back image
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Ensure correct firebase config import

const neonBlink = keyframes`
  from {
    color: #7900f2; // Initial color
  }
  to {
    color: #a706ff; // Neon burple color
  }
`;

const ProjectShowcase: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  interface Project {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    studentName: string;
    linkedin: string;
    githubProfile: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectCollection = collection(db, 'projects'); // Adjust the collection name as per your Firestore structure
      const projectSnapshot = await getDocs(projectCollection);
      const projectList = projectSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          title: data.title,
          description: data.description,
          imageUrl: data.imageUrl,
          link: data.link,
          studentName: data.studentName, // Fetch student name
          linkedin: data.linkedin, // Fetch LinkedIn profile
          githubProfile: data.githubProfile, // Fetch GitHub profile
        } as Project;
      });
      setProjects(projectList);
    };

    fetchProjects();
  }, []);

  return (
    <div css={styles.container}>
      <img
        src={backImage}
        alt="Back"
        css={styles.backButton(isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.history.back()}
      />
      <h1 css={styles.heading}>Project Showcase</h1>
      <div
        css={styles.submitCard}
        onClick={() => window.open('https://forms.gle/fHApmiFoh66vRfBK7', '_blank')}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = 'linear-gradient(-20deg, #92fe9d 0%, #00c9ff 100%)')}
      >
        Want to contribute? Submit your project here
      </div>
      <div css={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} css={styles.card}>
            <img src={project.imageUrl} alt={project.title} css={styles.image} />
            <div css={styles.cardContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div css={styles.builtBy}>
  Built by: <span css={styles.gradientName}>{project.studentName}</span>
</div>
              <div css={styles.socialLinks}>
                <a href={project.linkedin} target="_blank" rel="noopener noreferrer" css={styles.linkButton}>
                  LinkedIn
                </a>
                <a href={project.githubProfile} target="_blank" rel="noopener noreferrer" css={styles.linkButton}>
                  GitHub
                </a>
              </div>
              <button
                css={styles.githubButton}
                onClick={() => window.open(project.link, '_blank')}
              >
                View on GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: css({
    padding: '2rem',
    fontFamily: "'Audiowide', sans-serif", // Apply the Audiowide font to the entire container
    '@media (max-width: 768px)': {
      padding: '1rem', // Reduce padding on mobile
    },
  }),
  heading: css({
    fontSize: '6rem', // Bigger font size
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#7900f2', // Neon burple color
    textShadow: '0 0 5px #a706ff', // Neon burple glow
    animation: `${neonBlink} 1s infinite alternate`, // Blinking effect
    '@media (max-width: 768px)': {
      fontSize: '3rem', // Adjust font size for mobile
    },
  }),
  backButton: (isHovered: boolean) => css({
    width: '70px',
    height: '70px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    '@media (max-width: 768px)': {
      width: '50px', // Reduce size for mobile
      height: '50px',
    },
  }),
  submitCard: css({
    display: 'block',
    marginBottom: '1rem',
    padding: '1rem',
    backgroundImage: 'linear-gradient(-20deg, #92fe9d 0%, #00c9ff 100%)',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-image 0.3s',
    textDecoration: 'none',
    '@media (max-width: 768px)': {
      fontSize: '0.9rem', // Adjust font size for mobile
    },
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr', // Make single-column layout on mobile
      gridGap: '10px', // Reduce gap on mobile
    },
  }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, #000000, #330867)', // Black to lime yellow gradient
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  }),
  image: css({
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '10px',
    '@media (max-width: 768px)': {
      marginBottom: '10px', // Reduce bottom margin on mobile
    },
  }),
  cardContent: css({
    color: '#fff',
  }),
  githubButton: css({
    backgroundImage: 'linear-gradient(180deg, #2af598 0%, #009efd 100%)', // Gradient background
    color: '#000000', // Black text color
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundImage: 'none', // Remove background image on hover
      backgroundColor: '#9b34eb', // Adjusted hover color
      color: '#000000', // Black text color on hover
    },
    '@media (max-width: 768px)': {
      padding: '0.4rem 0.8rem', // Adjust padding for mobile
    },
  }),
  
  linkButton: css({
    background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    color: '#000',
    padding: '0.1rem 0.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#ffffff',
    },
  }),
  builtBy: css({
    color: '#fff', // "Built by:" text in white
    fontSize: '1rem',
    marginTop: '10px', // Optional margin to add some space above
  }),
  gradientName: css({
    background: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
    WebkitBackgroundClip: 'text', // This makes the gradient appear only on the text
    WebkitTextFillColor: 'transparent', // Ensures the text itself is transparent to show the gradient
    fontWeight: 'bold', // Optional: makes the name bold
  }),
  socialLinks: css({
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
    marginBottom: '20px', // Added margin below the LinkedIn and GitHub buttons
    '& button': {
      backgroundImage: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', // Gradient for LinkedIn and GitHub buttons
      color: '#fff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, color 0.3s',
      '&:hover': {
        backgroundImage: 'none',
        backgroundColor: '#9b34eb',
        color: '#000',
      },
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Adjust for mobile
    },
  }),
};

export default ProjectShowcase;
