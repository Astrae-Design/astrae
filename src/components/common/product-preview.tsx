import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ExternalLink, Eye, X } from "lucide-react";

const ProductPreview = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-14 aspect-square rounded-full absolute right-4 top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
          <Eye />
        </div>
      </DialogTrigger>
      <DialogContent className=" flex flex-col overflow-y-scroll max-w-full h-[96vh] p-0 md:w-[90vw] border-none rounded-2xl overflow-clip">
        <div className=" w-full h-11 px-4 bg-[#111111] flex items-center justify-between rounded-t-2xl">
          <p>Preview</p>
          <div className=" flex items-center gap-2 group">
            <h4 className=" group-hover:underline underline-offset-4 cursor-pointer">
              https://www.example.com
            </h4>
            <ExternalLink className=" ml-2" />
          </div>
          <DialogClose asChild>
            <X className="  cursor-pointer opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-100" />
          </DialogClose>
        </div>
        <iframe
          className="-mt-4 w-full h-full bg-black"
          src="https://www.builtwithatlas.com"
          title="Website"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default ProductPreview;
