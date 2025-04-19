import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import Home from "./pages/Home";
import About from "./components/About/About";
import Credits from "./components/Credits/Credits";
import logo from './assets/pf2.png';

const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="bg-[url('./assets/metroidBack1.png')] bg-cover bg-center bg-no-repeat justify-center items-start h-screen w-screen m-0 p-0 overflow-x-hidden">
          <div className="flex justify-center p-10">
            <img src={logo} alt="My Logo" className="logo" style={{ height: '50px' }} />
          </div>
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
    </div>
    </div>
    </>
  );
};

export default App
