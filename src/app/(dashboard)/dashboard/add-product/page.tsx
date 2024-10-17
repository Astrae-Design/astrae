import PrimaryButton from "@/components/common/primarybutton";
import AddProductForm from "@/components/form/add-product-form";
import { ChevronLeft, Save } from "lucide-react";
import Link from "next/link";

const AddProduct = () => {
  return (
    <div className=" h-screen w-full flex flex-col">
      <div className=" w-full flex flex-col md:flex-row md:items-center justify-between z-50 sticky top-16 pt-8 pb-4 bg-black">
        <p className=" inline-flex items-center gap-2 text-2xl md:text-2xl font-semibold">
          {" "}
          <ChevronLeft /> Add New Template
        </p>

        <div className="flex items-center mt-4 md:mt-0 gap-2">
          <div className=" w-fit text-nowrap">
            <Link href="/dashboard/add-product">
              <PrimaryButton>
                <Save className="mr-3" size={20} /> Publish Template
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
