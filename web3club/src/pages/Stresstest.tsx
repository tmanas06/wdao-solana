import React from 'react';
import './StressTest.css'; // Ensure you have the appropriate styles

const StressTest: React.FC = () => {
  return (
    <div className="stress-test-container">
      <h1 className="page-title">Stressed out after stressing the keyboard?</h1>
      <p className="page-description">Check out some chill games here</p>

      <div className="iframe-container">
        <h3 className="game-title">Key Quest</h3>
        <iframe 
          src="https://www.jopi.com/gam/key-quest/" 
          frameBorder="0" 
          scrolling="no" 
          width="800px" 
          height="600px" 
          title="Key Quest Game"
        ></iframe>
      </div>

      <div className="iframe-container">
        <h3 className="game-title">Pixel Mini Golf</h3>
        <iframe 
          src="https://www.jopi.com/gam/pixel-mini-golf/" 
          frameBorder="0" 
          scrolling="no" 
          width="800px" 
          height="600px" 
          title="Pixel Mini Golf Game"
        ></iframe>
      </div>

      <div className="iframe-container">
        <h3 className="game-title">Neon Bricks</h3>
        <iframe 
          src="https://www.jopi.com/gam/neon-bricks/" 
          frameBorder="0" 
          scrolling="no" 
          width="800px" 
          height="600px" 
          title="Neon Bricks Game"
        ></iframe>
      </div>

      <div className="iframe-container">
        <h3 className="game-title">Go Up Dash</h3>
        <iframe 
          src="https://www.jopi.com/gam/go-up-dash/" 
          frameBorder="0" 
          scrolling="no" 
          width="800px" 
          height="600px" 
          title="Go Up Dash Game"
        ></iframe>
      </div>
    </div>
  );
};

export default StressTest;
