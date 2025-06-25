import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./NavBar";
import News from "./News";
import Home from "./Home";
import Midia from "./Midia";
import Wiki from "./Wiki";
import About from "./About";
import Credits from "./Credits";


const App = () => {
  
  return (
    <>
    <div className="app">
      <div className="background-wrapper">
        <div className="pd"></div>
          <img src="/pf2.png" alt="My Logo" className="logo" style={{ height: '50px' }} />
          <div className="pd"></div>
          <main>
            <Router>
              <NavBar />
              <div className="page-content">
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/News" element={<News />} />
              <Route path="/Midia" element={<Midia />} />
              <Route path="/Wiki" element={<Wiki />} />
              <Route path="/About" element={<About />} />
              <Route path="/Credits" element={<Credits />} />
            </Routes>
          </div>
            </Router>
          </main>
    </div>
    </div>
    </>
  );
};

export default App
