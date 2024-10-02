import PrimaryButton from "@/components/common/primarybutton";
import SlidingProjects from "@/components/common/sliding-cards";
import SlidingCardsMarquee from "@/components/common/sliding-cards-marquee";
import Image from "next/image";

const Value = () => {
  return (
    <div className=" w-full py-40 overflow-x-hidden">
      <div className="flex flex-col container">
        <div className=" w-full flex items-center justify-between gap-10">
          <div className="flex flex-col items-start flex-none text-start">
            <h2 className="font-semibold text-5xl lg:text-6xl w-full text-white max-w-lg ">
              Customize And Launch In Minute
            </h2>
            <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-2 max-w-xl mx-auto">
              Plura is a sleek, one-page template crafted to showcase the work
              of creative studios and visionaries with elegance and style.
              Designed with a seamless, intuitive interface, Plura allows your
              creativity to shine, making your portfolio the focal point.
            </p>
            <div className="flex items-center gap-8 mt-6">
              <PrimaryButton>Browse Entire Library</PrimaryButton>
              <div className=" flex items-center -space-x-4">
                <div className="inline-flex items-center justify-center h-6 w-6  md:h-10 md:w-10 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                  <div className=" relative h-6 w-6 md:h-5 md:w-5">
                    <Image
                      fill
                      src="/assets/icons/icon-tailwindcss.svg"
                      alt="Tailwindcss"
                      className=" object-contain"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6  md:h-10 md:w-10 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                  <div className=" relative h-6 w-6 md:h-5 md:w-5">
                    <Image
                      fill
                      src="/assets/icons/icon-framer-motion.svg"
                      alt="Framer Motion"
                      className=" object-contain"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6  md:h-10 md:w-10 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                  <div className=" relative h-6 w-6 md:h-5 md:w-5">
                    <Image
                      fill
                      src="/assets/icons/icon-react.svg"
                      alt="React"
                      className=" object-contain"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6  md:h-10 md:w-10 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                  <div className=" relative h-6 w-6 md:h-5 md:w-5">
                    <Image
                      fill
                      src="/assets/icons/icon-shadcn.svg"
                      alt="React"
                      className=" object-contain"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center justify-center h-6 w-6  md:h-10 md:w-10 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                  <div className=" relative h-6 w-6 md:h-5 md:w-5">
                    <Image
                      fill
                      src="/assets/icons/icon-next-js.svg"
                      alt="React"
                      className="mt-0.5 ml-0.5 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full">
            <SlidingCardsMarquee />
          </div>
        </div>
      </div>
      <div className=" overflow-x-hidden relative w-full">
        <div className="absolute top-0 bottom-0 left-0 w-28 md:w-40 z-10 bg-gradient-to-r from-black to-transparent" />
        <SlidingProjects />
        <div className="absolute top-0 bottom-0 right-0 w-28 md:w-40 z-10 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

export default Value;
