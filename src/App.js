import "./index.css";
import NavBars from "./components/NavBars";
import Hero from "./components/Hero";
import OurServices from "./components/OurServices";
import OurPortfolio from "./components/OurPortfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBars />
      <Hero />
      <OurServices />
      <OurPortfolio />
      <Footer />
    </div>
  );
}

export default App;
