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

  return (
    <div
      className={`mouse-circle`}
      style={{ left: position.x, top: position.y }}
    ></div>
  );
};

export default MouseCircle;
