import React, { useState, useEffect } from 'react';

export default function ExitAnimation() {
  const messages = [
    'See you soon! 👋',
    'Take care! 💖',
    'Bye bye! 🐾',
    'Come back soon! 🌟',
  ];

  const [randomMessage, setRandomMessage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setRandomMessage(messages[randomIndex]);
  }, []);

  return (
    <div className="exit-animation">
      <p className="exit-message">{randomMessage}</p>
      <div className="cat-wave">
        <div className="cat goodbye-cat">
          <div className="cat-head">
            <div className="ear left"></div>
            <div className="ear right"></div>
            <div className="eyes"></div>
            <div className="stripes"></div>
          </div>
          <div className="cat-body">
            <div className="stripes-body"></div>
          </div>
          <div className="tail"></div>
          <div className="waving-paw"></div>
        </div>
      </div>
      <div className="heart-animation-exit">
        <div className="heart-exit-1"></div>
        <div className="heart-exit-2"></div>
        <div className="heart-exit-3"></div>
      </div>
    </div>
  );
}