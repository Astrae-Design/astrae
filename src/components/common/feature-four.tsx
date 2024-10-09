import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const FeatureFour = () => {
  return (
    <div className="w-full h-[40rem] border border-white/15 rounded-xl relative overflow-hidden">
      <div className="flex flex-col items-start pt-8">
        <h4 className=" text-3xl px-8 text-white font-semibold">Clean Code</h4>
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
  );
};

export default FeatureFour;
