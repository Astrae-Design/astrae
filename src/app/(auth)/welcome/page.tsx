import { Suspense } from "react";
import { WelcomeForm } from "@/components/auth/welcome-form";
import { Loader2 } from "lucide-react";

const WelcomePage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader2 size={40} className=" animate-spin text-white" />
        </div>
      }
    >
      <WelcomeForm />
    </Suspense>
  );
};

export default WelcomePage;
