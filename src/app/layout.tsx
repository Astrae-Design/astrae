import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToastProvider from "@/providers/toast-provider";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "React landing page templates",
    "Tailwind CSS templates",
    "Framer Motion animations",
    "responsive web design",
    "landing page marketplace",
    "startup website templates",
    "modern web templates",
    "Astrae Design",
    "Next.js UI kits",
    "Next.js landing page templates",
    "template shop",
    "React UI kits",
  ],
  title: "Astrae Design",
  description:
    "Discover beautifully crafted landing page templates built with React & Next.js, Tailwind CSS, and Framer Motion. Astrae Design offers high-quality, responsive templates perfect for startups, creatives, and agencies. Boost your project with smooth animations and modern design.",
  openGraph: {
    title: "Astrae Design | Premium React Templates",
    siteName: "Astrae Design",
    description:
      "Discover beautifully crafted landing page templates built with React & Next.js, Tailwind CSS, and Framer Motion. Astrae Design offers high-quality, responsive templates perfect for startups, creatives, and agencies. Boost your project with smooth animations and modern design.",
    images: ["/assets/thumbnail.webp"],
    url: `${baseUrl}`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrae Design | Premium React Templates",
    description:
      "Discover beautifully crafted landing page templates built with React & Next.js, Tailwind CSS, and Framer Motion. Astrae Design offers high-quality, responsive templates perfect for startups, creatives, and agencies. Boost your project with smooth animations and modern design.",
    images: ["/assets/thumbnail.webp"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-black select-none overflow-x-hidden`}
        >
          <ToastProvider />
          {children}
          <Analytics />
        </body>
      </html>
    </SessionProvider>
  );
}
