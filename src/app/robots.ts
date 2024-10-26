import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/products", "/blog", "/pricing"],
      disallow: [
        "/welcome",
        "/login",
        "/register",
        "/error",
        "/reset",
        "/new-password",
        "/new-verification",
        "/password-reset-successful",
      ],
    },
    sitemap: "https://www.astrae.design/sitemap.xml",
  };
}
