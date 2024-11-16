import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShowcaseCard = () => {
  return (
    <Link href="/" className=" group">
      <div className=" w-full flex flex-col h-fit relative">
        <div className=" group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100">
          <div className=" h-14 aspect-square rounded-full absolute right-4 top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
            <ExternalLink />
          </div>
        </div>
        <div className=" relative h-[16rem] rounded-xl overflow-clip">
          <Image
            fill
            quality={100}
            src="/assets/gallery/5.webp"
            className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
            alt="Showcase card"
          />
        </div>
        <h3 className=" text-white text-2xl mt-2">Atlas Labs</h3>
        <p className=" text-base text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
          Design & Web Development Agency
        </p>
      </div>
    </Link>
  );
};

export default ShowcaseCard;
