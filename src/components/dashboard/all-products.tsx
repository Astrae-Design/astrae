/* eslint-disable @typescript-eslint/no-explicit-any */
import AdminProductCard from "../common/admin-product-card";

interface ProductListProps {
  items: any[];
}

const AllProducts: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="grid mt-10 container grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-10 w-full">
      {items.map((item) => (
        <AdminProductCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default AllProducts;
