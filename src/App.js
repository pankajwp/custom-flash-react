import React from 'react';
import './App.css';
import Bus from './Utils/Bus'
import Flash from './Flash/index.js';

import Home from './home';

function App() {

  window.flash = (message, type="success") => Bus.emit('flash', ({message, type}));  
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Flash />       
      </header>
    </div>
  );
}

export default App;
