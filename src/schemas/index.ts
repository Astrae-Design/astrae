import { Category, Toolkit, UserRole } from "@prisma/client";
import * as z from "zod";

const categoryValues = Object.values(Category) as [Category, ...Category[]];
const toolkitValues = Object.values(Toolkit) as [Toolkit, ...Toolkit[]];

export const passwordSchema = z
  .string({
    required_error: "Password can not be empty.",
  })
  .regex(/^.{8,20}$/, {
    message: "Minimum 8 and maximum 20 characters.",
  })
  .regex(/(?=.*[A-Z])/, {
    message: "At least one uppercase character.",
  })
  .regex(/(?=.*[a-z])/, {
    message: "At least one lowercase character.",
  })
  .regex(/(?=.*\d)/, {
    message: "At least one digit.",
  })
  .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, {
    message: "At least one special character.",
  });

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );

export const NewPasswordSchema = z.object({
  password: passwordSchema,
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: passwordSchema,
  name: z.string().min(1, {
    message: "Name is required",
  }),
});

export const ProductSchema = z.object({
  title: z.string().min(4, {
    message: "Title is required",
  }),
  price: z.string().min(1, {
    message: "Enter valid price",
  }),
  category: z.enum(categoryValues, {
    errorMap: () => ({ message: "Please select a valid category" }),
  }),
  toolkit: z.array(z.enum(toolkitValues)).refine((value) => value.length > 0, {
    message: "You have to select at least one technology.",
  }),
  pages: z.string().min(4, {
    message: "Enter one or more pages",
  }),
  figmaLink: z.string().min(4, {
    message: "Enter link to figma file",
  }),
  codeLink: z.string().min(4, {
    message: "Enter link to source code",
  }),
  previewLink: z.string().min(4, {
    message: "Enter live preview link",
  }),
  description: z
    .string()
    .min(150, {
      message: "Description must be at least 150 characters.",
    })
    .max(250, {
      message: "Description must not be longer than 250 characters.",
    }),
  detailedDescription: z
    .string()
    .min(500, {
      message: "Description must be at least 500 characters.",
    })
    .max(850, {
      message: "Description must not be longer than 850 characters.",
    }),
});
