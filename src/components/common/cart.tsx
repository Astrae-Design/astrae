import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import PrimaryButton from "./primarybutton";
import { Checkbox } from "../ui/checkbox";

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="h-6 w-6 relative md:opacity-70 cursor-pointer md:hover:opacity-100 transition">
          <Image fill src="/assets/icons/icon-cart.svg" alt="Cart" />
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <Separator className="mt-4 opacity-15" orientation="horizontal" />
        <div className="flex flex-col w-full items-center h-full justify-between">
          <div className="flex flex-col w-full items-center h-full justify-center">
            <div className=" w-full h-[12rem] relative">
              <Image
                fill
                className=" object-contain"
                src="/assets/empty-cart.png"
                alt="Empty cart"
                quality={100}
              />
            </div>

            <p className=" text-white/70 text-sm lg:text-base">
              No items in cart
            </p>
          </div>
          <div className=" h-1/2 flex flex-col items-center w-full justify-end pb-12">
            <Separator className="mb-4 opacity-15" orientation="horizontal" />
            <div className=" w-full flex items-center justify-between text-white">
              <p>Total</p>
              <h4 className=" font-medium text-2xl">$0.00</h4>
            </div>
            <Separator className="mt-4 opacity-15" orientation="horizontal" />
            <div className="flex items-center space-x-2 w-full text-white mt-8 mb-4">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm lg:text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
            <SheetClose className="mt-4" asChild>
              <div className="w-full">
                <PrimaryButton>Checkout</PrimaryButton>
              </div>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
