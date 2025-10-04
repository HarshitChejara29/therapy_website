"use client";
import Link from "next/link";
import legalData from "../data/LegalPolicies.json";

export default function LegalPolicies() {
  return (
    <div className="bg-white px-4 md:px-12 lg:px-28 bg-[#fdfbf9]">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 py-14">
        <Link href="/">Home</Link> <span className="text-black">› Legal & Policies</span>
      </p>
      <section>
      {/* Privacy Policy */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-black">Privacy Policy</h2>
        <div className="space-y-6">
          {legalData.privacyPolicy.map((policy, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl mb-2 text-black">{policy.title}</h3>
              <p className="text-black leading-relaxed">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Terms & Conditions */}
      <div>
      <div className="lg:mb-28 mb-18">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-black">Terms & Conditions</h2>
        <div className="space-y-6">
          {legalData.termsConditions.map((term, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl mb-2 text-black">{term.title}</h3>
              <p className="text-black leading-relaxed">{term.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      </section>
    </div>
  );
}
