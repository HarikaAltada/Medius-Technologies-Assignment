import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/Home/Home";
import Mortgage from "./components/Mortgage/Mortgage";
import Start from "./components/Start/Start";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/mortgage" element={<Mortgage />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
};

export default App;

