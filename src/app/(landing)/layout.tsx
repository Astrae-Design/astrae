"use client";

import Footer from "@/sections/footer";
import { Header } from "@/sections/header";
import InfoBanner from "@/sections/info-banner";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="flex flex-col w-full">
      <InfoBanner />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
