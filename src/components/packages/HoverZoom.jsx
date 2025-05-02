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

  // open image in full screen
  const [isOpen, setIsOpen] = useState(false);

  const openImage = () => setIsOpen(true);
  const closeImage = () => setIsOpen(false);

  // zoom image in full screen
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <>
      {/* Image with hover zoom effect */}
      <div
        className={`relative overflow-hidden ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={openImage}
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
      {/* onClick Action */}
      <>


        {isOpen && (
          <div className="w-full h-full">
            <div
              className="fixed top-0 inset-0 bg-black/90 h-full z-30"
              onClick={closeImage}
            >
            </div>

            <img
              src={src}
              alt=''
              className={`fixed top-20 max-w-screen max-h-[90%] object-contain transition-transform duration-300 z-40 ${isZoomed ? "z-50 scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                }`}
              onClick={toggleZoom}
            />
          </div>
        )}
      </>
    </>
  );
}
