import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/utils/Interface";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  post: Post;
}

const BlogCard = ({ post }: Props) => {
  const imageUrl = urlFor(post?.mainImage?.asset?._ref).url();
  const altText = post?.mainImage?.alt || "Blog image";
  return (
    <Link className=" group" href={`/blog/${post?.slug?.current}`}>
      <div className=" w-full h-fit flex flex-col">
        <div className=" w-full h-[16rem] relative overflow-clip rounded-xl">
          <Image
            fill
            quality={100}
            src={imageUrl}
            className=" object-cover rounded-xl group-hover:scale-110 transition-all ease-in-out duration-300"
            alt={altText}
          />
        </div>
        <div className=" w-fit px-2 py-1.5 inline-flex items-center justify-center rounded-lg mt-4 bg-[#262626] text-white text-base">
          {new Date(post?.publishedAt).toDateString()}
        </div>
        <h3 className=" text-white text-2xl mt-2">{post?.title}</h3>
        <p className=" text-base text-white/70 group-hover:text-white transition-all ease-in-out duration-300 line-clamp-4">
          {post?.excerpt}
        </p>
        <Button
          variant="link"
          className=" hover:no-underline no-underline text-white/70 group-hover:text-[#0096FA] w-fit px-0"
        >
          Read More{" "}
          <ChevronRight className=" ml-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" />
        </Button>
      </div>
    </Link>
  );
};

export default BlogCard;
