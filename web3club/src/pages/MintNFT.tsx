import React from 'react';
import './MintNFT.css'; // Import the CSS file for styles

const MintNFT: React.FC = () => {
  return (
    <div className="fullPageIframe">
      <h1>Mint NFT</h1>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfY2y1VcEYZ0HJLyoyoW8xHgNdgsilcrfFbzgiEuEZ-QpFXsA/viewform?usp=sf_link" 
        width="640" 
        height="480" 
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default MintNFT;
