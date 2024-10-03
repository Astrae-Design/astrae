import { FaqItems } from "@/components/common/faq-items";

const FaqCentral = () => {
  return (
    <section className="py-20 px-3 md:px-0">
      <div className=" container z-10 flex flex-col items-center justify-center">
        <h2 className="font-semibold text-5xl lg:text-6xl text-white text-center">
          FAQ Central
        </h2>
        <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-2 text-center w-full md:max-w-xl mx-auto">
          Explore our FAQs for instant answers to popular inquiries. For more
          specific assistance, don&apos;t hesitate to{" "}
          <span className=" text-[#0096FA]"> Reach out to us</span>
        </p>
        <FaqItems />
      </div>
    </section>
  );
};

export default FaqCentral;
