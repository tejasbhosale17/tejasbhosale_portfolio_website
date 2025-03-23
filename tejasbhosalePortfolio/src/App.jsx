import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <>
      <SmoothScroll>
        <Navbar />
        <LandingPage />
        <Footer />
      </SmoothScroll>
    </>
  );
}

export default App;
