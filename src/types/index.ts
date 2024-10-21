import { Toolkit } from "@prisma/client";

export interface Product {
  id: string;
  title: string;
  coverImage: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
  price: string;
  description: string;
  detailedDescription: string;
  pages: string;
  category: string;
  figmaLink: string;
  codeLink: string;
  toolkit: Toolkit[];
}

export interface Image {
  url: string;
}
