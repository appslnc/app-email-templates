import {
  Head,
  Container,
  Heading,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from "@react-email/components";
import Layout from "../Components/Layout";
import PrimaryButton from "../Components/PrimaryButton";
import { passwordResetTranslations } from "./Reset Password.translations";

export interface PasswordResetEmailProps {
  lang?: keyof typeof passwordResetTranslations;
  resetLink: string;
}

const PasswordResetEmail = ({ lang = "en", resetLink }: PasswordResetEmailProps) => {
  const content = passwordResetTranslations[lang] || passwordResetTranslations["en"];
  
  const containerStyle = {
    maxWidth: '660px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center' as const,
    color: '#111827',
    fontFamily: 'Ubuntu, sans-serif',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#4B5563',
    textAlign: 'center' as const,
    marginBottom: '24px',
    lineHeight: '24px',
    fontFamily: 'Ubuntu, sans-serif',
  };


  const warningStyle = {
    fontSize: '14px',
    color: '#6B7280',
    textAlign: 'center' as const,
    marginBottom: '16px',
    lineHeight: '20px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  const expiryStyle = {
    fontSize: '12px',
    color: '#9CA3AF',
    textAlign: 'center' as const,
    lineHeight: '16px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview}</Preview>
      </Head>
      <Container style={containerStyle}>
        <Heading style={headingStyle}>{content.heading}</Heading>
        <Text style={textStyle}>
          {content.intro}
        </Text>
        <Section style={{ marginBottom: '32px' }}>
          <Row>
            <Column align="center">
              <PrimaryButton
                href={resetLink}
              >
                {content.button.text}
              </PrimaryButton>
            </Column>
          </Row>
        </Section>
        <Text style={warningStyle}>
          {content.warning}
        </Text>
        <Text style={expiryStyle}>
          {content.expiry}
        </Text>
      </Container>
    </Layout>
  );
};

PasswordResetEmail.PreviewProps = {
  lang: "en",
  resetLink: "https://example.com/reset-password",
};

export default PasswordResetEmail;

// Export subject function using translations
export const subject = (props?: PasswordResetEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = passwordResetTranslations[lang] || passwordResetTranslations['en'];
  return content.subject || 'Reset your password';
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(PasswordResetEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */