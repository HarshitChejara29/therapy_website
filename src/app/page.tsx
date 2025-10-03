import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Strategy from "./components/Strategy";
import QuoteSection from "./components/Quote";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <>
    <Hero />
    <Strategy />
    <About />
    <Services />
    <QuoteSection />
    <Testimonials />
    <CallToAction />
    <FaqSection />
    </>
  );
}
