import React, { useState } from 'react';
import MainApp from './MainApp';

export default function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [accessGranted, setAccessGranted] = useState(null);

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
        <p className="text-red-500 font-semibold">
          If you are the person you claim to be, I'm not meant for you. Stop messing around with
          other people's stuff. Get a job or something. You have a life.
        </p>
        <button className="exit-btn" onClick={() => window.close()}>
          Exit
        </button>
      </div>
    );
  }

  return (
    <div className="form bg-pink-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-pink-600">Welcome to HeyRei</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="input-field"
      />
      <div className="flex space-x-4">
        <button className="btn proceed-btn" onClick={handleConfirm}>
          Proceed
        </button>
        <button
          className="btn try-again-btn"
          onClick={() => {
            setFirstName('');
            setLastName('');
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}