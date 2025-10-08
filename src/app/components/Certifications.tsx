"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import certifications from "../data/certificationsData.json";

export default function Certifications() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  // Determine number of cards to show based on screen size
  const cardsToShow = isMobile ? 1 : 4;

  return (
    <section className="bg-white py-16 lg:mb-10">
      <div className="container px-6 md:px-28 relative">
        <h4 className="text-sm font-medium text-purple-400 mb-2">
          Certifications
        </h4>
        <h2 className="text-3xl md:text-5xl font-semibold text-black lg:mb-12 mb-6">
          Official Recognitions
        </h2>

        <div className="max-w-8xl mx-auto relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-0 z-10 text-white hover:text-black bg-gray-900 hover:bg-gray-300 p-3 rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className={`grid lg:grid-cols-4 md:grid-cols-${cardsToShow} gap-9 px-12`}>
            {Array.from({ length: cardsToShow }).map((_, i) => {
              const cert = certifications[(index + i) % certifications.length];
              return (
                <div
                  key={cert.id}
                  className="max-w-[280px] border border-[#CBBCD4] border-b-5 border-r-5 bg-white rounded-2xl flex-shrink-0 flex flex-col"
                >
                  <div className="p-5 flex flex-col h-full items-center justify-center">
                    <div className="h-[300px] w-[200px] flex items-center justify-center">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        width={200}
                        height={200}
                        className="rounded-2xl object-contain"
                      />
                    </div>
                    <div className="mb-auto">
                      <h3 className="font-semibold text-lg mt-4">{cert.title}</h3>
                      <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                      <div className="w-full border-b border-[#CBBCD4] mb-3"></div>
                      <p className="text-sm mt-2 text-black">{cert.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-0 z-10 text-white hover:text-black bg-gray-900 hover:bg-gray-300 p-3 rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
