"use client";
import Link from "next/link";
import Image from "next/image";
import strategyData from "../data/strategyData.json";

const Strategy = () => {
  return (
    <section className="w-full bg-white lg:py-28 py-18 px-6 md:px-12 lg:px-28">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-8">

        {/* Left Content */}
        <div className="flex flex-col justify-between">
          {/* Top Text */}
          <div>
            <p className="text-sm font-medium text-purple-400 mb-2">{strategyData.sectionTitle}</p>
            <h2 className="lg:max-w-[70%] font-montserrat text-3xl md:text-5xl font-semibold text-black leading-[120%] mb-6">
              {strategyData.heading.split(" <br />").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <div className="lg:ml-18 space-y-4">
              {strategyData.paragraphs.map((para, idx) => (
                <p key={idx} className="font-poppins text-black leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Button at End */}
          <div className="lg:ml-18 mt-6">
            <Link href={strategyData.buttonLink}>
              <button className="bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
                {strategyData.buttonText}
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full flex justify-end">
          <div className="lg:w-[550px] lg:h-[550px] w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={strategyData.image}
              alt={strategyData.imageAlt}
              width={550}
              height={550}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
