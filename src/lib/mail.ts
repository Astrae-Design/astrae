import { getUserByEmail } from "@/data/user";
import { render } from "@react-email/components";
import { Resend } from "resend";
import AstraeWelcomeEmail, {
  AstraeWelcomeEmailText,
} from "../../emails/confirm-email";
import ResetPasswordEmail, {
  ResetPasswordEmailText,
} from "../../emails/reset-password";
import TwoFactorAuthenticationEmail, {
  TwoFactorAuthenticationEmailText,
} from "../../emails/two-factor-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  const emailHtml = await render(TwoFactorAuthenticationEmail({ token }));
  const emailText = TwoFactorAuthenticationEmailText({ token });

  await resend.emails.send({
    from: "Astrae Design <onboarding@astrae.design>",
    to: email,
    subject: "2FA code",
    html: emailHtml,
    text: emailText,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;
  const existingUser = await getUserByEmail(email);
  const name = existingUser?.name;

  const emailHtml = await render(ResetPasswordEmail({ resetLink, name }));
  const emailText = ResetPasswordEmailText({ name, resetLink });

  await resend.emails.send({
    from: "Astrae Design <onboarding@astrae.design>",
    to: email,
    subject: "Reset your password",
    html: emailHtml,
    text: emailText,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`;
  const emailHtml = await render(AstraeWelcomeEmail({ confirmLink }));
  const emailText = AstraeWelcomeEmailText({ confirmLink });

  await resend.emails.send({
    from: "Astrae Design <onboarding@astrae.design>",
    to: email,
    subject: "Confirm your email",
    html: emailHtml,
    text: emailText,
  });
};
