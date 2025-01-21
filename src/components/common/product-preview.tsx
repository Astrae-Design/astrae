import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Eye, X } from "lucide-react";

const ProductPreview = ({ previewLink }: { previewLink: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-12 aspect-square rounded-full absolute right-4 top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
          <Eye className=" w-5 h-5" />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col overflow-y-scroll max-w-full h-[86dvh] md:h-[96vh] p-0 w-[92vw] md:w-[90vw] border-none rounded-xl md:rounded-2xl overflow-clip mt-5 md:mt-0">
        <div className=" w-full h-11 px-4 bg-[#111111] flex items-center justify-between rounded-t-xl md:rounded-t-2xl">
          <p className=" hidden md:block">Preview</p>
          <div className=" flex flex-row-reverse md:flex-row items-center gap-2 group">
            <h4 className=" group-hover:underline underline-offset-4 cursor-pointer">
              {previewLink}
            </h4>
            <ExternalLink className=" ml-0 mr-2 md:mr-0 md:ml-2" />
          </div>
          <DialogClose asChild>
            <X className="  cursor-pointer opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-100" />
          </DialogClose>
        </div>
        <iframe
          className="-mt-4 w-full h-full bg-black"
          src={previewLink}
          title="Website"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default ProductPreview;
