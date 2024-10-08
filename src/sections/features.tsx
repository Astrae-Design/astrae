import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <section className=" container mt-24">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[40rem] border border-white/15 rounded-xl relative overflow-hidden">
          <div className=" absolute z-10 pt-8">
            <div className="flex flex-col items-start   ">
              <h4 className=" text-3xl px-8 text-white font-semibold">
                Fully Responsive
              </h4>
              <p className=" text-white/70 w-[34rem] pl-8 font-normal text-base mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, ducimus quod. Nam quidem, accusamus quisquam ullam
                velit delectus aliquam atque illo exercitationem impedit
                nostrum. Ullam expedita laboriosam perferendis omnis voluptatem!
              </p>
              <Button
                variant="link"
                className=" hover:no-underline no-underline text-white w-fit px-8"
              >
                Explore marketplace
                <ChevronRight className=" ml-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
              </Button>
            </div>

            <div className="flex items-start w-full gap-4 pl-8">
              <div className="flex flex-col mt-12 shrink-0 w-fit">
                <div className="w-[24rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
                  <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                    <Play fill="white" size={16} />
                  </div>
                  <p>Desktop - 1440px</p>
                </div>
                <div className="w-[24rem] h-[32rem] relative mt-2">
                  <Image
                    fill
                    src="/assets/gallery/6.jpg"
                    className=" object-top object-cover rounded-lg"
                    alt="Responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-12">
                <div className="w-[16rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
                  <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                    <Play fill="white" size={16} />
                  </div>
                  <p>Mobile - 390px</p>
                </div>
                <div className="w-[16rem] h-[32rem] relative mt-2">
                  <Image
                    fill
                    src="/assets/gallery/6.jpg"
                    className=" object-top object-cover rounded-lg"
                    alt="Responsive"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full absolute inset-0">
            <div className="w-full h-full relative">
              <Image
                fill
                src="/assets/gallery/6.jpg"
                className=" object-top object-cover"
                alt="Responsive"
              />
            </div>
          </div>
          <div className=" w-full absolute inset-0 bg-gradient-to-b from-[black] backdrop-blur-sm to-transparent" />
        </div>
        <div className="w-full h-[40rem] border border-white/15 rounded-xl relative overflow-hidden">
          <div className="flex flex-col items-start pt-8">
            <h4 className=" text-3xl px-8 text-white font-semibold">
              SEO Optimized
            </h4>
            <p className=" text-white/70 w-[34rem] pl-8 font-normal text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ducimus quod. Nam quidem, accusamus quisquam ullam velit delectus
              aliquam atque illo exercitationem impedit nostrum. Ullam expedita
              laboriosam perferendis omnis voluptatem!
            </p>
            <Button
              variant="link"
              className=" hover:no-underline no-underline text-white w-fit px-8"
            >
              Explore marketplace
              <ChevronRight className=" ml-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
            </Button>
          </div>
        </div>
        <div className="w-full h-[40rem] border border-white/15 rounded-xl relative overflow-hidden">
          <div className="flex flex-col items-start pt-8">
            <h4 className=" text-3xl px-8 text-white font-semibold">
              CRO Optimized
            </h4>
            <p className=" text-white/70 w-[34rem] pl-8 font-normal text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ducimus quod. Nam quidem, accusamus quisquam ullam velit delectus
              aliquam atque illo exercitationem impedit nostrum. Ullam expedita
              laboriosam perferendis omnis voluptatem!
            </p>
            <Button
              variant="link"
              className=" hover:no-underline no-underline text-white w-fit px-8"
            >
              Explore marketplace
              <ChevronRight className=" ml-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
            </Button>
          </div>
        </div>
        <div className="w-full h-[40rem] border border-white/15 rounded-xl relative overflow-hidden">
          <div className="flex flex-col items-start pt-8">
            <h4 className=" text-3xl px-8 text-white font-semibold">
              Complex Animations
            </h4>
            <p className=" text-white/70 w-[34rem] pl-8 font-normal text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ducimus quod. Nam quidem, accusamus quisquam ullam velit delectus
              aliquam atque illo exercitationem impedit nostrum. Ullam expedita
              laboriosam perferendis omnis voluptatem!
            </p>
            <Button
              variant="link"
              className=" hover:no-underline no-underline text-white w-fit px-8"
            >
              Explore marketplace
              <ChevronRight className=" ml-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
            </Button>
          </div>
        </div>
        <div className="w-full h-[40rem] md:h-[20rem] md:col-span-2 border border-white/15 rounded-xl relative overflow-hidden">
          <div className="flex flex-col items-start pt-8">
            <h4 className=" text-3xl px-8 text-white font-semibold">
              Blazing Fast
            </h4>
            <p className=" text-white/70 w-[34rem] pl-8 font-normal text-base mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              ducimus quod. Nam quidem, accusamus quisquam ullam velit delectus
              aliquam atque illo exercitationem impedit nostrum. Ullam expedita
              laboriosam perferendis omnis voluptatem!
            </p>
            <Button
              variant="link"
              className=" hover:no-underline no-underline text-white w-fit px-8"
            >
              Explore marketplace
              <ChevronRight className=" ml-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex flex-col items-center w-full mt-32">
          <h2 className="font-semibold text-5xl lg:text-6xl text-white text-center">
            What you will get
          </h2>
          <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-2 text-center w-full md:max-w-xl mx-auto">
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
              <h4 className=" text-xl md:text-2xl text-white tracking-tighter font-medium">
                Source Code
              </h4>
              <p className=" text-base text-white/70">
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
              <h4 className=" text-xl md:text-2xl text-white tracking-tighter font-medium">
                Figma File
              </h4>
              <p className=" text-base text-white/70">
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
              <h4 className=" text-xl md:text-2xl text-white tracking-tighter font-medium">
                Documentation
              </h4>
              <p className=" text-base text-white/70">
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
