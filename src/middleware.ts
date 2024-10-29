import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import {
  DEFAULT_ADMIN_LOGIN_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  blogPrefix,
  cmsPrefix,
  marketplacePrefix,
  publicRoutes,
  showcasePrefix,
  webhookPrefix,
} from "./routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute =
    publicRoutes.includes(nextUrl.pathname) ||
    nextUrl.pathname.startsWith(cmsPrefix) ||
    nextUrl.pathname.startsWith(blogPrefix) ||
    nextUrl.pathname.startsWith(showcasePrefix) ||
    nextUrl.pathname.startsWith(webhookPrefix) ||
    nextUrl.pathname.startsWith(marketplacePrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return undefined;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      const userRole = req.auth?.user?.role;
      const roleBasedRedirect =
        userRole === "ADMIN"
          ? DEFAULT_ADMIN_LOGIN_REDIRECT
          : DEFAULT_LOGIN_REDIRECT;
      return Response.redirect(new URL(roleBasedRedirect, nextUrl));
    }

    return undefined;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return undefined;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
