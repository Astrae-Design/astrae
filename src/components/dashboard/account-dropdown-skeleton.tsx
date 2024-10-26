import { Skeleton } from "../ui/skeleton";

const AccountDropdownSkeleton = () => {
  return (
    <div className=" flex items-center md:gap-4 w-full">
      <Skeleton className=" aspect-square rounded-full h-11 md:h-11" />
      <div className=" hidden md:block space-y-1">
        <Skeleton className="w-[14ch] h-5" />
        <Skeleton className=" w-[6ch] h-5" />
      </div>
    </div>
  );
};

export default AccountDropdownSkeleton;
