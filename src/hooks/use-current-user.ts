import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const { data: session, status } = useSession();

  console.log("Here is the session: ", session);

  const isLoading = status === "loading";
  const user = session?.user;

  return { user, isLoading };
};
