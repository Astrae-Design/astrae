"use client"

import AddProductForm from "@/components/form/add-product-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  const router = useRouter();
  return (
    <div className=" h-screen w-full flex flex-col bg-black">
      <div className=" w-full bg-black border-b border-b-white/10 sticky top-16 pt-8 pb-4 z-50">
        <div className=" container w-full flex flex-col md:flex-row md:items-center justify-between bg-black">
          <p className=" inline-flex items-center gap-2 md:gap-3 text-2xl md:text-2xl font-semibold">
            <Button
              onClick={() => router.back()}
              variant="ghost"
              className=" h-10 aspect-square px-0 hover:bg-[#161616] hover:text-white"
            >
              <ChevronLeft />
            </Button>
            Add New Template
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
