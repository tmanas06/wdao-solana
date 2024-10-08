import React from 'react';
import styles from './AboutUs.module.css'; // Import CSS module for styling

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
        <p>Learn about our Web3 club, its mission, and the team driving innovation in blockchain technology.</p>
      </header>

      <section className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          Our Web3 club was established to drive the adoption and understanding of blockchain technology among students and professionals. We focus on hosting events, workshops, and hackathons that foster innovation and provide hands-on experience with the latest in blockchain and decentralized technologies.
        </p>
        <p>
          Founded in 1947, our club has quickly become a hub for blockchain enthusiasts and industry professionals. We are dedicated to creating opportunities for learning, networking, and collaboration in the rapidly evolving world of Web3.
        </p>
      </section>

      <section className={styles.team}>
        <h2>Meet the Team</h2>

        {/* Team Member 1 */}
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLOP-difMBMG3oknhDI0yKM0ky9P6rnSGzg&s" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President/Founder/Dev</strong></p>
            <p>This guy is the driving force behind our major projects and events.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>

        {/* Repeat similar structure for other team members */}
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/132088009?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President/Founder/Dev</strong></p>
            <p>This guy is the driving force behind our major projects and events.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image5-1.png.webp" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President/Founder/Dev</strong></p>
            <p>This guy is the driving force behind our major projects and events.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://blockgeeks.com/wp-content/uploads/2022/10/image5-1.png.webp" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President/Founder/Dev</strong></p>
            <p>This guy is the driving force behind our major projects and events.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
        <div className={styles.member}>
          <div className={styles.profile}>
            <div className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src="https://avatars.githubusercontent.com/u/113188197?v=4" alt="T.Manas" className={styles.image} />
                </div>
                <div className={styles.flipCardBack}>
                  <img src="https://w0.peakpx.com/wallpaper/37/107/HD-wallpaper-neon-genesis-evangelion-vaporwave.jpg" alt="Avatar" className={styles.avatar} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.details}>
            <h3>T.Manas</h3>
            <p><strong>President/Founder/Dev</strong></p>
            <p>This guy is the driving force behind our major projects and events.</p>
            <div className={styles.links}>
  <a href="https://www.linkedin.com" className={styles.linkedinButton} target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com" className={styles.githubButton} target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <p>For more information, reach out to us at <a href="mailto:wallstreetclub@klh.edu.in">wallstreetclub@klh.edu.in</a>.</p>
      </section>
    </div>
  );
};

export default AboutUs;
