import React, { useState, useEffect } from 'react';

export default function MainApp() {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [easterEgg, setEasterEgg] = useState('');
  const [tapCount, setTapCount] = useState(0);
  const [showExitAnimation, setShowExitAnimation] = useState(false);
  const [farewellMessage, setFarewellMessage] = useState('');

  const farewellMessages = [
    "I'll miss you, Reihane. Come back soon! 💖",
    "Goodbye for now, Reihane. I'll be waiting! 😿",
    "Take care, Reihane. See you soon! 🌸",
    "Leaving so soon, Reihane? I'll miss your smile! 🥺",
    "Until we meet again, Reihane. Stay safe! 🌟",
  ];

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
    morning: 'Rise and Shine! ☀️',
    afternoon: 'Hello, Sunshine! 🌞',
    night: 'Sweet Dreams! 🌙',
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
      setEasterEgg('Even if you try to leave, I will always be there for you no matter what happens between us.');
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
    const randomMessage = farewellMessages[Math.floor(Math.random() * farewellMessages.length)];
    setFarewellMessage(randomMessage);
    setShowExitAnimation(true);
    setTimeout(() => window.close(), 3000);
  };

  const isDaytime = timeOfDay === 'morning' || timeOfDay === 'afternoon';

  return (
    <div
      className={`main-app ${timeOfDay}`}
      onClick={handleTap}
      onTouchStart={handleSwipe}
    >
      {/* المان‌های شناور فقط توی صفحه اصلی */}
      {!showExitAnimation && (
        <>
          <div className="particle flower-1"></div>
          <div className="particle heart-1"></div>
          <div className={`particle ${isDaytime ? 'sun-1' : 'star-1'}`}></div>
          <div className="particle leaf-1"></div>
          <div className="particle flower-2"></div>
          <div className="particle heart-2"></div>
          <div className={`particle ${isDaytime ? 'cloud-1' : 'star-2'}`}></div>
          <div className="particle leaf-2"></div>
          <div className="particle flower-3"></div>
          <div className="particle heart-3"></div>
          <div className={`particle ${isDaytime ? 'sun-2' : 'star-3'}`}></div>
          <div className="particle leaf-3"></div>
          <div className="particle flower-4"></div>
          <div className="particle heart-4"></div>
          <div className={`particle ${isDaytime ? 'cloud-2' : 'star-4'}`}></div>
          <div className="particle leaf-4"></div>
          <div className="particle flower-5"></div>
          <div className="particle heart-5"></div>
          <div className={`particle ${isDaytime ? 'sun-3' : 'star-5'}`}></div>
          <div className="particle leaf-5"></div>
          {isDaytime && (
            <>
              <div className="particle sun-4"></div>
              <div className="particle sun-5"></div>
              <div className="particle cloud-3"></div>
              <div className="particle cloud-4"></div>
              <div className="particle cloud-5"></div>
            </>
          )}
          {!isDaytime && (
            <>
              <div className="particle star-6"></div>
              <div className="particle star-7"></div>
              <div className="particle star-8"></div>
              <div className="particle star-9"></div>
              <div className="particle star-10"></div>
            </>
          )}
        </>
      )}

      {showExitAnimation ? (
        <div className="exit-animation">
          <p className="text-2xl content">{farewellMessage}</p>
          <div className="cat-wave">
            {timeOfDay === 'night' ? (
              <div className="night-cat">
                <div className="night-cat-head">
                  <div className="night-cat-sleep-hat">
                    <div className="hat-puff"></div>
                    <div className="night-cat-sleep-hat-base"></div>
                  </div>
                  <div className="night-cat-ear left"></div>
                  <div className="night-cat-ear right"></div>
                  <div className="night-cat-eyes"></div>
                  <div className="night-cat-stripes"></div>
                </div>
                <div className="night-cat-body">
                  <div className="night-cat-stripes-body"></div>
                  <div className="night-cat-tail"></div>
                  <div className="waving-paw"></div>
                </div>
              </div>
            ) : (
              <div className={`cat goodbye-cat ${timeOfDay}`}>
                <div className="cat-head">
                  <div className="ear left"></div>
                  <div className="ear right"></div>
                  <div className="eyes"></div>
                  <div className="stripes"></div>
                </div>
                <div className="cat-body">
                  <div className="stripes-body"></div>
                  <div className="tail"></div>
                  <div className="waving-paw"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <h2 className="app-title content">
            HeyRei <span className="heart-static"></span>
          </h2>
          <h1
            className="text-4xl font-bold greeting content"
            onMouseDown={handleLongPressStart}
            onMouseUp={handleLongPressEnd}
            onTouchStart={handleLongPressStart}
            onTouchEnd={handleLongPressEnd}
          >
            {greetings[timeOfDay]}
          </h1>
          <div className="cat-container">
            {timeOfDay === 'night' ? (
              <div className="night-cat">
                <div className="night-cat-head">
                  <div className="night-cat-sleep-hat">
                    <div className="hat-puff"></div>
                    <div className="night-cat-sleep-hat-base"></div>
                  </div>
                  <div className="night-cat-ear left"></div>
                  <div className="night-cat-ear right"></div>
                  <div className="night-cat-eyes"></div>
                  <div className="night-cat-stripes"></div>
                </div>
                <div className="night-cat-body">
                  <div className="night-cat-stripes-body"></div>
                  <div className="night-cat-tail"></div>
                </div>
              </div>
            ) : (
              <div className={`cat ${timeOfDay}`}>
                <div className="cat-head">
                  <div className="ear left"></div>
                  <div className="ear right"></div>
                  <div className="eyes"></div>
                  <div className="stripes"></div>
                </div>
                <div className="cat-body">
                  <div className="stripes-body"></div>
                  <div className="tail"></div>
                </div>
              </div>
            )}
          </div>
          {easterEgg && <p className="easter-egg content">{easterEgg}</p>}
          <button
            className="btn come-back-btn content"
            onClick={handleExit}
            onMouseDown={handleExitLongPressStart}
            onMouseUp={handleExitLongPressEnd}
            onTouchStart={handleExitLongPressStart}
            onTouchEnd={handleExitLongPressEnd}
          >
            Come back soon!
          </button>
        </>
      )}
    </div>
  );
}