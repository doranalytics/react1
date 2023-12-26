import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [showChristmasMessage, setShowChristmasMessage] = useState(false);

  const displayChristmasMessage = () => {
    setShowChristmasMessage(true);
  };

  return (
    <div className="full-screen">
      <div className="background-video">
        {/* Background video */}
        <video autoPlay loop muted playsInline className="video">
          <source src="/eacc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Button to display Christmas message */}
      <button onClick={displayChristmasMessage} className="experiment-button">
        Let's Brainstorm!!!
      </button>
      {/* Display the Christmas message if showChristmasMessage is true */}
      {showChristmasMessage && (
        <div className="merry-christmas-message">Merry Christmas Retards!</div>
        )}
        {/* Text field in the top left corner */}
        <input type="text" className="top-left-text-field" placeholder="x^Ponent" />
      </div>
  );
};

export default HomePage;
