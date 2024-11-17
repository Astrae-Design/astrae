import AddToCartButton from "@/components/common/add-to-cart";
import ProductInfo from "@/components/common/product-info";
import ProductNotFound from "@/components/common/product-not-found";
import ProjectCarousel from "@/components/common/project-carousel";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import CallToAction from "@/sections/cta";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ICONS = {
  NEXT_JS: "/assets/icons/icon-next-js.svg",
  FIGMA: "/assets/icons/icon-figma-white.svg",
  GSAP: "/assets/icons/icon-gsap.svg",
  REACT: "/assets/icons/icon-react.svg",
  FRAMER_MOTION: "/assets/icons/icon-framer-motion.svg",
  TAILWIND: "/assets/icons/icon-tailwindcss.svg",
};

const ProductDetails: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await db.product.findUnique({
    where: { id: params.productId },
  });

  const images = [
    product?.coverImage,
    product?.imgOne,
    product?.imgTwo,
    product?.imgThree,
    product?.imgFour,
    product?.imgFive,
  ].filter((image): image is string => !!image);

  if (!product) {
    return (
      <div className=" min-h-screen">
        <ProductNotFound />
      </div>
    );
  }
  return (
    <div className=" w-full flex flex-col items-center">
      <div className="container">
        <div className=" w-full py-12 md:py-20 flex flex-col md:flex-row items-start flex-none text-start">
          <div className=" w-full flex flex-col gap-4">
            <h2 className="font-semibold tracking-tighter text-5xl lg:text-6xl w-full text-white max-w-full md:max-w-lg ">
              {product.title}
            </h2>
            <div className="flex items-center -space-x-4 mt-0 md:mt-0">
              {product.toolkit.map(
                (tool) =>
                  ICONS[tool] && (
                    <div
                      key={tool}
                      className="inline-flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full"
                    >
                      <div
                        className={`relative ${
                          tool === "NEXT_JS"
                            ? "-mb-2 h-6 w-6 md:h-8 md:w-8"
                            : "h-6 w-6 md:h-7 md:w-7"
                        }`}
                      >
                        <Image
                          fill
                          src={ICONS[tool]}
                          alt={tool}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className=" w-full">
            <p className=" text-base text-white mt-4 md:mt-2 md:max-w-lg text-start">
              {product.description}
            </p>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-6 w-full">
              <div className=" w-full">
                <AddToCartButton data={product} />
              </div>
              <Link className=" w-full md:w-1/2" href={product.previewLink}>
                <Button className=" w-full md:w-full">
                  Live Preview <ExternalLink className=" h-5 w-5 ml-3" />
                </Button>
              </Link>
            </div>
            <div className="py-4 w-full flex items-center justify-center md:justify-start">
              <h4 className=" text-sm text-white/70">
                Or unlock everything with membership
              </h4>
            </div>
          </div>
        </div>
      </div>
      <ProjectCarousel images={images} />
      <ProductInfo {...product} />
      <CallToAction />
    </div>
  );
};

export default ProductDetails;
