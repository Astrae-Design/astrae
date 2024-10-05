import { NewVerificationForm } from "@/components/auth/new-verification-form";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const NewVerificationPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader2 size={40} className=" animate-spin text-white" />
        </div>
      }
    >
      <NewVerificationForm />
    </Suspense>
  );
};

export default NewVerificationPage;
