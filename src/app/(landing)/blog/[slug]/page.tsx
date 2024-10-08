import { getPost, getPosts } from "@/hooks/get-blogs";
import { urlFor } from "@/sanity/lib/image";
import BlogHero from "@/sections/blog-hero";
import CallToAction from "@/sections/cta";
import { Post } from "@/utils/Interface";
import { PortableText, SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const response: Post = await getPost(params?.slug);
    const imageUrl = urlFor(response?.mainImage?.asset?._ref).url();

    if (!response) {
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist",
      };
    }

    return {
      title: `${response?.title} | Astrae Design`,
      description: `${response?.excerpt}`,
      openGraph: {
        title: response?.title,
        description: response?.excerpt,
        images: [imageUrl],
      },
      twitter: {
        card: "summary_large_image",
        title: `${response?.title} | Astrae Design`,
        description: response?.excerpt,
        images: [imageUrl],
        creator: "@astraedesign0",
      },
      icons: "/favicon.ico",
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist",
    };
  }
}

export async function generateStaticParams() {
  try {
    const response: Post[] = await getPosts();

    if (response.length === 0) return [];

    return response.map((post) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const revalidate = 60;

interface Params {
  params: {
    slug: string;
  };
}
const BlogDetailPage = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);
  const imageUrl = urlFor(post?.mainImage?.asset?._ref).url();
  const altText = post?.mainImage?.alt || "Blog image";
  return (
    <section>
      <BlogHero
        title={post?.title}
        description={new Date(post?.publishedAt).toDateString()}
      />
      <div className=" container -mt-6 md:-mt-12">
        <div className=" w-full max-w-4xl mx-auto h-[18rem] md:h-[32rem] relative overflow-clip rounded-xl mb-14">
          <Image
            fill
            quality={100}
            src={imageUrl}
            className=" object-cover rounded-xl md:scale-110"
            alt={altText}
          />
        </div>
        <div className="  prose prose-lg mx-auto text-justify max-w-4xl prose-mb-2 prose-code:bg-[#262626] prose-code:text-[#0096FA] prose-p:text-white/70 prose-p:font-normal prose-headings:text-white">
          <PortableText
            value={post?.body}
            components={portableTextComponents}
          />
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

interface PortableTextImageProps {
  value: SanityImageAssetDocument;
}

const portableTextComponents = {
  types: {
    image: ({ value }: PortableTextImageProps) => (
      <div className=" w-full h-[18rem] md:h-[32rem] relative mb-20">
        <Image
          fill
          className=" object-cover border border-white/10 rounded-xl"
          src={urlFor(value).url()}
          quality={100}
          alt="Post"
        />
      </div>
    ),
  },
};

export default BlogDetailPage;
