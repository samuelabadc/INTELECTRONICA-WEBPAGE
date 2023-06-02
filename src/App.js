import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";

// import "./Fonts/FUTURA/Futura_Bold_Italic_font"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
