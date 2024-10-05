import { CardWrapper } from "@/components/auth/card-wrapper";
import PrimaryButton from "@/components/common/primarybutton";
import Link from "next/link";

const PasswordReset = () => {
  return (
    <div>
      <CardWrapper
        showHeader
        imgSrc="/assets/logo.svg"
        headerTitle="Reset Successfull"
        headerLabel="You can now use the new password to sign in to your account"
        backButtonLabel=""
        backButtonHighlight=""
        backButtonHref=""
      >
        <Link href="/login" className="mt-3">
          <PrimaryButton>Login</PrimaryButton>
        </Link>
      </CardWrapper>
    </div>
  );
};

export default PasswordReset;
