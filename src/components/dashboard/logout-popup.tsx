import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LogOut } from "lucide-react";
import DangerButton from "../common/danger-button";
import { Button } from "../ui/button";
import { DropdownMenuItem } from "../ui/dropdown-menu";

const LogoutPopup = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <LogOut className="mr-3" />
          Logout
        </DropdownMenuItem>
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-[#0F0F0F] border border-white/10 rounded-xl flex flex-col w-[90vw] md:w-fit items-center max-w-none">
        <div className=" h-16 aspect-square rounded-full bg-[#606060]/10 flex items-center justify-center">
          <LogOut size={32} color="#FA4E4E" />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-center">
            Are you sure you want to logout?
          </AlertDialogTitle>
          <AlertDialogDescription>
            You can always log back in whenever you want
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className=" w-full flex flex-col items-center mt-4">
          <div className=" w-full">
            <DangerButton>Logout</DangerButton>
          </div>
          <AlertDialogCancel asChild>
            <div className=" w-full">
              <Button className=" w-full bg-[#252525]">Cancel</Button>
            </div>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LogoutPopup;
