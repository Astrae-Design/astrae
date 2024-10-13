import ProductCard from "./product-card";

const SimilarProducts = () => {
  return (
    <div className=" container py-12">
      <h4 className=" text-4xl md:text-5xl text-white font-semibold">
        Similar Templates
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default SimilarProducts;
