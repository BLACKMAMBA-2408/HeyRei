import React from 'react';

export default function Confirmation({ name, onConfirm, onTryAgain }) {
  return (
    <div className="form">
      <p className="text-lg mb-2 text-gray-700 text-center">
        Are you sure you are
      </p>
      <p className="confirm-name">{name}</p>
      <p className="text-lg mb-4 text-gray-700 text-center">?</p>
      <div className="button-group">
        <button onClick={onConfirm} className="btn proceed-btn">
          Confirm <span className="btn-icon">✅</span>
        </button>
        <button onClick={onTryAgain} className="btn try-again-btn">
          Try Again <span className="btn-icon">🔄</span>
        </button>
      </div>
    </div>
  );
}