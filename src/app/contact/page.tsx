"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Phone, Mail } from "lucide-react";
import contactData from "../data/Contact.json";
import Support from "../components/Support";

const iconMap: { [key: string]: JSX.Element } = {
  Clock: <Clock className="w-6 h-6" />,
  Phone: <Phone className="w-6 h-6" />,
  Mail: <Mail className="w-6 h-6" />,
};

export default function ContactPage() {
  const { pageTitle, introSection, contactInfo } = contactData;

  return (
    <>
      <div className="px-6 md:px-12 lg:px-28">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-400 py-14">
          <Link href="/">Home</Link> <span className="text-black">› Contact Us</span>
        </p>

        {/* Page Title */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">{pageTitle}</h2>

        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch lg:gap-0 gap-6">
          <div className="md:col-span-2 bg-[#FFFCF5] p-6 rounded-lg lg:ml-18 lg:mr-16 h-full flex flex-col justify-start">
            <h3 className="font-semibold text-lg mb-4">{introSection.title}</h3>
            <div className="space-y-2">
              {introSection.paragraphs.map((p, idx) => (
                <p key={idx} className="text-gray-900">{p}</p>
              ))}
            </div>
          </div>
          <div className="md:col-span-1 flex justify-end">
            <div className="w-[500px] h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={introSection.image}
                alt={introSection.imageAlt}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:mt-28 mt-18">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="p-6 border border-[#CBBCD4] border-b-5 border-r-5 rounded-2xl bg-white flex flex-col gap-2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#CBBCD4] text-black mb-2">
                {iconMap[info.icon]}
              </div>
              <h4 className="font-semibold">{info.title}</h4>
              <div className="w-full border-b border-[#CBBCD4] mb-1"></div>
              <p className="text-sm text-black">{info.description}</p>
              {info.link ? (
                <Link href={info.link} className="font-medium underline">{info.details[0]}</Link>
              ) : (
                info.details.map((detail, i) => (
                  <span key={i} className="font-medium">{detail}</span>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Form */}
        <div className="lg:mt-18 mt-8 bg-[#FFFCF5] p-6 md:p-10 rounded-xl">
          <div className="max-w-2xl mx-auto py-6">
          <h3 className="text-3xl md:text-5xl font-semibold text-black mb-2">Book a Consultation</h3>
          <p className="text-sm text-black mb-8">
            Please fill out your information below.
          </p>

          <form className="grid grid-cols-1 gap-8">
            {/* Name */}
            <div>
              <label className="block text-md font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name*"
                className="w-full border rounded-full px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-md font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email Address*"
                className="w-full border rounded-full px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-md font-semibold mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="(000) 000-000"
                className="w-full border rounded-full px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-md font-semibold mb-1">
                Appointment Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full border rounded-full px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Appointment Time */}
            <div>
              <label className="block text-md font-semibold mb-1">
                Appointment Time <span className="text-red-500">*</span>
              </label>
              <input
                type="time"
                className="w-full border rounded-full px-3 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-[#CBBCD4] hover:bg-purple-200 text-black font-medium px-8 py-2 rounded-full transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Support />
    </>
  );
}
