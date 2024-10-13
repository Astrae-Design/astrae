import Image from "next/image";
import Link from "next/link";
import ProductPreview from "./product-preview";

const ProductCard = () => {
  return (
    <div className=" w-full group flex flex-col h-fit relative">
      <ProductPreview />
      <div className=" relative h-[16rem] rounded-xl overflow-clip">
        <Image
          fill
          quality={100}
          src="/assets/gallery/5.jpg"
          className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
          alt="Showcase card"
        />
      </div>
      <Link href="/marketplace/slug" className="">
        <h3 className=" text-white text-2xl mt-2">
          Faded — SaaS & App template
        </h3>
        <p className=" text-base text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
          $9.99
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
