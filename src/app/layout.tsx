import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Montserrat, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Maple Therapy",
  description: "Best Therapy Service",
  icons: {
    icon: "/favicon.png",
  },
};

// Load fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
