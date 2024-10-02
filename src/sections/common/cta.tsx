import PrimaryButton from "@/components/common/primarybutton";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className=" py-20 md:py-24">
      <div className=" container">
        <div
          style={{
            backgroundImage: 'url("/assets/stars.png")',
          }}
          className=" border border-white/15 rounded-xl py-24 overflow-hidden relative"
        >
          <div
            className=" absolute inset-0 bg-[rgb(2,69,166)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: 'url("/assets/grid-lines.png")',
            }}
          ></div>
          <div className=" relative">
            <h2 className=" text-5xl md:text-6xl max-w-4xl mx-auto tracking-tighter text-center font-semibold text-white">
              Want a custom website tailored to your needs? Let&apos;s talk
            </h2>
            <div className=" flex justify-center mt-4">
              <p className=" text-center text-lg md:text-xl max-w-sm mx-auto tracking-tight text-white/70 px-4">
                We have helped hundreds of businesses with their website needs
              </p>
            </div>
            <div className=" flex items-center -space-x-4 mx-auto w-fit py-8">
              <div className="inline-flex items-center justify-center h-6 w-6 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-6 w-6 md:h-14 md:w-14">
                  <Image
                    fill
                    src="/assets/user-1.png"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-6 w-6 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-6 w-6 md:h-14 md:w-14">
                  <Image
                    fill
                    src="/assets/user-2.png"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-6 w-6 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-6 w-6 md:h-14 md:w-14">
                  <Image
                    fill
                    src="/assets/user-3.png"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-6 w-6 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-6 w-6 md:h-14 md:w-14">
                  <Image
                    fill
                    src="/assets/user-4.png"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-6 w-6 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-6 w-6 md:h-14 md:w-14">
                  <Image
                    fill
                    src="/assets/user-5.png"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-6 w-6 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-6 w-6 md:h-14 md:w-14">
                  <Image
                    fill
                    src="/assets/user-6.png"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
            </div>
            <div className=" justify-center w-full inline-flex items-center gap-4 mt-4">
              <div className=" w-fit">
                <PrimaryButton>Get Started Now</PrimaryButton>
              </div>
              <Button className=" h-11" variant="secondary">
                Studio IX
                <ArrowUpRight className=" ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
