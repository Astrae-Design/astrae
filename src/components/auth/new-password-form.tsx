"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { NewPasswordSchema } from "@/schemas";

import { Loader2 } from "lucide-react";
import { newPassword } from "../../../actions/new-password";
import { PasswordInput } from "../ui/password-input";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      newPassword(values, token).then((data) => {
        if (data?.error) {
          form.reset();
          setError(data?.error);
        }
        if (data?.success) {
          form.reset();
          setSuccess(data?.success);
          router.push(`/password-reset-successful`);
        }
      });
    });
  };

  return (
    <CardWrapper
      imgSrc="/assets/logo.svg"
      showHeader
      headerTitle="Set New Password"
      headerLabel="Please remember this new password"
      backButtonHighlight=""
      backButtonLabel=""
      backButtonHref=""
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-4">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      disabled={isPending}
                      placeholder="New Password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <button
            type="submit"
            disabled={isPending}
            className="relative  w-full h-10 mt-3 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-sm bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
          >
            <div className=" absolute inset-0">
              <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
              <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
            </div>
            <span className=" inline-flex items-center">
              {isPending && <Loader2 className="animate-spin" />}
              {!isPending && "Reset Password"}
            </span>
          </button>
          <div />
        </form>
      </Form>
    </CardWrapper>
  );
};
