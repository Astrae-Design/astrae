import GalleryShowcase from "@/components/custom/gallery";
import { Hero } from "@/sections/common/hero";
import LogoTicker from "@/sections/common/logo-ticker";
import { FaqCentral } from "@/sections/home/faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <GalleryShowcase />
      <FaqCentral />
    </div>
  );
};

export default Home;
