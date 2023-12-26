import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="full-screen">
      {/* Background video */}
      <div className="background-video">
        <video autoPlay loop muted playsInline>
          {/* Make sure to place your video in the public folder and update the path */}
          <source src="/eacc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Button with trapezoid shape */}
      <a href="#" className="experiment-button">lets accelerate bitches</a>
    </div>
  );
};

export default HomePage;

