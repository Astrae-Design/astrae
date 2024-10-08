import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { CSSProperties } from "react";

interface TwoFactorAuthenticationEmailProps {
  token: string;
}

export const TwoFactorAuthenticationEmailText = ({
  token,
}: TwoFactorAuthenticationEmailProps) => `
Here is your 2FA code for Astrae Design:

Verification Code: ${token}

This code is valid for 60 minutes.

Thank you for securing your Astrae Design account.

The Astrae Design Team
58 Okodee Road, KNUST Kumasi, Ghana
`;

export const TwoFactorAuthenticationEmail = ({
  token,
}: TwoFactorAuthenticationEmailProps) => (
  <Html>
    <Head />
    <Preview>Sign in to Astrae Design using this 2FA Code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dlnsqeeos/image/upload/v1728419360/atl0dtnn1itnhmahbroy.png"
          width="120"
          height="42"
          alt="Astrae"
          style={logo}
        />
        <Hr style={hr} />
        <Text style={header}>2FA Code,</Text>
        <Text style={paragraph}>
          Enter the following code to login to your Astrae Account and access
          the dashboard and templates.
        </Text>
        <Section style={middleContainer}>
          <Text style={paragraphTwo}>Verification Code</Text>
        </Section>
        <Section style={codeContainer}>
          <Heading style={codeStyle}>{token}</Heading>
        </Section>
        <Section style={middleContainer}>
          <Text style={paragraphThree}>
            (This code is valid for 60 minutes)
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>58 Okodee Road KNUST Kumasi, Ghana</Text>
      </Container>
    </Body>
  </Html>
);

TwoFactorAuthenticationEmail.PreviewProps = {
  token: "18272",
} as TwoFactorAuthenticationEmailProps;

export default TwoFactorAuthenticationEmail;

const main: CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "0 20px 0 20px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container: CSSProperties = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo: CSSProperties = {
  margin: "0 0",
};

const middleContainer: CSSProperties = {
  borderRadius: "4px",
  margin: "0px auto 0px",
  verticalAlign: "middle",
  width: "240px",
  maxWidth: "100%",
};
const codeContainer: CSSProperties = {
  background: "rgba(0,0,0,.1)",
  borderRadius: "4px",
  margin: "0x auto 0px",
  verticalAlign: "middle",
  width: "280px",
  maxWidth: "100%",
};

const codeStyle: CSSProperties = {
  display: "inline-block",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center",
  letterSpacing: "8px",
};

const header: CSSProperties = {
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "26px",
};
const paragraph: CSSProperties = {
  fontSize: "16px",
  lineHeight: "26px",
};
const paragraphTwo: CSSProperties = {
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "26px",
};
const paragraphThree: CSSProperties = {
  textAlign: "center",
  fontSize: "16px",
  lineHeight: "26px",
};

const hr: CSSProperties = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer: CSSProperties = {
  color: "#cccccc",
  fontSize: "14px",
};
