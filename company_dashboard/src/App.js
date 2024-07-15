import React from 'react';
import Viewpane from './components/Viewpane';
import Navigationpane from './components/Navigationpane';
import Footpane from './components/Footpane';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigationpane />
      <div className="main-content">
        <Viewpane />
      </div>
      <Footpane />
    </div>
  );
}

export default App;
