import Image from "next/image";
import { ExtendedUser } from "../../../next-auth";

interface UserInfoProps {
  user?: ExtendedUser;
}

const Account = ({ user }: UserInfoProps) => {
  return (
    <div className="flex items-center md:gap-4 w-full bg-transparent rounded-lg py-1 cursor-pointer outline-none">
      {user?.image ? (
        <div className="relative h-11 md:h-10 aspect-square">
          <Image
            fill
            src={user?.image}
            className=" rounded-full"
            alt="Profile picture"
          />
        </div>
      ) : (
        <div className=" h-11 md:h-10 aspect-square rounded-full bg-white/15 inline-flex items-center justify-center">
          <span className="text-white">{user?.name?.charAt(0)}</span>
        </div>
      )}

      <div className=" hidden md:block">
        <div className="flex flex-col items-start -space-y-1">
          <h4>{user?.name}</h4>
          <p className="text-white/70">Free Tier</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
