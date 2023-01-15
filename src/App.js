import "./App.css";
import Navbar from "./Components/Homepage/Navbar";
import Intro from "./Components/Homepage/Intro";
import Testimonials from "./Components/Homepage/Testimonials";
import Partners from "./Components/Homepage/Partners";
import Quoets from "./Components/Homepage/Quoets";
import FAQs from "./Components/Homepage/FAQs";
import Footer from "./Components/Homepage/Footer";
import VideoSection from "./Components/Homepage/VideoSection";

function App() {
  return (
    <div>
      <main className="main" id="top">
        <Navbar />
        <VideoSection />
        <Intro />
        {/* <Testimonials /> */}
        <Partners />
        <Quoets />
        <FAQs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
