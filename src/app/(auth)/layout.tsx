import AuthBackground from "@/components/auth/auth-bg";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col w-screen items-center justify-center relative h-[100dvh] overflow-hidden ">
      <div className=" inset-0 w-full">
        <AuthBackground />
      </div>
      <div className=" absolute w-full px-5 md:px-0 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
