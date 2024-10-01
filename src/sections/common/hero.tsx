import PrimaryButton from "@/components/common/primarybutton";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: 'url("/assets/stars.png")',
      }}
    >
      <div className=" absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(2,69,166,.3)_15%,rgb(2,69,166,.3)_78%,transparent)]"></div>

      <div className=" absolute h-[344px] md:h-[580px] md:w-[580px] w-[344px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" absolute inline-flex items-center justify-center h-20 w-20 top-0 left-1/2 bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className=" relative h-12 w-12">
            <Image
              fill
              src="/assets/icons/icon-tailwindcss.svg"
              alt="Tailwindcss"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" absolute inline-flex items-center justify-center h-20 w-20 top-full left-1/2 bg-black/60 backdrop-blur-lg  rounded-full -translate-x-1/2 -translate-y-1/2">
          <div className=" relative h-12 w-12">
            <Image
              fill
              src="/assets/icons/icon-shadcn.svg"
              alt="Tailwindcss"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
      <div className=" absolute h-[444px] md:h-[780px] md:w-[780px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
        <div className=" absolute inline-flex items-center justify-center h-20 w-20 top-1/2 left-full bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 translate-y-1/2">
          <div className=" relative h-12 w-12">
            <Image
              fill
              src="/assets/icons/icon-framer-motion.svg"
              alt="Tailwindcss"
              className=" object-contain"
            />
          </div>
        </div>
      </div>
      <div className=" absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" absolute inline-flex items-center justify-center h-20 w-20 top-1/2 left-0 bg-black/60 backdrop-blur-lg rounded-full -translate-x-1/2 translate-y-1/2">
          <div className=" relative h-12 w-12">
            <Image
              fill
              src="/assets/icons/icon-react.svg"
              alt="Tailwindcss"
              className=" object-contain"
            />
          </div>
        </div>
        <div className=" absolute h-2 w-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className=" container relative mt-16 md:mt-0">
        <h1 className=" text-5xl md:text-8xl md:leading-none font-semibold tracking-tighter text-transparent bg-clip-text text-center bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(2,69,166,.5))]">
          React Template Marketplace For Stunning Sites
        </h1>
        <p className=" text-lg md:text-xl text-white/70 mt-5 text-center max-w-2xl mx-auto">
          Build class leading websites with speed. Access an ever-growing
          collection of premium, meticulously crafted templates. Save time and
          focus on what matters — building standout websites that captivate your
          audience.
        </p>
        <div className="flex  justify-center items-center gap-4 mt-5">
          <PrimaryButton>Explore Our Collection</PrimaryButton>
          <h4 className=" text-base text-white">Get Unlimited Access</h4>
        </div>
      </div>
    </section>
  );
};
