import PrimaryButton from "@/components/common/primarybutton";
import SlidingProjects from "@/components/common/sliding-cards";
import SlidingCardsMarquee from "@/components/common/sliding-cards-marquee";
import Image from "next/image";

const Value = () => {
  return (
    <div className=" w-full overflow-x-hidden">
      <div className="flex flex-col md:container z-50">
        <div className=" w-full flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-10">
          <div className="md:hidden w-full shrink-0">
            <div className=" container flex flex-col items-start flex-none text-start">
              <h2 className="font-semibold text-5xl tracking-tighter w-full text-white max-w-sm ">
                Customize And Launch In Minutes
              </h2>
              <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-2 md:max-w-xl text-start ">
                With Astrae Design, you don&apos;t have to wait weeks to get
                your perfect website up and running. Our intuitive templates are
                fully customizable, allowing you to tailor every detail to match
                your brand. Whether you&apos;re a designer, developer, or
                entrepreneur, Astrae makes it simple to launch your site in
                minutes.
              </p>
              <div className="flex items-center gap-8 mt-6">
                <PrimaryButton>Browse Entire Library</PrimaryButton>
                <div className=" flex items-center -space-x-4">
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-tailwindcss.svg"
                        alt="Tailwindcss"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-framer-motion.svg"
                        alt="Framer Motion"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-react.svg"
                        alt="React"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-shadcn.svg"
                        alt="React"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
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
          </div>
          <div className="hidden md:block w-full shrink-0 max-w-md">
            <div className=" flex flex-col items-start flex-none text-start">
              <h2 className="font-semibold text-5xl tracking-tighter w-full text-white max-w-md ">
                Customize And Launch In Minutes
              </h2>
              <p className=" text-sm text-white/70 mt-2 md:mt-2 md:max-w-md text-start ">
                With Astrae Design, you don&apos;t have to wait weeks to get
                your perfect website up and running. Our intuitive templates are
                fully customizable, allowing you to tailor every detail to match
                your brand. Whether you&apos;re a designer, developer, or
                entrepreneur, Astrae makes it simple to launch your site in
                minutes.
              </p>
              <div className="flex items-center gap-8 mt-6">
                <PrimaryButton>Browse Entire Library</PrimaryButton>
                <div className=" flex items-center -space-x-4">
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-tailwindcss.svg"
                        alt="Tailwindcss"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-framer-motion.svg"
                        alt="Framer Motion"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-react.svg"
                        alt="React"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
                      <Image
                        fill
                        src="/assets/icons/icon-shadcn.svg"
                        alt="React"
                        className=" object-contain"
                      />
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center h-10 w-10  md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                    <div className=" relative h-6 w-6 md:h-7 md:w-7">
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
          </div>
          <div className=" w-full [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_100%,transparent)] md:[mask-image:linear-gradient(to_bottom,transparent,black_80%,black_100%,transparent)]">
            <SlidingCardsMarquee />
          </div>
        </div>
      </div>
      <div className=" overflow-x-hidden relative w-full -z-50">
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-40 z-10 bg-gradient-to-r from-black to-transparent" />
        <SlidingProjects />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-40 z-10 bg-gradient-to-l from-black to-transparent" />
      </div>
    </div>
  );
};

export default Value;
