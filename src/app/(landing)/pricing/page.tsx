import ChatWidget from "@/components/common/chat-widget";
import PricingCards from "@/components/common/pricing-cards";
import AnimatedHero from "@/sections/animated-hero";
import CallToAction from "@/sections/cta";
import FaqCentral from "@/sections/faq";
import Reviews from "@/sections/reviews";

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
