import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className=" container">
      <div className="w-full h-full">
        <div className=" w-full justify-between gap-4 md:gap-0 flex flex-row mt-8">
          <Skeleton className=" w-[180px] h-[2.5rem] rounded-xl" />
          <div className=" flex items-center gap-2">
            <Skeleton className=" w-[340px] h-[2.5rem] rounded-xl hidden md:block" />
            <Skeleton className=" w-[200px] h-[2.5rem] rounded-xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 w-full mt-6">
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
