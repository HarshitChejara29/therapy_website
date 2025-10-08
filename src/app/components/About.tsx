"use client";
import Image from "next/image";
import Link from "next/link";
import aboutData from "../data/aboutData.json";

const About = () => {
  return (
    <section className="bg-[#FFFCF5] lg:py-26 py-18 px-6 md:px-12 lg:px-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-0 gap-8">

        {/* Left Image */}
        <div className="flex justify-start">
          <div className="lg:w-[600px] lg:h-[570px] w-[400px] h-[400px] rounded-2xl overflow-hidden">
            <Image
              src={aboutData.image}
              alt={aboutData.imageAlt}
              width={600}
              height={570}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full">
          <p className="text-sm font-medium text-purple-400 mb-2">{aboutData.sectionTitle}</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-black leading-[120%] mb-6">
            {aboutData.heading.map((line, idx) => (
              <span key={idx}>
                {line}
                <br/>
              </span>
            ))}
          </h2>
          <div className="lg:ml-24">
            <p className="text-black leading-relaxed w-full">{aboutData.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 lg:gap-6 gap-4 py-12">
              {aboutData.stats.map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-5xl font-semibold text-black">{stat.value}</h3>
                  <p className="text-sm text-black">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link href={aboutData.buttonLink}>
              <button className="cursor-pointer bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
                {aboutData.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
