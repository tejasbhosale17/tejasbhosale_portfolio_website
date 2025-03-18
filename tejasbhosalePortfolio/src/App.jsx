import "./App.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="home">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
