"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

export const WelcomeForm = () => {
  return (
    <CardWrapper
      imgSrc="/assets/logo.svg"
      backButtonHighlight=""
      headerTitle="Welcome to Astrae"
      headerLabel=""
      backButtonLabel=""
      backButtonHref=""
      showSocial
      showHeader
    >
      <div className=" w-full mt-4 mb-4">
        <div className=" w-full flex items-center justify-center mb-4">
          <Separator className=" w-1/3 opacity-15" orientation="horizontal" />
          <p className=" text-white text-sm opacity-70 mx-4">OR</p>
          <Separator className=" w-1/3 opacity-15" orientation="horizontal" />
        </div>
        <Link href="/login">
          <Button className=" w-full bg-[#343434] hover:bg-[#3C3C3C] inline-flex items-center">
            <Image
              className="mr-3 -ml-3"
              height={24}
              width={24}
              src="/assets/icons/icon-email.svg"
              alt="Email"
            />
            Continue with Email
          </Button>
        </Link>
      </div>
    </CardWrapper>
  );
};
