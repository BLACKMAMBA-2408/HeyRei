import React, { useState } from 'react';
import NameForm from './components/NameForm';
import MainApp from './components/MainApp';
import AccessDenied from './components/AccessDenied';
import Confirmation from './components/Confirmation';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('nameForm'); // nameForm, confirmation, main, denied
  const [name, setName] = useState('');

  const handleNameSubmit = (submittedName) => {
    setName(submittedName);
    setCurrentPage('confirmation');
  };

  const handleConfirm = () => {
    const validFirstNames = ['reihane', 'reyhane', 'reihaneh', 'reyhaneh'];
    const validLastName = 'mortazavi';

    const [inputFirstName, inputLastName] = name.toLowerCase().split(' ');

    const isFirstNameValid = validFirstNames.includes(inputFirstName);
    const isLastNameValid = inputLastName === validLastName;

    if (isFirstNameValid && isLastNameValid) {
      setCurrentPage('main');
    } else {
      setCurrentPage('denied');
    }
  };

  const handleTryAgain = () => {
    setName('');
    setCurrentPage('nameForm');
  };

  const handleExit = () => {
    window.close();
  };

  return (
    <div className="App">
      {currentPage === 'nameForm' && (
        <NameForm onSubmit={handleNameSubmit} onExit={handleExit} />
      )}
      {currentPage === 'confirmation' && (
        <Confirmation
          name={name}
          onConfirm={handleConfirm}
          onTryAgain={handleTryAgain}
        />
      )}
      {currentPage === 'main' && <MainApp />}
      {currentPage === 'denied' && (
        <AccessDenied onExit={handleExit} />
      )}
    </div>
  );
}

export default App;