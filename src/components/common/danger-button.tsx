"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { logout } from "../../../actions/logout";

const DangerButton = (props: React.PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);

  const logUserOut = () => {
    setIsLoading(true);
    logout();
  };

  return (
    <button
      onClick={logUserOut}
      className="relative w-full h-10 inline-flex items-center justify-center px-3 md:px-4 rounded-lg font-medium text-white text-sm bg-gradient-to-b from-[#A60202] to-[#FA4E4E] shadow-[0px_0px_2px_#FA4E4E]"
    >
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <div className="absolute inset-0 shadow-[0_0_10px_rgb(166,2,2,.7)_inset] rounded-lg" />
      </div>
      <span className="inline-flex items-center">
        {isLoading ? <Loader2 className="animate-spin" /> : props.children}
      </span>
    </button>
  );
};

export default DangerButton;
