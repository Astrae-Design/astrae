"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { Loader2 } from "lucide-react";
import { login } from "../../../actions/login";
import { PasswordInput } from "../ui/password-input";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const errorUrl =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with a different provider"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <CardWrapper
      imgSrc="/assets/logo.svg"
      headerTitle="Welcome to Astrae"
      backButtonHighlight="Sign Up"
      headerLabel="Enter your account details to continue"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial={false}
      showFooter
      showHeader
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
          <div className="space-y-3">
            {showTwoFactor && (
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="123456"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Email"
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PasswordInput
                          {...field}
                          disabled={isPending}
                          placeholder="Password"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className=" w-full flex items-center justify-end">
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="px-0 text-[#0096FA] font-normal "
                  >
                    <Link className=" w-fit" href="/reset">
                      Forgot password?
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
          <FormError message={error || errorUrl} />
          <FormSuccess message={success} />
          <button
            type="submit"
            disabled={isPending}
            className="relative  w-full h-10 mt-3 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-base bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
          >
            <div className=" absolute inset-0">
              <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
              <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
            </div>
            <span className=" inline-flex items-center">
              {isPending && <Loader2 className="animate-spin" />}
              {!isPending && "Continue"}
            </span>
          </button>
        </form>
      </Form>
    </CardWrapper>
  );
};
