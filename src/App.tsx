import { useEffect, useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import LogoSvg from "./assets/LogoSvg";

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
    </main>
  );
}

export default App;
