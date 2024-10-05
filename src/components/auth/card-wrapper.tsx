"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string | null;
  headerTitle: string | null;
  backButtonLabel: string;
  backButtonHighlight: string;
  backButtonHref: string;
  imgSrc: string;
  showSocial?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const CardWrapper = ({
  children,
  headerTitle,
  imgSrc,
  headerLabel,
  backButtonLabel,
  backButtonHighlight,
  backButtonHref,
  showSocial,
  showHeader,
  showFooter,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md bg-[#161616]/90 backdrop-blur-lg border border-white/10">
      {showHeader && (
        <CardHeader>
          <Header imgSrc={imgSrc} title={headerTitle} label={headerLabel} />
        </CardHeader>
      )}
      <CardContent>
        {showSocial && <Social />}
        {children}
      </CardContent>
      {showFooter && (
        <CardFooter>
          <BackButton
            label={backButtonLabel}
            highlight={backButtonHighlight}
            href={backButtonHref}
          />
        </CardFooter>
      )}
    </Card>
  );
};
