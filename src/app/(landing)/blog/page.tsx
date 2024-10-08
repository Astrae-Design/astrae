import BlogCard from "@/components/common/blog-card";
import { client } from "@/sanity/lib/client";
import AnimatedHero from "@/sections/animated-hero";
import CallToAction from "@/sections/cta";
import { Post } from "@/utils/Interface";

async function getPosts() {
  const query = `
    *[_type == "post"] {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    }`;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

const Blogs = async () => {
  const posts: Post[] = await getPosts();
  return (
    <section>
      <AnimatedHero
        title="News & Insights"
        description="Discover our latests articles and news about industry, best practices and latest developments in React, Next.js, tailwindcss, shadcn and framer-motion."
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {posts?.length > 0 &&
            posts?.map((post) => <BlogCard key={post?._id} post={post} />)}
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default Blogs;
