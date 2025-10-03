"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import testimonialsData from "../data/testimonialsData.json";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const displayedTestimonials = isMobile
    ? [testimonialsData[index]] // only 1 card on mobile
    : [testimonialsData[index], testimonialsData[(index + 1) % testimonialsData.length]]; // 2 cards on desktop

  return (
    <section className="lg:py-28 py-18 lg:px-28 px-6 bg-white">
      <p className="text-sm font-medium text-purple-400 mb-2">Testimonials</p>
      <h2 className="text-3xl md:text-5xl font-semibold text-black mb-10">Happy Clients</h2>

      <div className="max-w-8xl mx-auto relative flex items-center justify-center">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="text-white hover:text-black absolute left-0 z-10 bg-gray-900 hover:bg-gray-300 p-3 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-9 mx-6 md:mx-18`}>
          {displayedTestimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-[#FFFCF5] rounded-xl border border-[#FCDE97] border-b-5 border-r-5 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-black">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
              <p className="mt-4 text-black">{testimonial.text}</p>
              <div className="flex mt-3 text-[#FFFCF5]">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-yellow-500" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="text-white hover:text-black absolute right-0 z-10 bg-gray-900 hover:bg-gray-300 p-3 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
