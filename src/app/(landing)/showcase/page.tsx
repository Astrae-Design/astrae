import ChatWidget from "@/components/common/chat-widget";
import ShowcaseList from "@/components/common/showcase";
import AnimatedHero from "@/sections/animated-hero";
import CallToAction from "@/sections/cta";
import { Metadata } from "next";

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "React template showcase",
    "projects built with Tailwind CSS templates",
    "Framer Motion animation projects",
    "Astrae Design showcase",
    "web design portfolio",
    "Next.js templates in action",
    "premium web templates showcase",
    "landing page designs",
    "real-world web templates",
    "creative projects showcase",
    "startup website templates portfolio",
  ],
  title: "Showcase",
  description:
    "Discover inspiring projects built with Astrae Design's premium templates. From startups to agencies, explore how our React, Next.js, Tailwind CSS, and Framer Motion templates are being used to create stunning websites.",
  openGraph: {
    title: "Showcase | Astrae Design",
    siteName: "Astrae Design",
    description:
      "Explore the Astrae Design showcase to see how our templates are being used in real-world projects. Be inspired by websites built with React, Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/assets/marketplace-thumbnail.webp"],
    url: `${baseUrl}/showcase`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Showcase | Astrae Design",
    description:
      "See real-world examples of stunning websites built using Astrae Design's templates. Explore projects created with React, Next.js, Tailwind CSS, and Framer Motion.",
    images: ["/assets/marketplace-thumbnail.webp"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

const ShowcasePage = () => {
  return (
    <div className="">
      <ChatWidget />
      <AnimatedHero
        title="Built to convert."
        description="See how developers and designers around the world are building stunning websites using Astrae Design’s premium templates. From startups to agencies, our templates bring visions to life."
      />
      <ShowcaseList />
      <CallToAction />
    </div>
  );
};

export default ShowcasePage;
