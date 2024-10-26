"use server";

import { db } from "@/lib/db";
import { ProductSchema } from "@/schemas";
import { z } from "zod";

export const addProduct = async (
  values: z.infer<typeof ProductSchema>,
  uploadedFileUrls: string[]
) => {
  const validatedFields = ProductSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const {
    title,
    price,
    category,
    codeLink,
    figmaLink,
    previewLink,
    description,
    detailedDescription,
    pages,
    toolkit,
  } = validatedFields.data;

  try {
    await db.product.create({
      data: {
        title,
        price,
        coverImage: uploadedFileUrls[0],
        imgOne: uploadedFileUrls[1],
        imgTwo: uploadedFileUrls[2],
        imgThree: uploadedFileUrls[3],
        imgFour: uploadedFileUrls[4],
        imgFive: uploadedFileUrls[5],
        category,
        codeLink,
        previewLink,
        figmaLink,
        description,
        detailedDescription,
        pages,
        toolkit,
      },
    });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }

  return { success: "Product added successfully" };
};
