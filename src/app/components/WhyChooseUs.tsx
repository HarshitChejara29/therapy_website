"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import data from "../data/whyChooseUsData.json";

const WhyChooseUs = () => {
  return (
    <section className="lg:py-28 py-18 bg-white">
      {/* ---------- Mobile View (Image Left, Text Right) ---------- */}
      <div className="lg:hidden px-6 ">
      <div className="flex items-center justify-center gap-6 py-8">
        <div className="w-[45%] flex-shrink-0">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={300}
            height={300}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="w-[55%] flex flex-col justify-center">
          <h4 className="text-sm font-medium text-purple-400 mb-2">
            {data.subheading}
          </h4>
          <h2 className="text-2xl font-semibold text-black leading-[120%]">
            {data.heading.replace(/<br\s*\/?>/g, " ")}
          </h2>
        </div>
      </div>
      {/* Keypoints */}
      <div className="grid lg:gap-12 gap-6 md:grid-cols-3">
        {data.points.map((point, idx) => (
          <div key={idx} className="flex flex-col items-start text-left">
            <CheckCircle className="w-6 h-6 text-purple-400 mb-3" />
            <h3 className="font-semibold text-lg mb-2 text-black">
              {point.title}
            </h3>
            <p className="text-black text-sm">{point.description}</p>
          </div>
        ))}
      </div>
      </div>

      {/* ---------- Web View (Original Layout) ---------- */}
      <div className="hidden lg:grid container px-6 lg:px-28 lg:grid-cols-3 items-center lg:gap-0 gap-6">
        {/* Left Side (Image, 1/3) */}
        <div className="lg:col-span-1 w-full flex justify-start">
          <div className="lg:w-[500px] lg:h-[450px] w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side (Content, 2/3) */}
        <div className="col-span-2 lg:ml-16">
          <h4 className="text-sm font-medium text-purple-400 mb-2">
            {data.subheading}
          </h4>
          <h2 className="max-w-[70%] text-3xl md:text-5xl font-semibold text-black leading-[120%] lg:mb-12 mb-6">
            {data.heading.split(" <br /> ").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h2>

          {/* Keypoints */}
          <div className="grid lg:gap-12 gap-6 md:grid-cols-3">
            {data.points.map((point, idx) => (
              <div key={idx} className="flex flex-col items-start text-left">
                <CheckCircle className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-black">
                  {point.title}
                </h3>
                <p className="text-black text-sm">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
