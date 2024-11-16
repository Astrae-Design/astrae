import { ChevronRight } from "lucide-react";
import CodeWindow from "../custom/code-window";
import { Button } from "../ui/button";
import { BorderBeam } from "../custom/border-beam";

const FeatureFour = () => {
  return (
    <div className="w-full h-[40rem] group bg-gradient-to-b from-black/80 to-[#0245A6]/30 border border-white/15 rounded-xl relative overflow-hidden">
      <div className=" hidden group-hover:block rounded-xl">
        <BorderBeam colorFrom="#0245A6" colorTo="#0096FA" />
      </div>
      <div className=" h-full w-full flex flex-col justify-between">
        <div className="flex flex-col items-start pt-4 md:pt-8">
          <h4 className=" text-xl md:text-2xl px-4 md:px-8 text-white font-semibold">
            Clean Code
          </h4>
          <p className=" text-white/70 w-[84vw] md:w-[32rem] pl-4 md:pl-8 font-normal text-sm mt-2">
            With clean, well-documented code, you can easily customize and
            maintain your site. Whether you prefer JavaScript or TypeScript, our
            templates are built for developers who value simplicity and
            efficiency.
          </p>
          <Button
            variant="link"
            className=" hover:no-underline no-underline text-white w-fit px-4 md:px-8"
          >
            Explore marketplace
            <ChevronRight className=" ml-0" />
          </Button>
        </div>

        <div className=" px-4 md:px-8 pb-4 md:pb-8">
          <CodeWindow />
        </div>
      </div>
    </div>
  );
};

export default FeatureFour;
