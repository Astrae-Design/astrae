import { MarketplaceMenu } from "@/components/common/marketplace-menu";
import PrimaryButton from "@/components/common/primarybutton";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none">
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-full mx-auto">
          <div className="h-10 inline-flex gap-1.5 justify-center items-center">
            <div className="h-8 w-8 relative">
              <Image fill src="/assets/logo.svg" alt="Logo" />
            </div>
            <span className=" text-white font-semibold text-base">Astrae</span>
          </div>
          <div className="hidden md:block">
            <nav className=" flex gap-8 items-center text-sm">
              <MarketplaceMenu />
              <a
                className="text-white/70 -ml-3 hover:text-white transition"
                href="#"
              >
                Pricing
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Contact
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Blog
              </a>
              <a className="text-white/70 hover:text-white transition" href="#">
                Studio IX
              </a>
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-4">
              <div className=" inline-flex items-center gap-1.5">
                <Button variant="secondary" className=" px-0 w-10 group hidden md:block">
                  <div className="h-6 w-6 relative opacity-70 group-hover:opacity-100 transition">
                    <Image fill src="/assets/icons/icon-cart.svg" alt="Cart" />
                  </div>
                </Button>

                <Button variant="secondary" className="hidden md:block">Login</Button>
              </div>
              <PrimaryButton>Get Unlimited Access</PrimaryButton>
            </div>

            <div className="h-8 w-8 relative md:hidden">
              <Image fill src="/assets/icons/icon-menu.svg" alt="Menu" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
