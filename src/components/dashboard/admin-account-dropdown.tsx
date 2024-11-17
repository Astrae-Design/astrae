import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Cloud, DatabaseZap, Settings } from "lucide-react";
import Image from "next/image";
import { ExtendedUser } from "../../../next-auth";
import LogoutPopup from "./logout-popup";

interface UserInfoProps {
  user?: ExtendedUser;
}

const AdminAccountDropdown = ({ user }: UserInfoProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild onSelect={(e) => e.preventDefault()}>
        <div className="flex items-center h-fit md:gap-4 w-full bg-transparent rounded-lg py-1 cursor-pointer outline-none ring-0">
          {user?.image ? (
            <div className="relative h-10 md:h-10 aspect-square">
              <Image
                fill
                src={user?.image}
                className=" rounded-full"
                alt="Profile picture"
              />
            </div>
          ) : (
            <div className=" h-10 md:h-10 aspect-square rounded-full bg-gradient-to-b from-[#0245A6] to-[#0096FA] inline-flex items-center justify-center">
              <span className="text-white">{user?.name?.charAt(0)}</span>
            </div>
          )}

          <div className=" hidden md:block">
            <div className="flex flex-col items-start">
              <h4 className=" text-sm">{user?.name}</h4>
              <p className="text-white/70 text-sm">Admin</p>
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" ml-9">
        <DropdownMenuItem>
          <Settings className="mr-3" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <DatabaseZap className="mr-3" />
          Database
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Cloud className="mr-3" />
          Cloudinary
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutPopup />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AdminAccountDropdown;
