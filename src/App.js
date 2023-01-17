import "./App.css";
import Navbar from "./Components/Homepage/Navbar";
import Intro from "./Components/Homepage/Intro";
import Testimonials from "./Components/Homepage/Testimonials";
import Partners from "./Components/Homepage/Partners";
import Quoets from "./Components/Homepage/Quoets";
import FAQs from "./Components/Homepage/FAQs";
import Footer from "./Components/Homepage/Footer";
import VideoSection from "./Components/Homepage/VideoSection";
import ContactUs from "./Components/Homepage/ContactUs";
import FinancialPlan from "./Components/Homepage/FinancialPlan";
import Pricing from "./Components/Homepage/Pricing";
import Projects from "./Components/Homepage/Projects";

function App() {
  return (
    <div>
      <main className="main" id="top">
        <Navbar />
        <VideoSection />
        <Intro />
        <Partners />
        <Projects />
        <FinancialPlan />
        {/* <Testimonials /> */}
        <Pricing />
        {/* <Quoets /> */}
        <FAQs />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
