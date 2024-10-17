import PrimaryButton from "@/components/common/primarybutton";
import ProductInfo from "@/components/common/product-info";
import ProjectCarousel from "@/components/common/project-carousel";
import { Button } from "@/components/ui/button";
import CallToAction from "@/sections/cta";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className=" w-full flex flex-col items-center">
      <div className="container">
        <div className=" w-full py-12 md:py-20 flex flex-col md:flex-row items-start flex-none text-start">
          <div className=" w-full flex flex-col gap-6">
            <h2 className="font-semibold text-5xl lg:text-6xl w-full text-white max-w-full md:max-w-lg ">
              Plura — Digital Agency Template
            </h2>
            <div className=" flex items-center -space-x-4 mt-2">
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
          <div className=" w-full">
            <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-2 md:max-w-xl text-start ">
              Plura is a sleek, one-page template crafted to showcase the work
              of creative studios and visionaries with elegance and style.
              Designed with a seamless, intuitive interface, Plura allows your
              creativity to shine, making your portfolio the focal point.
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6">
              <Button className=" w-full md:w-fit">
                Live Preview <ExternalLink className=" ml-3" />
              </Button>
              <PrimaryButton>Purchase Template for $9.99</PrimaryButton>
            </div>
            <div className="py-4 w-full flex items-center justify-center md:justify-end">
              <h4 className=" text-sm md:text-base">
                Or unlock everything with membership
              </h4>
            </div>
          </div>
        </div>
      </div>
      <ProjectCarousel />
      <ProductInfo />
      <CallToAction />
    </div>
  );
};

export default ProductDetails;
