import BlogCard from "@/components/common/blog-card";
import { Button } from "@/components/ui/button";
import { getPosts } from "@/hooks/get-blogs";
import AnimatedHero from "@/sections/animated-hero";
import CallToAction from "@/sections/cta";
import { Post } from "@/utils/Interface";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 60;

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "web design blog",
    "React tutorials",
    "Next.js blog",
    "UI/UX tips",
    "Tailwind CSS articles",
    "Framer Motion guides",
    "front-end development blog",
    "Astrae Design blogs",
    "web development tutorials",
    "modern web design articles",
    "React landing page tutorials",
    "UI design resources",
  ],
  title: "Blog",
  description:
    "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
  openGraph: {
    title: "Astrae Design Blog | Web Design & Development Insights",
    siteName: "Astrae Design",
    description:
      "Stay up-to-date with the latest trends in web design and development. Explore blog posts covering topics like React, Next.js, Tailwind CSS, Framer Motion, and UI/UX design from Astrae Design experts.",
    images: ["/assets/blog-thumbnail.webp"],
    url: `${baseUrl}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrae Design Blog | Web Design & Development Insights",
    description:
      "Discover the latest web design trends, tutorials, and insights on Astrae Design's blog. From React and Next.js to Tailwind CSS and Framer Motion, we've got you covered.",
    images: ["/assets/blog-thumbnail.webp"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

const Blogs = async ({ searchParams }: { searchParams: { page?: string } }) => {
  const currentPage = Number(searchParams.page) || 1;
  const postsPerPage = 6;

  const posts: Post[] = await getPosts();
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = posts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <section>
      <AnimatedHero
        title="News & Insights"
        description="Discover our latest articles and news about industry, best practices and latest developments in React, Next.js, Tailwind CSS, ShadCN and Framer Motion."
      />
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {paginatedPosts?.length > 0 &&
            paginatedPosts?.map((post) => (
              <BlogCard key={post?._id} post={post} />
            ))}
        </div>

        <div className="flex justify-center gap-2 mt-8 mb-12">
          <Button
            size="icon"
            className={`${currentPage === 1 && "pointer-events-none opacity-50"}`}
            asChild
          >
            <Link href={`/blog?page=${currentPage - 1}`}>
              <ChevronLeft />
            </Link>
          </Button>

          {pageNumbers.map((number) => (
            <Button
              key={number}
              size="icon"
              className={`${
                currentPage === number
                  ? "bg-[#0096FA] hover:bg-[#0096FA]/90 text-white"
                  : ""
              }`}
              asChild
            >
              <Link href={`/blog?page=${number}`}>{number}</Link>
            </Button>
          ))}

          <Button
            size="icon"
            className={`${currentPage >= totalPages && "pointer-events-none opacity-50"}`}
            asChild
          >
            <Link href={`/blog?page=${currentPage + 1}`}>
              <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
      <CallToAction />
    </section>
  );
};

export default Blogs;
