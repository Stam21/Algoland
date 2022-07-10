import React from 'react';
import NavBar from './components/NavMenu/NavMenu.js';
import Home from './views/Home.js';
import About from './views/About.js'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path='/About' exact element={<About/>} />
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;