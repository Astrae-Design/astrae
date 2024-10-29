import { useSession } from "next-auth/react";

export const useCurrentRole = () => {
  const { data: session, status } = useSession();

  const loadingRole = status === "loading";
  const role = session?.user?.role;

  return { role, loadingRole };
};
