/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/new-verification",
  "/legals/refunds",
  "/legals/privacy-policy",
  "/legals/terms",
  "/legals/license",
  "/pricing",
  "/contact",
];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
  "/welcome",
  "/login",
  "/register",
  "/error",
  "/reset",
  "/new-password",
];

/**
 * The prefix for api authentication routes.
 * Routes that starts with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
export const blogPrefix = "/blog";
export const marketplacePrefix = "/marketplace";
export const cmsPrefix = "/studio";

/**
 * The default redirect path after a successful login.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
