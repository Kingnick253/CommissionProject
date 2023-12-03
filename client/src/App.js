import React from 'react';
import './App.css';
import Home from "./pages/Home.js";
import Navbar from './components/Navbar.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
       <Home />
    </div>
  );
}

export default App;
