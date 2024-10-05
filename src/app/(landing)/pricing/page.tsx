import ChatWidget from "@/components/common/chat-widget";
import PricingCards from "@/components/common/pricing-cards";
import CallToAction from "@/sections/cta";
import PricingHero from "@/sections/pricing-hero";
import Reviews from "@/sections/reviews";
import FaqCentral from "@/sections/faq";

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
