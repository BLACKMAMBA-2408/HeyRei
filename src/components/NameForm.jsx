// src/components/NameForm.jsx
import React, { useState } from 'react';
import MainApp from './MainApp';

export default function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [accessGranted, setAccessGranted] = useState(null); // null, true, false

  const handleConfirm = () => {
    if (firstName === 'Reihane' && lastName === 'Mortazavi') {
      setAccessGranted(true);
      setConfirmed(true);
    } else {
      setAccessGranted(false);
    }
  };

  if (confirmed && accessGranted) return <MainApp />;

  if (accessGranted === false) {
    return (
      <div className="denied">
        <p>
          If you are the person you claim to be, I'm not meant for you. Stop messing around with
          other people's stuff. Get a job or something. You have a life.
        </p>
        <button onClick={() => window.close()}>Exit</button>
      </div>
    );
  }

  return (
    <div className="form">
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <div>
        <button onClick={handleConfirm}>Proceed</button>
        <button onClick={() => { setFirstName(''); setLastName(''); }}>Try Again</button>
      </div>
    </div>
  );
}
