import { Skeleton } from "@/components/ui/skeleton";

const LoadingProductDetails = () => {
  return (
    <div className=" min-h-screen  w-full flex flex-col">
      <div className=" w-full container">
        <div className=" flex items-start justify-between w-full py-20 gap-40">
          <div className=" w-full flex flex-col gap-2">
            <Skeleton className=" w-[70%] h-12" />
            <Skeleton className=" w-[50%] h-12" />
            <div className=" -space-x-4 inline-flex items-center mt-6">
              <Skeleton className=" h-10 md:h-12 aspect-square rounded-full" />
              <Skeleton className=" h-10 md:h-12 aspect-square rounded-full" />
              <Skeleton className=" h-10 md:h-12 aspect-square rounded-full" />
              <Skeleton className=" h-10 md:h-12 aspect-square rounded-full" />
            </div>
          </div>
          <div className=" flex flex-col items-start w-full">
            <Skeleton className=" w-full h-32" />
            <div className=" w-full inline-flex items-center gap-4 mt-4">
              <Skeleton className=" w-[40%] h-10" />
              <Skeleton className=" w-full h-10" />
            </div>
            <div className=" w-full flex flex-col items-end mt-2">
              <Skeleton className=" w-[40%] h-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full h-[24rem] md:h-[40rem] gap-12">
        <Skeleton className="h-full w-[45%] rounded-2xl flex-nowrap shrink-0" />
        <Skeleton className="h-full w-[45%] rounded-2xl flex-nowrap shrink-0" />
        <Skeleton className="h-full w-[45%] rounded-2xl flex-nowrap shrink-0" />
      </div>
    </div>
  );
};

export default LoadingProductDetails;
