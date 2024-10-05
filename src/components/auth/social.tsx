"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-y-3 mt-4">
      <Button
        size="lg"
        className="w-full bg-[#0096FA] hover:bg-[#0096FA]/90 inline-flex items-center"
        onClick={() => onClick("google")}
      >
        <FaGoogle className="h-5 w-5 mr-3" />
        Continue with Google
      </Button>
      <Button
        size="lg"
        className="w-full bg-[#343434] hover:bg-[#3C3C3C] inline-flex items-center"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5 mr-3" />
        Continue with GitHub
      </Button>
    </div>
  );
};
