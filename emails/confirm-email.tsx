import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AstraeWelcomeEmailProps {
  confirmLink: string | undefined;
}

export const AstraeWelcomeEmailText = ({
  confirmLink,
}: AstraeWelcomeEmailProps) => `
Welcome to Astrae Design!

Build class-leading websites with speed. Access an ever-growing collection of premium, meticulously crafted templates. Save time and focus on what matters — building standout websites that captivate your audience.

Click the link below to confirm your email and get started:
${confirmLink}

Best,
The Astrae Design Team

58 Okodee Road KNUST, Kumasi, Ghana
`;

export const AstraeWelcomeEmail = ({
  confirmLink,
}: AstraeWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to Astrae Design, confirm your email address and start exploring
      available templates in the marketplace!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://res.cloudinary.com/dlnsqeeos/image/upload/v1728165542/v29beiwqza48ymsk52cw.png"
          width="108"
          height="42"
          alt="Astrae"
          style={logo}
        />
        <Hr style={hr} />
        <Text style={paragraph}>Welcome to Astrae Design,</Text>
        <Text style={paragraph}>
          Build class-leading websites with speed. Access an ever-growing
          collection of premium, meticulously crafted templates. Save time and
          focus on what matters — building standout websites that captivate your
          audience.
        </Text>
        <Text style={paragraph}>
          Click to confirm your email and get started.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={confirmLink}>
            Confirm Email
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          The Astrae Design Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>58 Okodee Road KNUST Kumasi, Ghana</Text>
      </Container>
    </Body>
  </Html>
);

AstraeWelcomeEmail.PreviewProps = {
  confirmLink: "https://test.com",
} as AstraeWelcomeEmailProps;

export default AstraeWelcomeEmail;

const main = {
  backgroundColor: "#000",
  padding: "0 20px 0 20px",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 0",
};

const paragraph = {
  color: "#fff",
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#0096FA",
  borderRadius: "8px",
  color: "#FFF !important",
  fontWeight: "500",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#2B2B2B",
  margin: "20px 0",
};

const footer = {
  color: "#ABABAB",
  fontSize: "14px",
};
