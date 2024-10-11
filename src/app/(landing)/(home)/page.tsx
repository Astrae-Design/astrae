import ChatWidget from "@/components/common/chat-widget";
import GalleryShowcase from "@/components/custom/gallery";
import CallToAction from "@/sections/cta";
import FaqCentral from "@/sections/faq";
import Features from "@/sections/features";
import Hero from "@/sections/hero";
import LogoTicker from "@/sections/logo-ticker";
import Pricing from "@/sections/pricing";
import Reviews from "@/sections/reviews";
import Value from "@/sections/value";

const Home = () => {
  return (
    <div className=" w-full">
      <ChatWidget />
      <Hero />
      <LogoTicker />
      <GalleryShowcase />
      <div className="h-[10rem]" />
      <Value />
      <Features />
      <Pricing />
      <FaqCentral />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default Home;
