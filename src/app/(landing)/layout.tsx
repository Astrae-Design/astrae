import Footer from "@/sections/footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full">
      {/* <InfoBanner />
      <Header /> */}
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
