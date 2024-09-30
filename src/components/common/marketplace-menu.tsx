"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

const components: {
  title: string;
  href: string;
  src: string;
  srcActive: string;
}[] = [
  {
    title: "Startup Landing Page",
    href: "/",
    src: "/assets/icons/icon-startup.svg",
    srcActive: "/assets/icons/icon-startup-active.svg",
  },
  {
    title: "Agency Website",
    href: "/",
    src: "/assets/icons/icon-agency.svg",
    srcActive: "/assets/icons/icon-agency-active.svg",
  },
  {
    title: "SAAS Landing Page",
    href: "/",
    src: "/assets/icons/icon-saas-landing.svg",
    srcActive: "/assets/icons/icon-saas-landing-active.svg",
  },
  {
    title: "Marketing Page",
    href: "/",
    src: "/assets/icons/icon-marketing.svg",
    srcActive: "/assets/icons/icon-marketing-active.svg",
  },
  {
    title: "SAAS Waitlist ",
    href: "/",
    src: "/assets/icons/icon-saas-waitlist.svg",
    srcActive: "/assets/icons/icon-saas-waitlist-active.svg",
  },
  {
    title: "Dev Portfolio",
    href: "/",
    src: "/assets/icons/icon-dev-portfolio.svg",
    srcActive: "/assets/icons/icon-dev-portfolio-active.svg",
  },
];

export function MarketplaceMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <a className="text-white/70 hover:text-white transition" href="#">
              Marketplace
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  className=" group"
                  key={component.title}
                  title={component.title}
                  src={component.src}
                  srcActive={component.srcActive}
                  href={component.href}
                >
                  <div className=" inline-flex gap-2 items-center">
                    <p>Browse templates</p>
                    <div className="h-2 w-4 relative opacity-70 group-hover:opacity-100 transition hidden group-hover:block">
                      <Image
                        fill
                        className=" object-contain"
                        src="/assets/icons/icon-arrow-right.svg"
                        alt="Arrow right"
                      />
                    </div>
                  </div>
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    src: string;
    srcActive: string;
  }
>(({ className, title, src, srcActive, children, ...props }, ref) => {
  return (
    <li className="">
      <NavigationMenuLink className="group" asChild>
        <div className="flex items-center">
          <div className="h-12 aspect-square inline-flex items-center justify-center rounded-md border border-white/10 group-hover:border-none group-hover:bg-white bg-[#161616]/40 backdrop-blur-sm">
            <div className="h-7 w-7 relative">
              <Image
                fill
                className="object-contain group-hover:hidden"
                src={src}
                alt={title}
              />
              <Image
                fill
                className="object-contain hidden group-hover:block"
                src={srcActive}
                alt={title}
              />
            </div>
          </div>

          <a
            ref={ref}
            className={cn(
              "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-none transition-colors ",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white/70 group-hover:text-white focus:text-white">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-white/40 group-hover:text-white/70 focus:text-white/70">
              {children}
            </p>
          </a>
        </div>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
