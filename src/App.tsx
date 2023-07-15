import React from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfo from './components/ShowInfo';
import Calculator from './components/Calculator';
import HospitalizationForm from './components/Tienvien';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div >
        <Calculator></Calculator>
        <ShowInfo></ShowInfo>
      </div>
      <HospitalizationForm></HospitalizationForm>
    </div>
  );
}

export default App;
