"use client";

import Image from "next/image";
import Link from "next/link";
import services from "../data/therapyServicesData.json";
import getInTouchData from "../data/GetInTouch.json";

export default function TherapyServices() {
  return (
    <>
      <section className="bg-white md:px-12 lg:px-28 px-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 py-14">
          <Link href="/">Home</Link> <span className="text-black">› Services</span>
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold mb-10">Therapy Services</h2>

        {/* Cards Grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center">
          {services.map((service, idx) => (
            <div key={idx} className="transition flex flex-col h-full">
              <div className="lg:w-[415px] lg:h-[415px] w-[384px] h-[300px] justify-center rounded-2xl overflow-hidden mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={415}
                  height={415}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-black text-sm mb-5">{service.description}</p>

              <div className="mt-auto">
                <Link href="/service">
                  <button className="bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
                    Know More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Section */}
      <div className="mt-20 bg-[#FFFCF5] py-18 px-6 md:px-28 flex flex-col md:flex-row items-center justify-between rounded-lg">
        <div className="mb-6 md:mb-0">
          <p className="text-sm font-medium text-purple-400 mb-4">
            {getInTouchData.headingSmall}
          </p>
          <h3
            className="max-w-xl text-3xl md:text-5xl font-semibold text-black lg:leading-[3.7rem]"
            dangerouslySetInnerHTML={{ __html: getInTouchData.headingLarge }}
          />
        </div>
        <div className="text-start md:text-right">
          <p className="text-black mb-4 max-w-lg">{getInTouchData.description}</p>
          <Link href={getInTouchData.buttonLink}>
            <button className="mt-2 bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-4 py-2 rounded-full transition">
              {getInTouchData.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
