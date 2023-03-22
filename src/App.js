import "./index.css";
import NavBars from "./components/NavBars";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import OurPortfolio from "./components/OurPortfolio";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <NavBars />
      <Hero />
      <OurServices />
      <OurPortfolio />
      <ContactUs />
      <Testimonial />
      <Footer />

      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
