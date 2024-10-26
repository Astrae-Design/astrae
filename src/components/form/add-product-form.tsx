/* eslint-disable @typescript-eslint/no-explicit-any */
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ProductSchema } from "@/schemas";
import { Loader2, Save } from "lucide-react";
import { z } from "zod";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Category, Toolkit } from "@prisma/client";
import { addProduct } from "../../../actions/add-product";
import { useRouter } from "next/navigation";

const AddProductForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const [uploadedFileUrls, setUploadedFileUrls] = useState<string[]>([]);

  const router = useRouter();

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      price: "",
      category: undefined,
      codeLink: "",
      figmaLink: "",
      previewLink: "",
      description: "",
      detailedDescription: "",
      pages: "",
      toolkit: [],
    },
  });

  const onSubmit = (values: z.infer<typeof ProductSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      addProduct(values, uploadedFileUrls).then((data) => {
        if (data?.success) {
          form.reset();
          setSuccess(data.success);
          router.push("/admin/dashboard");
        }
        if (data?.error) {
          setError(data.error);
        }
      });
    });
  };

  const toolkitOptions = [
    { id: Toolkit.NEXT_JS, label: "Next.js" },
    { id: Toolkit.REACT, label: "React" },
    { id: Toolkit.FIGMA, label: "Figma" },
    { id: Toolkit.FRAMER_MOTION, label: "Framer Motion" },
    { id: Toolkit.TAILWIND, label: "Tailwindcss" },
  ];

  return (
    <div className=" mt-4">
      <Form {...form}>
        <FileUpload
          onChange={(fileUrls: any) => setUploadedFileUrls(fileUrls)}
        />
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12">
          <FormField
            control={form.control}
            name="toolkit"
            render={({ field }) => (
              <FormItem className="">
                <div className="mb-2">
                  <FormLabel>Toolkit</FormLabel>
                  <FormDescription className=" text-base">
                    Select tools this template is built with
                  </FormDescription>
                </div>
                <div className="flex flex-row flex-wrap w-full gap-6">
                  {toolkitOptions.map((item) => (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-center gap-2.5"
                    >
                      <FormControl>
                        <Checkbox
                          className="h-5 w-5 -mb-1.5"
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, item.id])
                              : field.onChange(
                                  field.value.filter(
                                    (value) => value !== item.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-base font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-8 gap-y-6 mt-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
                      {Object.keys(Category).map((category) => (
                        <SelectItem key={category} value={category}>
                          {category
                            .toLowerCase()
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (c) => c.toUpperCase())}
                        </SelectItem>
                      ))}
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
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
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
              name="previewLink"
              render={({ field }) => (
                <FormItem className=" col-span-2">
                  <FormLabel>Live Preview Link</FormLabel>
                  <FormControl>
                    <Input
                      className="border border-white/0 bg-[#171717] hover:bg-[#171717]"
                      {...field}
                      disabled={isPending}
                      placeholder="https://example.vercel.app"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error || success ? <div className=" mt-6" /> : null}
          <FormError message={error} />
          <FormSuccess message={success} />

          <div className="flex w-full items-center justify-end mt-6 md:mt-4 py-2">
            <div className=" w-full md:w-fit text-nowrap">
              <button
                type="submit"
                className="relative  w-full h-10 inline-flex items-center justify-center hover:scale-105 ease-in-out transition-all duration-200 px-3 md:px-4 rounded-lg font-medium text-white text-sm md:text-base bg-gradient-to-b from-[#0245A6] to-[#0096FA] shadow-[0px_0px_12px_#0096FA]"
              >
                <div className=" absolute inset-0">
                  <div className=" rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
                  <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
                  <div className=" absolute inset-0 shadow-[0_0_10px_rgb(0,150,250,.7)_inset] rounded-lg" />
                </div>
                {isPending && !error && !success ? (
                  <span className=" inline-flex items-center">
                    <Loader2 className=" animate-spin mr-3" /> Adding Product...
                  </span>
                ) : null}
                {!isPending && (
                  <span className=" inline-flex items-center">
                    <Save className="mr-3" size={20} /> Publish
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProductForm;
