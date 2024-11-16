"use client";

import ChatWidget from "@/components/common/chat-widget";
import GalleryShowcase from "@/components/custom/gallery";
import CallToAction from "@/sections/cta";
import FaqCentral from "@/sections/faq";
import Features from "@/sections/features";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logo-ticker";
import Pricing from "@/sections/pricing";
import Reviews from "@/sections/reviews";

const Home = () => {
  return (
    <div className="w-full">
      <ChatWidget />
      <Hero />
      <LogoTicker />
      <GalleryShowcase />
      <Features />
      <Pricing />
      <FaqCentral />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default Home;
