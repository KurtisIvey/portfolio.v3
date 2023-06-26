import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LogoSvg from "./components/Logo/LogoSvg";
import Hero from "./sections/Home/Hero";
import MouseCircle from "./components/MouseCircle/MouseCircle";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import useWindowWidth from "./hooks/useWindowWidth";
import Solutions from "./sections/Solutions/Solutions";
import Footer from "./components/Footer/Footer";

function App() {
  const windowWidth = useWindowWidth();
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 4000);
  }, []);
  return (
    <main>
      {windowWidth > 1000 && <MouseCircle />}
      <Navbar />
      <div className={loaded ? "hide-load-container" : "load-container"}>
        <LogoSvg />
      </div>
      <Hero />
      <Solutions />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
