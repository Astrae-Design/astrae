import { LoginForm } from "@/components/auth/login-form";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

const LoginPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader2 size={40} className=" animate-spin text-white" />
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
