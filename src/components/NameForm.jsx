import React, { useState } from 'react';

export default function NameForm({ onSubmit, onExit }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!firstName || !lastName) {
      setError('Please enter both first and last names.');
      return;
    }
    const fullName = `${firstName} ${lastName}`;
    onSubmit(fullName);
  };

  return (
    <div className="form">
      <p className="welcome-message">
        Hello there. I'm HeyRei. I was designed by my developer for someone special. Gimmie your first and last name so I can lead you to my world.
      </p>
      <h2>Please Enter Your Name</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
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
      <div>
        <button onClick={handleSubmit} className="btn proceed-btn">
          Proceed
        </button>
        <button onClick={onExit} className="btn come-back-btn">
          Exit
        </button>
      </div>
    </div>
  );
}