import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {



  return (
    <div className="full-screen">
      <div className="background-video">
        {/* Background video */}
        <video autoPlay loop muted playsInline className="video">
          <source src="/eacc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <a href="https://www.linktr.ee/doranalytics" target="_blank" rel="noopener noreferrer" className="experiment-button">
doranalytics      </a>

      )
    </div>
  );
};

export default HomePage;
