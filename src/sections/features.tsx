import FeatureFour from "@/components/common/feature-four";
import FeatureOne from "@/components/common/feature-one";
import FeatureThree from "@/components/common/feature-three";
import FeatureTwo from "@/components/common/feature-two";
import Image from "next/image";

const Features = () => {
  return (
    <section className=" container mt-24">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureOne />
        <FeatureTwo />
        <FeatureThree />
        <FeatureFour />
        {/* <FeatureFive /> */}
      </div>
      <div>
        <div className=" flex flex-col items-center w-full mt-32">
          <h2 className="font-semibold text-4xl tracking-tighter text-white text-center">
            What you will get
          </h2>
          <p className=" text-sm text-white/70 mt-2 md:mt-2 text-center w-full md:max-w-xl mx-auto">
            We don&apos;t just give you templates, you get access to all assets,
            Figma file and source code.
          </p>
        </div>

        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-8 mb-20">
          <div className=" bg-[#161616]/50 backdrop-blur-sm w-full h-fit transition-all ease-in-out duration-300 hover:bg-[#161616] border border-white/10 rounded-xl pl-6 pr-4 py-4 flex gap-4 items-start">
            <div className=" w-12 h-12 relative shrink-0 mt-2">
              <Image
                className=" object-contain"
                fill
                src="/assets/icons/icon-next-js.svg"
                alt="Source code"
              />
            </div>
            <div className="flex flex-col items-start gap-0">
              <h4 className=" text-xl text-white tracking-tighter font-medium">
                Source Code
              </h4>
              <p className=" text-sm text-white/70">
                Clean, modular code for easy customization and seamless
                integration.
              </p>
            </div>
          </div>

          <div className=" bg-[#161616]/50 backdrop-blur-sm w-full h-fit transition-all ease-in-out duration-300 hover:bg-[#161616] border border-white/10 rounded-xl pl-6 pr-4 py-4 flex gap-4 items-start">
            <div className=" w-12 h-12 relative shrink-0 mt-2">
              <Image
                className=" object-contain"
                fill
                src="/assets/icons/icon-figma.svg"
                alt="Figma File"
              />
            </div>
            <div className="flex flex-col items-start gap-0">
              <h4 className=" text-xl text-white tracking-tighter font-medium">
                Figma File
              </h4>
              <p className=" text-sm text-white/70">
                Fully customizable Figma designs, including all variants and
                components.
              </p>
            </div>
          </div>

          <div className=" bg-[#161616]/50 backdrop-blur-sm w-full h-fit transition-all ease-in-out duration-300 hover:bg-[#161616] border border-white/10 rounded-xl pl-6 pr-4 py-4 flex gap-4 items-start">
            <div className=" w-12 h-12 relative shrink-0 mt-2">
              <Image
                className=" object-contain"
                fill
                src="/assets/icons/icon-document.svg"
                alt="Documentation"
              />
            </div>
            <div className="flex flex-col items-start gap-0">
              <h4 className=" text-xl text-white tracking-tighter font-medium">
                Documentation
              </h4>
              <p className=" text-sm text-white/70">
                Step-by-step guides to help you get started quickly and
                effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
