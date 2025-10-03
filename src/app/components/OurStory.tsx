"use client";

import data from "../data/ourStoryData.json";

const OurStory = () => {
  return (
    <section className="bg-[#FFFCF5] lg:py-20 py-14">
      <div className="container px-6 lg:px-28">
        <div className="grid lg:grid-cols-2 gap-18 items-start">

          {/* Left Section */}
          <div>
            <h4 className="text-sm font-medium text-purple-400 mb-2">{data.subheading}</h4>
            <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">{data.heading}</h2>
            <p className="text-black leading-relaxed ml-18">{data.intro}</p>
          </div>

          {/* Right Section (Timeline) */}
          <div className="space-y-8">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4">
                <span className="text-purple-400 text-sm w-28 shrink-0 mt-1">{item.year}</span>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-black text-sm md:text-base mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
