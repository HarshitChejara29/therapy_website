import Link from "next/link";
import Image from "next/image";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 md:px-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-10">
        {/* Left Section - Logo + Text */}
        <div className="space-y-4">
          {/* <Link href="/">
            <div className="text-2xl font-extrabold tracking-widest">L O G O</div>
          </Link> */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo2.png"
              alt="Company Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed">
            Providing compassionate, evidence-based therapy to help individuals, couples, and families navigate life&apos;s challenges and achieve lasting well-being.
          </p>
        </div>

        {/* Right Section - Links + Services + Socials */}
        <div className="flex flex-col md:flex-row md:justify-end lg:gap-20 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link href="/blogs" className="hover:text-gray-300">
                  Blogs
                </Link>
              </li> */}
              <li>
                <Link href="/legal_policies" className="hover:text-gray-300">
                  Legal & Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-1 text-sm">
              {/* <li>
                <Link href="/service" className="hover:text-gray-300">
                  Services
                </Link>
              </li> */}
              <li>
                <Link href="/service/individual-therapy" className="hover:text-gray-300">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/service/couples-therapy" className="hover:text-gray-300">
                  Couples Therapy
                </Link>
              </li>
              <li>
                <Link href="/service/child-therapy" className="hover:text-gray-300">
                  Child Therapy
                </Link>
              </li>
              <li>
                <Link href="/service/family-therapy" className="hover:text-gray-300">
                  Family Therapy
                </Link>
              </li>
              <li>
                <Link href="/service/group-therapy" className="hover:text-gray-300">
                  Group Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex md:flex-col gap-4 items-center md:items-start">
            <Link href="https://facebook.com" target="_blank">
              <SiFacebook className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <SiInstagram className="w-5 h-5 hover:text-gray-300" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <SiYoutube className="w-5 h-5 hover:text-gray-300" />
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-400 pt-6">
          © 2025 Hansika Therapy All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;