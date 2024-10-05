import { NewPasswordForm } from "@/components/auth/new-password-form";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const NewPasswordPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader2 size={40} className=" animate-spin text-white" />
        </div>
      }
    >
      <NewPasswordForm />
    </Suspense>
  );
};

export default NewPasswordPage;
