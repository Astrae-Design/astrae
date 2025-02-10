import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/products", "/products/*","/blog", "/blog/*", "/pricing"],
      disallow: [
        "/welcome",
        "/login",
        "/register",
        "/error",
        "/reset",
        "/new-password",
        "/new-verification",
        "/password-reset-successful",
        "/studio",
        "/_next/",
        "/api/",
        "/images/",
        "/assets/",
        "/*.ico$",
        "/*.woff2$",
        "/*.webp$",
      ],
    },
    sitemap: "https://www.astrae.design/sitemap.xml",
  };
}
