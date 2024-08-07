import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-MZBZQDJ5'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to fffload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
