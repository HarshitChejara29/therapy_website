"use client";

import { HeartHandshake, Users, User, Group, Baby } from "lucide-react";
import Link from "next/link";
import servicesData from "../data/servicesData.json";
import React from "react";

const iconMap: Record<string, React.ReactElement> = {
  User: <User size={28} />,
  HeartHandshake: <HeartHandshake size={28} />,
  Users: <Users size={28} />,
  Group: <Group size={28} />,
  Baby: <Baby size={28} />
};

const Services = () => {
  return (
    <section className="w-full bg-white lg:py-28 py-18 px-6 md:px-12 lg:px-28">
      <div className="mx-auto">
        <p className="text-sm font-medium text-purple-400 mb-2">Services</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-black lg:mb-12 mb-6">
          Our Therapy Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-[#CBBCD4] border-b-5 border-r-5 rounded-2xl p-6 flex flex-col items-start transition hover:shadow-lg h-full"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#CBBCD4] text-black mb-4">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>

              <div className="w-full border-b border-[#CBBCD4] mb-3"></div>

              <p className="text-sm text-black mb-6">{service.description}</p>

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
      </div>
    </section>
  );
};

export default Services;
