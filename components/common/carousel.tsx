'use client'

import Image from "next/image";
import {useState, useEffect, JSX} from "react";
import { CarouselItems } from "@/utils/dummyData/carouselData";


/**
 * Carousel
 *
 * A rotating showcase of features/images that auto-advances every 5 seconds
 * and allows manual navigation via indicator dots.
 *
 * @returns {JSX.Element}
 */
export default function Carousel(): JSX.Element{
    // Index of the currently displayed feature
  const [currentFeature, setCurrentFeature] = useState(0);

   // Auto-loop every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % CarouselItems.length);
    }, 5000);

      // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center self-stretch p-8 relative overflow-hidden flex-1 bg-gradient-to-br from-[#def3ee] via-[#0c2722] to-[#a0e870] dark:from-[#ffc05c] dark:via-[#def3ee] dark:to-[#fff6e7]">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, white 3px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-lg">

          {/* Feature Content */}
          <div className="max-w-md mx-auto">
            <Image
              src={CarouselItems[currentFeature]!.image}
              alt={CarouselItems[currentFeature]!.title}
              width={600}
              height={100}
              className="rounded-2xl shadow-lg object-cover"
              />
          </div>

          {/* Feature Description */}
          <div>
            <p className="paragraph-regular leading-relaxed text-[#fafafa] dark:text-primary-foreground">
              {CarouselItems[currentFeature]!.description}
            </p>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2">
            {CarouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeature(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentFeature ? "bg-primary w-8" : "bg-gray-400 hover:bg-gray-150"
                }`}
              />
            ))}
          </div>
      </div>
    </div>
    
  );
}
