"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { register } from "../../../actions/register";
import { PasswordInput } from "../ui/password-input";
import { Separator } from "../ui/separator";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import PrimaryButton from "../common/primarybutton";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <CardWrapper
      imgSrc={success ? "" : "/assets/logo.svg"}
      headerTitle={success ? "" : "Create Account"}
      backButtonHighlight="Login"
      headerLabel={success ? "" : "Enter details for your new account"}
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocial={success ? false : true}
      showHeader={success ? false : true}
      showFooter={success ? false : true}
    >
      <div>
        {!success ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className=" w-full flex items-center justify-center mb-4 mt-4">
                <Separator
                  className=" w-1/3 opacity-15"
                  orientation="horizontal"
                />
                <p className=" text-white text-sm opacity-70 mx-4">OR</p>
                <Separator
                  className=" w-1/3 opacity-15"
                  orientation="horizontal"
                />
              </div>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Full Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
              </div>
              <FormError message={error} />
              <FormSuccess message={success} />
              <div className="mt-3" />
              <button
                type="submit"
                disabled={isPending}
                className="relative w-full h-10 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
              >
                <div className=" absolute inset-0">
                  <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                  <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                  <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
                </div>
                <span className=" inline-flex items-center">
                  {isPending && <Loader2 className="animate-spin text-white" />}
                  {!isPending && "Create Account"}
                </span>
              </button>
            </form>
          </Form>
        ) : (
          <div className=" w-full flex flex-col items-center pt-6 pb-4">
            <div className=" h-12 w-12 relative">
              <Image fill src="/assets/icons/icon-email.svg" alt="Email" />
            </div>
            <h3 className="text-2xl mt-6 tracking-tighter font-semibold text-white">
              Check your inbox
            </h3>
            <p className="text-white/70 tracking-tight text-sm text-center">
              We sent you an activation link, click it to activate your account.
              Please be sure to check your spam folder too.
            </p>
            <div className="w-full mt-4 md:mt-6">
              <Link href="/login">
                <PrimaryButton>Already verified? Login</PrimaryButton>
              </Link>
            </div>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};
