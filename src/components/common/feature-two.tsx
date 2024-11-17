import { ChevronRight, Gauge } from "lucide-react";
import { Button } from "../ui/button";
import { BorderBeam } from "../custom/border-beam";
import { RadialChart } from "./radial-chart";
import { RadialChartMobile } from "./radial-chart-mobile";

const FeatureTwo = () => {
  return (
    <div className="w-full h-fit md:h-[40rem] pb-4 md:pb-8 group border border-white/15 bg-gradient-to-b from-black to-[#002A1A]/70 rounded-xl relative overflow-hidden">
      <div className=" hidden group-hover:block rounded-xl">
        <BorderBeam colorFrom="#06E18D" colorTo="#00FF9D" />
      </div>
      <div className=" h-full flex flex-col justify-between">
        <div className="flex flex-col items-start pt-4 md:pt-8">
          <h4 className=" text-2xl px-4 md:px-8 text-white font-semibold">
            SEO Optimized
          </h4>
          <p className=" text-white/70 w-[84vw] md:w-[33rem] pl-4 md:pl-8 font-normal text-sm mt-2">
            We prioritize high search engine rankings with SEO-friendly code and
            structure. Our templates are meticulously crafted to give your
            website the visibility it deserves on Google and other search
            engines.
          </p>
          <Button
            variant="link"
            className=" hover:no-underline no-underline text-white w-fit px-4 md:px-8"
          >
            Explore marketplace
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="w-full flex flex-col px-4 md:px-6 mt-10 md:mt-0">
          <div className=" w-full flex flex-col border border-white/15 pb-6 md:pb-0 rounded-xl h-fit md:h-[20rem] bg-gradient-to-b from-black to-black/10">
            <div className="flex items-center gap-3 text-xl text-white/70 px-6 mt-6">
              <Gauge />
              PageSpeed Insights
            </div>
            <div className=" hidden md:block">
              <div className="w-full flex items-end px-12 justify-between mt-10">
                <RadialChart label="Accessibility" />
                <RadialChart label="SEO" />
                <RadialChart label="Best Practices" />
              </div>
            </div>
            <div className="md:hidden">
              <div className="w-full grid grid-cols-2 items-center gap-y-6 px-6 mt-10">
                <RadialChartMobile label="Accessibility" />
                <div className=" justify-self-end">
                  <RadialChartMobile label="SEO" />
                </div>
                <RadialChartMobile label="Best Practices" />
                <div className=" justify-self-end">
                  <RadialChartMobile label="Page Performance" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTwo;
