import { Product } from "@/types";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteProductPopup from "../dashboard/delete-product-popup";

interface AdminProductCard {
  data: Product;
}

const AdminProductCard: React.FC<AdminProductCard> = ({ data }) => {
  return (
    <div className=" w-full group flex flex-col h-fit relative">
      <Link href={data.previewLink}>
        <div className=" cursor-pointer group-hover:opacity-100 opacity-0 ease-in-out transition-opacity duration-100 h-12 aspect-square rounded-full absolute right-4 top-4 bg-black/50 backdrop-blur-md z-10 inline-flex items-center justify-center">
          <ExternalLink className=" h-5 w-5" />
        </div>
      </Link>
      <DeleteProductPopup />
      <div className=" relative h-[16rem] rounded-xl overflow-clip">
        <Image
          fill
          quality={100}
          src={data.coverImage}
          className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300 border border-white/15"
          alt="Showcase card"
        />
      </div>
      <Link href={`/products/${data.id}`}>
        <h3 className=" text-white text-xl mt-2">{data?.title}</h3>
        <p className=" text-lg text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
          {data?.price}
        </p>
      </Link>
    </div>
  );
};

export default AdminProductCard;
