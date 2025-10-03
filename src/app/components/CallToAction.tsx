"use client";

import Image from "next/image";
import Link from "next/link";
import callToActionData from "../data/callToActionData.json";

export default function CallToAction() {
  return (
    <section className="bg-[#FFFCF5] lg:py-28 py-18 lg:px-28 px-6">
      <div className="grid md:grid-cols-2 items-center lg:gap-0 gap-6">

        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-purple-400 mb-2">
            {callToActionData.sectionTitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-[120%]">
            {callToActionData.heading.map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <div className="lg:ml-24">
            <p className="mt-5 text-black leading-relaxed">
              {callToActionData.description}
            </p>
            <Link href={callToActionData.buttonLink}>
              <button className="mt-12 bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
                {callToActionData.buttonText}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-end">
          <div className="lg:w-[600px] lg:h-[400px] w-[385px] h-[300px] rounded-2xl overflow-hidden">
            <Image
              src={callToActionData.image}
              alt={callToActionData.imageAlt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
