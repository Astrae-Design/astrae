import ProductCard from "./product-card";

const ProductList = () => {
  return (
    <div className=" container py-12">
      <h4 className=" text-4xl md:text-5xl text-white font-semibold">
        New Templates
      </h4>
      <p className=" text-white/70 font-normal text-base md:text-lg mt-2">
        The latest templates from the Astrae community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-12">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
