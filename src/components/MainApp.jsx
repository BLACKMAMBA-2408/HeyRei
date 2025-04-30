import React, { useState, useEffect } from 'react';

export default function MainApp() {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [easterEgg, setEasterEgg] = useState('');
  const [tapCount, setTapCount] = useState(0);
  const [showExitAnimation, setShowExitAnimation] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      if (hour === 0 && minutes <= 15) {
        setEasterEgg("You're up late, Reihane. Thinking of me too?");
      }
      if (hour < 12) {
        setTimeOfDay('morning');
      } else if (hour < 18) {
        setTimeOfDay('afternoon');
      } else {
        setTimeOfDay('night');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const greetings = {
    morning: 'Good Morning Reihane!',
    afternoon: 'Good Afternoon Reihane!',
    night: 'Good Night Reihane!',
  };

  let pressTimer;
  const handleLongPressStart = () => {
    pressTimer = setTimeout(() => {
      setEasterEgg('You found a hidden hug! (づ｡◕‿‿◕｡)づ');
    }, 2000);
  };
  const handleLongPressEnd = () => {
    clearTimeout(pressTimer);
  };

  const handleExitLongPressStart = () => {
    pressTimer = setTimeout(() => {
      setEasterEgg('Even if you try to leave, my heart stays with you.');
    }, 3000);
  };
  const handleExitLongPressEnd = () => {
    clearTimeout(pressTimer);
  };

  const handleTap = () => {
    setTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 5) {
        setEasterEgg('You are more beautiful than all the flowers here.');
        return 0;
      }
      return newCount;
    });
  };

  const handleSwipe = () => {
    setEasterEgg('');
    const heartContainer = document.createElement('div');
    heartContainer.className = 'heart-animation';
    document.body.appendChild(heartContainer);
    setTimeout(() => heartContainer.remove(), 2000);
  };

  const handleExit = () => {
    setShowExitAnimation(true);
    setTimeout(() => window.close(), 3000);
  };

  return (
    <div
      className={`main-app ${timeOfDay}`}
      onClick={handleTap}
      onTouchStart={handleSwipe}
    >
      {showExitAnimation ? (
        <div className="exit-animation">
          <p className="text-2xl">I'll miss you, Reihane.</p>
          <div className="cat-wave">😺</div>
        </div>
      ) : (
        <>
          <h1
            className="text-4xl font-bold animate-pulse"
            onMouseDown={handleLongPressStart}
            onMouseUp={handleLongPressEnd}
            onTouchStart={handleLongPressStart}
            onTouchEnd={handleLongPressEnd}
          >
            {greetings[timeOfDay]}
          </h1>
          <p className="text-lg">This is your cute and cozy app 💖</p>
          {easterEgg && <p className="easter-egg">{easterEgg}</p>}
          <button
            className="btn exit-btn"
            onClick={handleExit}
            onMouseDown={handleExitLongPressStart}
            onMouseUp={handleExitLongPressEnd}
            onTouchStart={handleExitLongPressStart}
            onTouchEnd={handleExitLongPressEnd}
          >
            Exit
          </button>
        </>
      )}
    </div>
  );
}