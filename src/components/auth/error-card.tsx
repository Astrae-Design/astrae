"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useRouter } from "next/navigation";
import PrimaryButton from "../common/primarybutton";

export const ErrorCard = () => {
  const router = useRouter();

  return (
    <CardWrapper
      showHeader
      imgSrc="/assets/logo.svg"
      headerTitle="Oops! Something went wrong!"
      backButtonHighlight=""
      headerLabel="We run into a problem with the server. Please return to previous page and try again."
      backButtonHref=""
      backButtonLabel=""
    >
      <div className="w-full flex items-center mt-8 mb-4">
        <div onClick={() => router.back()} className=" w-full h-fit">
          <PrimaryButton>Return Back</PrimaryButton>
        </div>
      </div>
    </CardWrapper>
  );
};
