import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import githubLogo from "../assets/github.png";
import selfie from "../assets/selfie.jpg";
import igCard from "../assets/igCard.jpg";

const images = [
    igCard,
    githubLogo,
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
      <div className="relative flex justify-center items-center w-full mt-24">
        {/* Glow effect */}
        <div className="absolute w-[500px] h-[500px] bg-purple-400 blur-[120px] opacity-40 rounded-full"></div>

        {/* Slider container */}
        <div className="relative w-full max-w-3xl aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
          <div
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Banner;
