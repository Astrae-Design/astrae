import { Briefcase, Globe } from "lucide-react";
import { Button } from "../ui/button";
import FeaturesAccordion from "./features-accordion";
import SimilarProducts from "./similar-products";

const ProductInfo = () => {
  return (
    <div>
      <div className=" container py-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-20 w-full">
          <div className=" w-full flex flex-col items-start">
            <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-2 text-start ">
              Plura is a sleek, one-page template crafted to showcase the work
              of creative studios and visionaries with elegance and style.
              Designed with a seamless, intuitive interface, Plura allows your
              creativity to shine, making your portfolio the focal point.
            </p>
            <p className=" text-base md:text-lg text-white/70 mt-2 md:mt-6 text-start ">
              The template features a smooth, intuitive interface that&apos;s
              not only easy to navigate but also enhances user engagement.
              Plura&apos;s minimalistic yet impactful design ensures that your
              creativity remains the star, providing a professional and polished
              platform where your work can truly shine. Whether you&apos;re a
              designer, photographer, or creative agency, Plura adapts
              beautifully to your needs, offering a versatile and visually
              captivating way to present your portfolio in the best light
              possible.
            </p>

            <FeaturesAccordion />
          </div>
          <div className=" md:w-1/2 flex flex-col items-start">
            <div className=" w-full flex flex-col items-start">
              <h2 className="font-semibold text-2xl lg:text-3xl text-white">
                Pages
              </h2>

              <div className="gap-4 grid grid-cols-3 w-full mt-6">
                <Button size="sm">
                  <Globe className="  mr-3" />
                  Home
                </Button>
                <Button size="sm">
                  <Globe className="  mr-3" />
                  404
                </Button>
                <Button size="sm">
                  <Globe className="  mr-3" />
                  Contact
                </Button>
                <Button size="sm">
                  <Globe className="  mr-3" />
                  Work
                </Button>
              </div>
            </div>

            <div className=" w-full flex flex-col items-start mt-12">
              <h2 className="font-semibold text-2xl lg:text-3xl text-white">
                Category
              </h2>

              <Button size="sm" className="mt-6 w-fit px-4">
                <Briefcase className="  mr-3" />
                Agency Website
              </Button>
            </div>

            <div className=" w-full flex flex-col items-start mt-12">
              <h2 className="font-semibold text-2xl lg:text-3xl text-white">
                Support
              </h2>

              <Button
                size="sm"
                variant="link"
                className="mt-6 w-fit px-0 text-white/70 hover:text-white"
              >
                Contact Us
              </Button>
              <Button
                size="sm"
                variant="link"
                className="w-fit px-0 text-white/70 hover:text-white"
              >
                How to use
              </Button>
            </div>

            <div className=" w-full flex flex-col items-start mt-12">
              <p className="text-sm md:text-lg text-white/70">
                Added September 27, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
      <div className="mt-20" />
    </div>
  );
};

export default ProductInfo;
