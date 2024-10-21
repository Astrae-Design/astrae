"use server";

import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function uploadToCloudinary(formData: FormData) {
  const file = formData.get("file") as File;
  const fileBuffer = await file.arrayBuffer();

  const base64String = Buffer.from(fileBuffer).toString("base64");
  const fileUri = `data:${file.type};base64,${base64String}`;

  try {
    const result = await cloudinary.uploader.upload(fileUri, {
      folder: "uploads",
    });

    return result.secure_url;
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.error();
  }
}
