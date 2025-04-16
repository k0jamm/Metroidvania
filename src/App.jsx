import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./NavBar";
import News from "./News";
import Home from "./Home";
import About from "./About";
import Credits from "./Credits";


const App = () => {
  
 
  return (
    <>
    <div className="app">
    <div className="background-wrapper">
    
    <main>
    <Router>
      <NavBar />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/Credits" element={<Credits />} />
        </Routes>
      </div>
    </Router>

    </main>

    <footer></footer>
    </div>
    </div>
    </>
  );
};

export default App
