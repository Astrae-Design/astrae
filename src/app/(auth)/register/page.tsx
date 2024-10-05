import { RegisterForm } from "@/components/auth/register-form";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const RegisterPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader2 size={40} className=" animate-spin text-white" />
        </div>
      }
    >
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
