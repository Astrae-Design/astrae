"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { Input } from "@/components/ui/input";
import { ResetSchema } from "@/schemas";
import { Loader2 } from "lucide-react";
import { reset } from "../../../actions/reset";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      showHeader
      imgSrc="/assets/logo.svg"
      headerTitle="Forgot Password"
      backButtonHighlight="Login"
      headerLabel="Enter email of your account to reset password"
      backButtonLabel="Remember password?"
      backButtonHref="/login"
      showFooter
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-4">
          <div className="space-y-3 mb-3">
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
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          {!error && !success && <div className="h-3 text-white" />}
          <button
            type="submit"
            disabled={isPending}
            className="relative  w-full h-10 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-base bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
          >
            <div className=" absolute inset-0">
              <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
              <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
              <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
            </div>
            <span className=" inline-flex items-center">
              {isPending && <Loader2 className="animate-spin" />}
              {!isPending && "Send Reset Email"}
            </span>
          </button>
        </form>
      </Form>
    </CardWrapper>
  );
};
