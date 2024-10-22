import { Product } from "@/types";
import { ExternalLink, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AdminProductCard {
  data: Product;
}

const AdminProductCard: React.FC<AdminProductCard> = ({ data }) => {
  return (
    <div className=" w-full group flex flex-col h-fit relative">
      <div className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-12 aspect-square rounded-full absolute right-4 top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
        <ExternalLink />
      </div>
      <div className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-12 aspect-square rounded-full absolute right-[4.5rem] top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
        <Trash2 />
      </div>
      <div className=" relative h-[16rem] rounded-xl overflow-clip">
        <Image
          fill
          quality={100}
          src={data.coverImage}
          className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
          alt="Showcase card"
        />
      </div>
      <Link href="/marketplace/slug" className="">
        <h3 className=" text-white text-2xl mt-2">{data?.title}</h3>
        <p className=" text-base text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
          {data?.price}
        </p>
      </Link>
    </div>
  );
};

export default AdminProductCard;
