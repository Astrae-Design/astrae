import GalleryShowcase from "@/components/custom/gallery";
import { Hero } from "@/sections/common/hero";
import LogoTicker from "@/sections/common/logo-ticker";

const Home = () => {
  return (
    <div>
      <Hero />
      <LogoTicker />
      <GalleryShowcase />
      <div className="h-screen" />
    </div>
  );
};

export default Home;
