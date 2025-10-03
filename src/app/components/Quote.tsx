"use client";

import quoteData from "../data/quoteData.json";

export default function QuoteSection() {
  return (
    <section className={`lg:px-28 px-6 py-12 text-center`} style={{ backgroundColor: quoteData.backgroundColor }}>
      <div className="mx-auto mt-12">
        <span className="text-[10rem] align-bottom leading-[0rem]" style={{ color: quoteData.textColor }}>
          {quoteData.symbol}
        </span>
        <p className="text-xl md:text-[2.8rem] font-semibold mt-2" style={{ color: quoteData.textColor }}>
          {quoteData.quote}
        </p>
        <p className="mt-6 text-2xl font-medium" style={{ color: quoteData.textColor }}>
          – {quoteData.author}
        </p>
      </div>
    </section>
  );
}
