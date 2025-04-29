import React, { useState, useEffect } from 'react';

export default function MainApp() {
  const [timeOfDay, setTimeOfDay] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setTimeOfDay('morning');
    } else if (hour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  const greetings = {
    morning: "Good Morning Reihane!",
    afternoon: "Good Afternoon Reihane!",
    night: "Good Night Reihane!"
  };

  return (
    <div className={`main-app ${timeOfDay}`}>
      <h1>{greetings[timeOfDay]}</h1>
      <p>This is your cute and cozy app 💖</p>
    </div>
  );
}
