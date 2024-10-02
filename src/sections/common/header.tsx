import { Cart } from "@/components/common/cart";
import { MarketplaceMenu } from "@/components/common/marketplace-menu";
import PrimaryButton from "@/components/common/primarybutton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-50">
      <div className=" absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center md:border border-white/15 md:bg-black/80 md:backdrop-blur md:p-2.5 rounded-xl max-w-full mx-auto relative">
          <Link className="h-8" href="/">
            <div className="inline-flex gap-1.5 justify-center items-center">
              <div className="h-8 w-8 relative">
                <Image fill src="/assets/logo.svg" alt="Logo" />
              </div>
              <span className=" text-white font-semibold text-base">
                Astrae
              </span>
            </div>
          </Link>
          <div className="hidden lg:block">
            <nav className=" flex gap-8 lg:-mr-14 items-center text-sm">
              <MarketplaceMenu />
              <a
                className="text-white/70 -ml-5 hover:text-white transition"
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
            <div className="flex items-center gap-2">
              <div className=" inline-flex items-center gap-3">
                <div className=" hidden md:block">
                  <Cart />
                </div>

                <Button
                  variant="secondary"
                  className="hidden md:block bg-transparent hover:bg-transparent  "
                >
                  Login
                </Button>
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
