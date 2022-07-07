// import React from "react";
// import {Route , BrowserRouter as Router,  Routes} from "react-router-dom";
// import Home from "./views/Home";
// import About from "./views/About";


// function App() {
//   return (
//     <Router>
//       <div className ="container">
//         <Routes>
//           <Route path='/about' element = {<About/>} />
//           <Route path='/' element = {<Home/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }
// const root =document.getElementById("root");
// root.render(<App />);
// export default App;

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