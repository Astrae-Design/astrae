import AuthBackground from "@/components/auth/auth-bg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col w-screen items-center justify-center relative ">
      <div className=" inset-0 w-full">
        <AuthBackground />
      </div>
      <div className=" absolute w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
