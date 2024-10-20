"use client";

import { X } from "lucide-react";
import { useState } from "react"; // Import useState

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="w-full bg-[#0245A6] hidden md:block">
        <div className="px-4 py-1.5 flex items-center justify-between">
          <div />
          <h4 className="text-white uppercase text-sm font-medium">
            Use code ASTRAE20 for 20% off yearly plan
          </h4>
          <button onClick={handleClose} aria-label="Close banner">
            <X className="text-white" />{" "}
          </button>
        </div>
      </div>
    )
  );
};

export default InfoBanner;
