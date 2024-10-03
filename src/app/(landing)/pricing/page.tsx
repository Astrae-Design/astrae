import ChatWidget from "@/components/common/chat-widget";
import PricingCards from "@/components/common/pricing-cards";
import CallToAction from "@/sections/common/cta";
import PricingHero from "@/sections/common/pricing-hero";
import Reviews from "@/sections/common/reviews";
import FaqCentral from "@/sections/home/faq";

const PricingPage = () => {
  return (
    <div>
      <ChatWidget />
      <PricingHero />
      <PricingCards />
      <FaqCentral />
      <Reviews />
      <CallToAction />
    </div>
  );
};

export default PricingPage;
