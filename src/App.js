import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Body/Navbar";
import Footer from "./Components/Body/Footer";
import Home from "./Components/Main/Home";

function App() {
  return (
    <div>
      <main className="main" id="top">
        <Router>
          <Navbar />
          <Routes>
            
            <Route path="/" element={<Home />} />

          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
