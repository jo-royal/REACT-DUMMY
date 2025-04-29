import { useState } from "react";

export default function HoverZoom({ src, zoomScale = 2, className = "" }) {
  const [backgroundPosition, setBackgroundPosition] = useState("center");
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setBackgroundPosition(`${x}% ${y}%`);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setBackgroundPosition("center");
    setIsHovering(false);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: isHovering ? `${zoomScale * 100}%` : "cover",
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
        transition: "background-size 0.3s ease, background-position 0.1s ease",
      }}
    >
      {/* Keeps the space properly */}
      <img src={src} alt="" className="w-full h-auto opacity-0" />
    </div>
  );
}
