import React from 'react';
import './AnimatedLoader.css';
const AnimatedLoader: React.FC = () => {
  return (
    <div className="stack">
    <div className="blobs">
      <span className="blob"></span>
      <span className="blob"></span>
      <span className="blob"></span>
      <span className="blob"></span>
    </div>
  </div>
  );
};

export default AnimatedLoader;
