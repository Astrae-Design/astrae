import ProductList from "@/components/common/product-list";
import { db } from "@/lib/db";
import CallToAction from "@/sections/cta";
import Reviews from "@/sections/reviews";
import Value from "@/sections/value";
import { Metadata } from "next";

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const revalidate = 60;

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
  title: "Products",
  description:
    "Browse Astrae Design's marketplace for premium React templates built with Next.js, Tailwind CSS, and Framer Motion. Discover high-quality, responsive templates perfect for startups, agencies, and creatives.",
  openGraph: {
    title: "Products | Astrae Design",
    siteName: "Astrae Design",
    description:
      "Explore Astrae Design's marketplace for beautifully crafted web templates. Find premium landing page templates built with React, Tailwind CSS, and Framer Motion.",
    images: ["/assets/marketplace-thumbnail.webp"],
    url: `${baseUrl}/marketplace`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Astrae Design",
    description:
      "Discover Astrae Design's marketplace filled with high-quality web templates built with React, Tailwind CSS, and Framer Motion. Perfect for startups, agencies, and creatives.",
    images: ["/assets/marketplace-thumbnail.webp"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

const toNormalCase = (text: string) => {
  return text
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const toKebabCase = (text: string) => {
  return text.toLowerCase().replace(/_/g, "-").replace(/\s+/g, "-");
};

const ProductsPage = async () => {
  const allProducts = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  const currentMonth = new Date().getMonth();
  const newProducts = allProducts.filter(
    (product) => new Date(product.createdAt).getMonth() === currentMonth
  );

  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ];

  return (
    <div className=" pt-12 md:pt-0">
      <Value />
      <ProductList
        title="Latest Templates"
        description=" The latest templates from the Astrae community."
        items={newProducts}
      />
      <ProductList
        title="All Templates"
        description="All templates from the Astrae community"
        items={allProducts}
      />
      {categories.map((category) => (
        <div id={toKebabCase(category)} key={category}>
          <ProductList
            title={`${toNormalCase(category)}`}
            description={`Templates in the ${toNormalCase(category)} category`}
            items={allProducts.filter(
              (product) => product.category === category
            )}
          />
        </div>
      ))}
      <div className="h-[8rem]" />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default ProductsPage;
