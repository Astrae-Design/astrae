import Footer from "@/sections/footer";
import { Header } from "@/sections/header";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
