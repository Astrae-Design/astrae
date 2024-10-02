import PrimaryButton from "@/components/common/primarybutton";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col container py-20">
      <div className="w-full flex flex-col md:flex-row items-start md:justify-between">
        <div className="flex flex-col items-start w-full">
          <div className="h-10 inline-flex gap-1.5 justify-center items-center">
            <div className="h-8 w-8 relative">
              <Image fill src="/assets/logo.svg" alt="Logo" />
            </div>
            <h4 className=" text-white font-semibold text-base">
              Astrae
              <span className=" opacity-70 font-medium"> Marketplace</span>
            </h4>
          </div>
          <p className="text-white text-sm mt-2 mb-6">
            Templates Beyond Ordinary
          </p>
          <div className=" w-fit">
            <PrimaryButton>Explore Our Collection</PrimaryButton>
          </div>
        </div>

        <div className="w-full flex flex-wrap items-start md:justify-end gap-12 md:gap-28 mt-12 md:mt-0">
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base text-white">Templates</h4>
            <div className="flex flex-col items-start gap-2 text-sm font-normal text-white/70">
              <p>Startup Landing Page</p>
              <p>SAAS Landing Page</p>
              <p>SAAS Wailtlist</p>
              <p>Agency Website</p>
              <p>Marketing Page</p>
              <p>Dev Portfolio</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base text-white">Pages</h4>
            <div className="flex flex-col items-start gap-2 text-sm font-normal text-white/70">
              <p>Home</p>
              <p>Marketplace</p>
              <p>Pricing</p>
              <p>Contact</p>
              <p>Studio IX</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h4 className=" font-semibold text-base text-white">Legals</h4>
            <div className="flex flex-col items-start gap-2 text-sm font-normal text-white/70">
              <p>License</p>
              <p>Refunds</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className=" w-full opacity-20 my-8" />
      <p className=" text-white/70 text-sm">
        © 2024 Astrae Design. All Rights Reserved. Powered by{" "}
        <span className=" font-semibold text-white">Studio IX</span>
      </p>
    </div>
  );
};

export default Footer;
