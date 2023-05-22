import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LogoSvg from "./components/Logo/LogoSvg";
import Hero from "./sections/Home/Hero";

function App() {
  const [loaded, SetLoaded] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      SetLoaded(true);
    }, 4000);
  });
  return (
    <main>
      <div className={loaded ? "hide-load-container" : "load-container"}>
        <LogoSvg />
      </div>
      <Navbar />
      <Hero />
      <Hero />
    </main>
  );
}

export default App;
