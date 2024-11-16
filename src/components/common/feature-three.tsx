import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { DragCards } from "../custom/drag-cards";
import { BorderBeam } from "../custom/border-beam";

const FeatureThree = () => {
  return (
    <div className="w-full h-[40rem] group bg-gradient-to-b from-black/80 to-[#0245A6]/30 border border-white/15 rounded-xl relative overflow-hidden">
      <div className=" hidden group-hover:block rounded-xl">
        <BorderBeam colorFrom="#0245A6" colorTo="#0096FA" />
      </div>
      <div className=" flex flex-col h-full justify-between">
        <div className="flex flex-col items-start pt-4 md:pt-8 z-20 absolute">
          <h4 className=" text-xl md:text-2xl px-4 md:px-8 text-white font-semibold">
            Complex Animations
          </h4>
          <p className=" text-white/70 w-[84vw] md:w-[32rem] pl-4 md:pl-8 font-normal text-sm mt-2">
            Make your site stand out with rich, interactive animations. Our
            templates include modern, attention-grabbing animations to enhance
            the user experience without sacrificing performance.
          </p>
          <Button
            variant="link"
            className=" hover:no-underline no-underline text-white w-fit px-4 md:px-8"
          >
            Explore marketplace
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className=" h-full inset-0 absolute pt-40">
          <DragCards />
        </div>
      </div>
    </div>
  );
};

export default FeatureThree;
