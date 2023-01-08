import "./App.css";
import Home from "./pages/home/home";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import Page3 from "./pages/page3/page3";
import Page4 from "./pages/page4/page4";
import { Signup } from "./Signup";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [currentForm, setCurrentFrom] = useState('login');
  return (
    <div className="container">
      {
        currentForm === "login" ? <login /> : <Signup />
      }
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/page3">Calculator</Link>
          <Link to="/dashboard">Page 4</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Page1 />} />
          <Route path="/signup" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/dashboard" element={<Page4 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
