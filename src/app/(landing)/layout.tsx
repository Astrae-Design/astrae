import Footer from "@/sections/footer";
import { Header } from "@/sections/header";
import InfoBanner from "@/sections/info-banner";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <InfoBanner />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
