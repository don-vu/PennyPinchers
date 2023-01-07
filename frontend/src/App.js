import "./App.css";
import Home from "./pages/home/home";
import Page1 from "./pages/page1/page1";
import Page2 from "./pages/page2/page2";
import Page3 from "./pages/page3/page3";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/page2">Sign Up</Link>
          <Link to="/page3">Calculator</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
