"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { newVerification } from "../../../actions/new-verification";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition(); // Add useTransition hook

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const handleRetry = () => {
    router.refresh();
  };

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token!");
      return;
    }

    // Start the transition to track pending state
    startTransition(() => {
      newVerification(token)
        .then((data) => {
          setSuccess(data.success);
          setError(data.error);
        })
        .catch(() => {
          setError("Something went wrong!");
        });
    });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      showHeader
      imgSrc="/assets/logo.svg"
      backButtonHighlight=""
      headerTitle="Confirm Verification"
      headerLabel="We're confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="w-full flex flex-col items-center justify-center">
        {isPending && (
          <Loader2 size={36} className=" text-white animate-spin mt-6 mb-2" />
        )}
        {success && (
          <div>
            <FormSuccess message={success} />
            {!isPending && !error && success && (
              <Link href="/login">
                <div className=" mb-4">
                  <button
                    onClick={handleRetry}
                    className="relative w-full h-10 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-base bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
                  >
                    <div className=" absolute inset-0">
                      <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                      <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                      <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
                    </div>
                    <span className=" inline-flex items-center">Login</span>
                  </button>
                </div>
              </Link>
            )}
          </div>
        )}
        {!success && (
          <div>
            <FormError message={error} />
            {!isPending && !success && error && (
              <div className=" mb-4">
                <button
                  onClick={handleRetry}
                  className="relative w-full h-10 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-base bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
                >
                  <div className=" absolute inset-0">
                    <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                    <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                    <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
                  </div>
                  <span className=" inline-flex items-center">Retry</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};
