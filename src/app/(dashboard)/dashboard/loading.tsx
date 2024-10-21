import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className=" container">
      <div className="w-full h-full pt-24 md:pt-20">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 w-full">
          <div className=" w-full">
            <Skeleton className=" w-full h-[16rem] rounded-xl" />
            <Skeleton className=" w-[80%] h-[2rem] rounded-md mb-2 mt-4" />
            <Skeleton className=" w-[40%] h-[1.5rem] rounded-md " />
          </div>
          <div className=" w-full">
            <Skeleton className=" w-full h-[16rem] rounded-xl" />
            <Skeleton className=" w-[80%] h-[2rem] rounded-md mb-2 mt-4" />
            <Skeleton className=" w-[40%] h-[1.5rem] rounded-md " />
          </div>
          <div className=" w-full">
            <Skeleton className=" w-full h-[16rem] rounded-xl" />
            <Skeleton className=" w-[80%] h-[2rem] rounded-md mb-2 mt-4" />
            <Skeleton className=" w-[40%] h-[1.5rem] rounded-md " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
