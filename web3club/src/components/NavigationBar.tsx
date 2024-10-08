import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import mediumIcon from '../pages/medium.svg';
import instagramIcon from '../pages/instagram.svg';
import linkedinIcon from '../pages/linkedin.svg';
import telegramIcon from '../pages/telegram.svg';
import githubIcon from '../pages/github.svg';
import twitterIcon from '../pages/twitter.svg';
import discordIcon from '../pages/discord.svg';
import gmailIcon from '../pages/gmail.svg';
import stressIcon from '../pages/stress.png';
import styles from './NavigationBar.module.css'; // Import CSS module

const NavigationBar: React.FC = () => {
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);

  const toggleSocialDropdown = () => {
    setIsSocialDropdownOpen(prevState => !prevState);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={styles.brand}>
          WallStreet DAO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.navLinks}>
            <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/blog" className={styles.navLink}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/events-calendar" className={styles.navLink}>Events Calendar</Nav.Link>
            <Nav.Link as={Link} to="/project-showcase" className={styles.navLink}>Project Showcase</Nav.Link>
            <Nav.Link as={Link} to="/news" className={styles.navLink}>News</Nav.Link>
            <Nav.Link as={Link} to="/mint-nft" className={styles.navLink}>Mint NFT</Nav.Link>
            <Nav.Link as={Link} to="/reviews" className={styles.navLink}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/digiboard" className={styles.navLink}>Digiboard</Nav.Link>
            <Nav.Link as={Link} to="/stress-test" className={styles.stressButton}>
              <img src={stressIcon} alt="Stress Icon" className={styles.stressIcon} />
            </Nav.Link>
            <div className={styles.dropdown}>
              <button
                onClick={toggleSocialDropdown}
                className={`${styles.socialButton} ${isSocialDropdownOpen ? styles.socialButtonHover : ''}`}
              >
                Socials
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </button>
              {isSocialDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <img src={discordIcon} alt="Discord" className={styles.icon} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" className={styles.icon} />
                  </a>
                  <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                    <img src={mediumIcon} alt="Medium" className={styles.icon} />
                  </a>
                  <a href="mailto:example@gmail.com">
                    <img src={gmailIcon} alt="Gmail" className={styles.icon} />
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className={styles.icon} />
                  </a>
                  <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram" className={styles.icon} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className={styles.icon} />
                  </a>
                </div>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
        <div className={styles.connectButtonContainer}>
          {/* Solana Wallet Connect Button */}
          <WalletMultiButton />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
