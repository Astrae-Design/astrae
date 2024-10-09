import { ChevronRight, Gauge } from "lucide-react";
import { Button } from "../ui/button";
import { BorderBeam } from "../custom/border-beam";
import { RadialChart } from "./radial-chart";

const FeatureTwo = () => {
  return (
    <div className="w-full h-[40rem] pb-8 group border border-white/15 bg-gradient-to-b from-black to-[#002A1A]/70 rounded-2xl relative overflow-hidden">
      <div className=" hidden group-hover:block rounded-2xl">
        <BorderBeam colorFrom="#06E18D" colorTo="#00FF9D" />
      </div>
      <div className=" h-full flex flex-col justify-between">
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
            <ChevronRight className=" ml-0" />
          </Button>
        </div>

        <div className="w-full flex flex-col px-6">
          <div className=" w-full flex flex-col border border-white/15 rounded-xl h-[20rem] bg-gradient-to-b from-black to-black/10">
            <div className="flex items-center gap-3 text-xl text-white/70 px-6 mt-6">
              <Gauge />
              PageSpeed Insights
            </div>
            <div className="w-full flex items-end px-12 justify-between mt-10">
              <RadialChart label="Accessibility" />
              <RadialChart label="SEO" />
              <RadialChart label="Best Practices" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
