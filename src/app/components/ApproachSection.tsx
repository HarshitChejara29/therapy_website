"use client";

import Image from "next/image";
import data from "../data/ApproachData.json";
import Link from "next/link";

interface ApproachData {
  sectionTag: string;
  title: string;
  points: string[];
  image: string;
}

const ApproachSection: React.FC = () => {
  const approachData = data as ApproachData;

  return (
    <section className="bg-[#fefaf3] py-16 px-6 lg:px-28 flex flex-col lg:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="flex-1 space-y-8">
        <p className="text-sm font-medium text-purple-400 mb-4">{approachData.sectionTag}</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-black">{approachData.title}</h2>
        <div className="lg:ml-18">
            <div className="space-y-4">
            {approachData.points.map((point, index) => (
                <div key={index} className="flex gap-4">
                <span className="font-semibold text-black">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-black leading-relaxed">{point}</p>
                </div>
            ))}
            </div>
            <Link href="/contact">
              <button className="cursor-pointer mt-6 bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
                Book A Consultation
              </button>
            </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1">
        <Image
          src={approachData.image}
          alt="Work philosophy"
          width={800}
          height={600}
          className="rounded-3xl object-cover"
        />
      </div>
    </section>
  );
};

export default ApproachSection;