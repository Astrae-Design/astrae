import { CardWrapper } from "@/components/auth/card-wrapper";
import { TriangleAlert } from "lucide-react";

export const ErrorCard = () => {
  return (
    <CardWrapper
      showHeader
      imgSrc="/assets/logo.svg"
      showFooter
      headerTitle="Oops! Something went wrong!"
      backButtonHighlight="Welcome"
      headerLabel="lorem ipsum dolor sit amet, consectetur"
      backButtonHref="/welcome"
      backButtonLabel="Return starting point"
    >
      <div className="w-full flex items-center justify-center">
        <TriangleAlert className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
