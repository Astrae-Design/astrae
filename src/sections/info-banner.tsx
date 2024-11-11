"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCopy = () => {
    navigator.clipboard
      .writeText("AZMZU1NG") // Copy to clipboard
      .then(() => {
        toast.success("Discount code copied!", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#10b981",
            secondary: "#FFF",
          },
        });
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        toast.error("Failed to copy discount code!", {
          style: {
            border: "1px solid #262626",
            padding: "16px",
            background: "#161616",
            color: "#FFF",
          },
          iconTheme: {
            primary: "#ef4444",
            secondary: "#FFF",
          },
        });
      });
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("discountBanner", "Hide");
  };

  useEffect(() => {
    const discountBanner = localStorage.getItem("discountBanner");
    if (discountBanner === "Hide") {
      setIsVisible(false);
    }
  }, []);

  return (
    isVisible && (
      <div className="w-full bg-[#0245A6] hidden md:block group">
        <div className="px-4 py-1.5 flex items-center justify-between">
          <div />
          <h4
            onClick={handleCopy}
            className="text-white uppercase text-sm font-medium cursor-pointer"
          >
            Use code{" "}
            <span className=" group-hover:underline underline-offset-4 group-hover:font-semibold">
              AZMZU1NG
            </span>{" "}
            for 10% off any plan
          </h4>
          <button onClick={handleClose} aria-label="Close banner">
            <X className="text-white" />
          </button>
        </div>
      </div>
    )
  );
};

export default InfoBanner;
