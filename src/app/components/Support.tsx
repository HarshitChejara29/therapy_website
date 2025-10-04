"use client";

import React from "react";
import { HelpCircle, Settings } from "lucide-react";
import supportData from "../data/Support.json";

const iconMap: { [key: string]: React.ReactElement } = {
  HelpCircle: <HelpCircle className="w-6 h-6 text-black" />,
  Settings: <Settings className="w-6 h-6 text-black" />,
};

export default function Support() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-28 py-18">
      {/* Heading */}
      <p className="text-sm font-medium text-purple-400 mb-2">Support</p>
      <h2 className="text-3xl md:text-5xl font-semibold text-black mb-12">
        We&apos;re here to help
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {supportData.map((support) => (
          <div
            key={support.id}
            className="border border-[#CBBCD4] border-b-5 border-r-5 rounded-2xl bg-white p-6 flex flex-col gap-4 transition"
          >
            {/* Icon */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#CBBCD4] text-black">
              {iconMap[support.icon]}
            </div>

            {/* Content */}
            <div>
              <h3 className="font-semibold text-lg mb-2">{support.title}</h3>
              <div className="w-full border-b border-[#CBBCD4] mb-3"></div>
              <p className="text-sm text-black leading-relaxed">
                {support.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
