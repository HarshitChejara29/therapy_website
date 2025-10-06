"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import faqsData from "../data/faqsData.json";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white lg:px-28 px-6 py-16">
      <h3 className="text-sm font-medium text-purple-400 uppercase mb-2">FAQ&apos;s</h3>
      <h2 className="text-3xl md:text-5xl font-semibold text-black mb-10">Clear your doubts</h2>

      <div className="max-w-6xl mx-auto space-y-5 mb-10">
        {faqsData.map((faq, index) => (
          <div key={index} className="border-b-2 border-[#CBBCD4]">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="font-semibold text-xl mb-4 text-black">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5 text-black" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-black" />
              )}
            </button>
            {openIndex === index && faq.answer && (
              <p className="text-black pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
