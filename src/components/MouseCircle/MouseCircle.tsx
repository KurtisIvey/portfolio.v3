import { useState, useEffect } from "react";
import "./MouseCircle.css";

const MouseCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  //const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  /*   const handleClick = () => {
    console.log("pulse");
    setIsPulsing(true);
    setTimeout(() => {
      setIsPulsing(false);
    }, 1000); 
  }; 
  
  <div
      className={`mouse-circle ${isPulsing ? "pulse" : ""}`}
      style={{ left: position.x, top: position.y }}
      //onClick={() => handleClick}
    ></div>
  
  */

  return (
    <div
      className={`mouse-circle`}
      style={{ left: position.x, top: position.y }}
      //onClick={() => handleClick}
    ></div>
  );
};

export default MouseCircle;
