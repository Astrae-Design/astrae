import { FaqItems } from "@/components/common/faq-items";

const FaqCentral = () => {
  return (
    <section className="py-20">
      <div className=" container z-10 flex flex-col items-center justify-center">
        <h2 className="font-semibold text-5xl tracking-tighter text-white text-center">
          FAQ Central
        </h2>
        <p className=" text-sm text-white/70 mt-2 md:mt-2 text-center w-full md:max-w-sm mx-auto">
          Explore our FAQs for instant answers to popular inquiries.
        </p>
        <FaqItems />
      </div>
    </section>
  );
};

export default FaqCentral;
