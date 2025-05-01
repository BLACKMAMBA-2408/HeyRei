import React from 'react';

export default function AccessDenied({ onExit }) {
  return (
    <div className="form">
      <p className="error-message">Access Denied</p>
      <p className="error-details">
        If you are the person you claim to be, I'm not meant for you. Stop messing around with other people's stuff. Get a job or something. You have a life.
      </p>
      <div className="button-group">
        <button onClick={onExit} className="btn come-back-btn">
          Exit <span className="btn-icon">🚪</span>
        </button>
      </div>
    </div>
  );
}