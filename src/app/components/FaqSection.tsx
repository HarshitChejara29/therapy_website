"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import faqsData from "../data/faqsData.json"; // adjust path if needed

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="lg:px-28 px-6 lg:py-24 py-16">
      <h3 className="text-sm font-medium text-purple-400 uppercase mb-2">FAQ&apos;s</h3>
      <h2 className="text-3xl md:text-5xl font-semibold text-black mb-10">Clear your doubts</h2>

      <div className="max-w-6xl mx-auto space-y-5">
        {faqsData.map((faq, index) => (
          <div key={index} className="border-b-2 border-[#CBBCD4]">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="font-semibold text-xl mb-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
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
