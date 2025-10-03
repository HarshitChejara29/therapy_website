"use client";
import Link from "next/link";
import legalData from "../data/LegalPolicies.json";

export default function LegalPolicies() {
  return (
    <div className="px-4 md:px-12 lg:px-28 bg-[#fdfbf9] lg:mb-28 mb-18">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 py-14">
        <Link href="/">Home</Link> <span className="text-black">› Legal & Policies</span>
      </p>

      {/* Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Privacy Policy</h2>
        <div className="space-y-6">
          {legalData.privacyPolicy.map((policy, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl mb-2">{policy.title}</h3>
              <p className="text-black leading-relaxed">{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Terms & Conditions */}
      <section>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Terms & Conditions</h2>
        <div className="space-y-6">
          {legalData.termsConditions.map((term, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-xl mb-2">{term.title}</h3>
              <p className="text-black leading-relaxed">{term.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
