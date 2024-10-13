import ChatWidget from "@/components/common/chat-widget";
import PricingCards from "@/components/common/pricing-cards";
import AnimatedHero from "@/sections/animated-hero";
import CallToAction from "@/sections/cta";
import FaqCentral from "@/sections/faq";
import Reviews from "@/sections/reviews";
import { Metadata } from "next";

const baseUrl = "https://astrae.design";
const wwwBaseUrl = "https://www.astrae.design";

export const metadata: Metadata = {
  metadataBase: new URL(`${baseUrl}`) || new URL(`${wwwBaseUrl}`),
  keywords: [
    "React template pricing",
    "Tailwind CSS templates pricing",
    "Framer Motion animations pricing",
    "Astrae Design pricing",
    "web templates pricing",
    "Next.js templates pricing",
    "premium web templates",
    "affordable web design templates",
    "startup website templates pricing",
    "landing page marketplace pricing",
  ],
  title: "Pricing",
  description:
    "Explore Astrae Design's pricing options for premium React, Tailwind CSS, and Framer Motion templates. Get affordable, high-quality templates for startups, agencies, and creatives.",
  openGraph: {
    title: "Pricing | Astrae Design",
    siteName: "Astrae Design",
    description:
      "Discover Astrae Design's pricing options for premium web templates built with React, Tailwind CSS, and Framer Motion. Perfect for startups and creative agencies.",
    images: ["/assets/pricing-thumbnail.png"],
    url: `${baseUrl}/pricing`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Astrae Design",
    description:
      "Explore affordable pricing options for Astrae Design's high-quality web templates built with React, Tailwind CSS, and Framer Motion.",
    images: ["/assets/pricing-thumbnail.png"],
    creator: "@astraedesign0",
  },
  icons: "/favicon.ico",
};

const PricingPage = () => {
  return (
    <div>
      <ChatWidget />
      <AnimatedHero
        title="The right price for you, with maximum value"
        description=" Simple pricing that makes sense for your business. No hidden fees."
      />
      <PricingCards />
      <FaqCentral />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default PricingPage;
