"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../auth/form-error";
import { FormSuccess } from "../auth/form-success";
import { FileUpload } from "./file-upload";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProductSchema } from "@/schemas";
import { z } from "zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const AddProductForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      price: "",
      category: "",
      codeLink: "",
      figmaLink: "",
      description: "",
      detailedDescription: "",
      pages: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ProductSchema>) => {
    setError("");
    setSuccess("");
    console.log(values);

    startTransition(() => {});
  };

  return (
    <div className=" mt-4">
      <Form {...form}>
        <FileUpload />
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12">
          <div className="grid grid-cols-2 w-full gap-x-8 gap-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="Faded — SaaS & App template"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="$0"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="Enter description (Max 250 characters)"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="detailedDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detailed Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="Enter detailed description (Max 850 characters)"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pages</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="List all pages separated by commas"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="startup-landing-page">
                        Startup Landing Page
                      </SelectItem>
                      <SelectItem value="saas-landing-page">
                        SAAS Landing Page
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="figmaLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Figma Link</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="https://"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="codeLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Code Link</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/20 bg-black hover:bg-black"
                      {...field}
                      disabled={isPending}
                      placeholder="https://"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
