import { db } from "@/lib/db";
import ProductCard from "./product-card";

const SimilarProducts = async ({ id }: { id: string }) => {
  const similarProducts = await db.product.findMany({
    where: { id: { not: id } },
    take: 12,
  });

  const randomProducts = similarProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 6);

  if (randomProducts.length > 0) {
    return (
      <div className=" container py-12">
        <h4 className=" text-4xl md:text-5xl text-white font-semibold">
          Similar Templates
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-12">
          {randomProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    );
  }
};

export default SimilarProducts;
