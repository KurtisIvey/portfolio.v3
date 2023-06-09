import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LogoSvg from "./components/Logo/LogoSvg";
import Hero from "./sections/Home/Hero";
import MouseCircle from "./components/MouseCircle/MouseCircle";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";

function App() {
  const [loaded, SetLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      SetLoaded(true);
    }, 4000);
  });
  return (
    <main>
      <MouseCircle />
      <Navbar />
      <div className={loaded ? "hide-load-container" : "load-container"}>
        <LogoSvg />
      </div>
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
