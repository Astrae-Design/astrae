import ProductList from "@/components/common/product-list";
import CallToAction from "@/sections/cta";
import Reviews from "@/sections/reviews";
import Value from "@/sections/value";
import { Metadata } from "next";

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "React template marketplace",
    "Tailwind CSS templates for sale",
    "Framer Motion animations templates",
    "Astrae Design marketplace",
    "web design templates",
    "buy landing page templates",
    "Next.js UI kits marketplace",
    "React UI templates",
    "premium web templates",
    "landing page marketplace",
    "modern web templates",
    "startup website templates for sale",
  ],
  title: "Marketplace",
  description:
    "Browse Astrae Design's marketplace for premium React templates built with Next.js, Tailwind CSS, and Framer Motion. Discover high-quality, responsive templates perfect for startups, agencies, and creatives.",
  openGraph: {
    title: "Marketplace | Astrae Design",
    siteName: "Astrae Design",
    description:
      "Explore Astrae Design's marketplace for beautifully crafted web templates. Find premium landing page templates built with React, Tailwind CSS, and Framer Motion.",
    images: ["/assets/marketplace-thumbnail.png"],
    url: `${baseUrl}/marketplace`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace | Astrae Design",
    description:
      "Discover Astrae Design's marketplace filled with high-quality web templates built with React, Tailwind CSS, and Framer Motion. Perfect for startups, agencies, and creatives.",
    images: ["/assets/marketplace-thumbnail.png"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

const MarketplacePage = () => {
  return (
    <div className=" pt-12 md:pt-0">
      <Value />
      <ProductList />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default MarketplacePage;
