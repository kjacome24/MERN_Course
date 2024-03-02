import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={25} hairColor="Black"/>
      <PersonCard firstName="John" latName="Smith" age={45} hairColor="Blonde"/>
      <PersonCard firstName="ELvis" lastName="Presley" age={65} hairColor="Brown" />
      <PersonCard firstName="Luis" lastName="Guerrero" age={25} hairColor="Black"/>
    </div>
  );
}

export default App;
