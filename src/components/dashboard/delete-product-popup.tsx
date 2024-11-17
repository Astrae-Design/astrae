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
import { Trash2 } from "lucide-react";
import DangerButton from "../common/danger-button";
import { Button } from "../ui/button";

const DeleteProductPopup = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-12 aspect-square rounded-full absolute right-[4.5rem] top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
          <Trash2 />
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className=" md:max-w-sm bg-[#0F0F0F] border border-white/10 rounded-xl flex flex-col w-[90vw] md:w-full items-center max-w-none">
        <div className=" h-16 aspect-square rounded-full bg-[#606060]/10 flex items-center justify-center">
          <Trash2 size={32} color="#FA4E4E" />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle className=" text-center">
            Are you sure you want to delete <br className=" hidden md:block" />{" "}
            template from Astrae
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action is permanent and you can not undo it
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className=" w-full flex flex-col items-center mt-4">
          <div className=" w-full">
            <DangerButton>Confirm Delete</DangerButton>
          </div>
          <AlertDialogCancel asChild>
            <div className=" w-full">
              <Button className=" w-full hover:bg-[#252525]">Cancel</Button>
            </div>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProductPopup;
