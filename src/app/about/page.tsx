"use client";

import Image from "next/image";
import Link from "next/link";
import aboutusData from "../data/aboutusData.json";
import WhyChooseUs from "../components/WhyChooseUs";
import OurStory from "../components/OurStory";
import Certifications from "../components/Certifications";

export default function About() {
  return (
    <>
    <p className="text-sm text-gray-400 py-14 lg:px-28 px-6">
      <Link href="/">Home</Link> <span className="text-black">› About Us</span>
    </p>
    {/* Intro Section */}
      <section className="px-6 md:px-28 mb-28 bg-white">
        <div className="grid md:grid-cols-2 items-start lg:gap-0 gap-6">

          {/* Left Section: Text */}
          <div>
            <h1 className="lg:max-w-[70%] max-w-[90%] text-4xl md:text-5xl font-semibold text-black leading-[120%] mb-4">
              {aboutusData.intro.heading.split("  ").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>
            <div className="lg:ml-18">
              {aboutusData.intro.paragraphs.map((para, idx) => (
                <p key={idx} className="text-black leading-relaxed mb-5">{para}</p>
              ))}

              {/* Stats */}
              <ul className="space-y-1 mb-6">
                {aboutusData.intro.stats.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-black">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CBBCD4] text-black font-semibold mb-2">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link href={aboutusData.intro.buttonLink}>
                <button className="bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
                  {aboutusData.intro.buttonText}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="flex justify-end">
            <div className="lg:w-[500px] lg:h-[500px] w-[385px] h-[385px] rounded-2xl overflow-hidden">
              <Image
                src={aboutusData.intro.image}
                alt={aboutusData.intro.imageAlt}
                width={550}
                height={550}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="bg-[#CBBCD4]">
        {/* Heading */}
        <div className="text-center py-12 px-4">
          <h2 className="text-3xl md:text-5xl font-semibold text-white">
            {aboutusData.visionMission.heading}
          </h2>
        </div>

        {/* Content */}
        <div className="bg-[#FFFCF5] py-14 px-6 md:px-28 text-black space-y-8 text-base md:text-lg leading-relaxed">
          <p>{aboutusData.visionMission.vision}</p>
          <p>{aboutusData.visionMission.mission}</p>
        </div>
      </section>

    <WhyChooseUs />
    <OurStory />
    <Certifications />
    </>
  );
}