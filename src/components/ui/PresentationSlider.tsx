import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import slide1 from "@/assets/slides/slide-1.jpg";
import slide2 from "@/assets/slides/slide-2.jpg";
import slide3 from "@/assets/slides/slide-3.jpg";
import slide4 from "@/assets/slides/slide-4.jpg";

const slides = [slide1, slide2, slide3, slide4];

interface PresentationSliderProps {
  className?: string;
  interval?: number;
}

export const PresentationSlider = ({
  className = "",
  interval = 4000,
}: PresentationSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}>
      {/* Slide container */}
      <div className="relative aspect-[16/9] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt={`Docura presentation slide ${currentSlide + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            }}
          />
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};
