import Image from "next/image";
import Link from "next/link";
import heroData from "../data/heroData.json";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src={heroData.image}
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-0">
        <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-7xl font-extrabold text-white leading-tight sm:leading-snug md:leading-tight">
          {heroData.title}
        </h1>
        <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
          {heroData.subtitle}
        </p>
        <Link
          href={heroData.buttonLink}
          className="mt-6 inline-block bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-[#0B0B0B] hover:text-white transition text-sm sm:text-base"
        >
          {heroData.buttonText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
