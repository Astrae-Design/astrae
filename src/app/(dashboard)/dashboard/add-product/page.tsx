import AddProductForm from "@/components/form/add-product-form";
import { ChevronLeft } from "lucide-react";

const AddProduct = () => {
  return (
    <div className=" h-screen w-full flex flex-col bg-black">
      <div className=" w-full bg-black border-b border-b-white/10 sticky top-16 pt-8 pb-4 z-50">
        <div className=" container w-full flex flex-col md:flex-row md:items-center justify-between bg-black">
          <p className=" inline-flex items-center gap-2 text-2xl md:text-2xl font-semibold">
            {" "}
            <ChevronLeft /> Add New Template
          </p>
        </div>
      </div>
      <div className="container pt-8 pb-28">
        <AddProductForm />
      </div>
    </div>
  );
};

export default AddProduct;
