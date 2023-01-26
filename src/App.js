import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Body/Navbar";
import Footer from "./Components/Body/Footer";
import Home from "./Components/Main/Home";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <main className="main" id="top">
        <Router>
          <Navbar />
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />

          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
