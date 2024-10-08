import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/marketplace", "/blog", "/pricing"],
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
    sitemap: "https://astrae.design/sitemap.xml",
  };
}
