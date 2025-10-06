import Image from "next/image";
import Link from "next/link";
import services from "../../data/therapyServicesData.json";
import ApproachSection from "@/app/components/ApproachSection";
import Testimonials from "@/app/components/Testimonials";
import FaqSection from "@/app/components/FaqSection";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const ServiceDetailPage = ({ params }: ServicePageProps) => {
  const service = services.find((s) => s.slug === params.slug)!;

  return (
    <>
      <section className="bg-white py-14 md:px-12 lg:px-28 px-6">
        <p className="text-sm text-gray-400 mb-14 ">
          <Link href="/">Home</Link> <span className="text-black">›</span>{" "}
          <Link href="/service">Service</Link>{" "}
          <span className="text-black">› {service.title}</span>
        </p>

        <h1 className="text-3xl md:text-5xl font-semibold mb-10 text-black">
          {service.title}
        </h1>

        <div className="w-full rounded-2xl overflow-hidden lg:mb-12 mb-6">
          <Image
            src={service["banner-image"]}
            alt={service.title}
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="lg:mt-12 mt-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-black">
            What To Expect
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            {service["detail-description1"]}
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {service["detail-description2"]}
          </p>
        </div>
      </section>

      <ApproachSection />
      <Testimonials />
      <FaqSection />
    </>
  );
};

export default ServiceDetailPage;