import {
  Head,
  Container,
  Heading,
  Preview,
  Text,
  Button,
  Section,
  Row,
  Column,
  Img,
} from "@react-email/components";
import Layout from "../Components/Layout";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import { welcomeTranslations } from "./Welcome.translations";
import { WELCOME_GIF_URL } from "../constants";

export interface WelcomeEmailProps {
  lang?: keyof typeof welcomeTranslations;
  buttonText?: string;
  buttonLink?: string;
  titleText?: string;
  subtitleText?: string;
  subject?: string;
}

export default function Welcome({ 
  lang = "en", 
  buttonText, 
  buttonLink, 
  titleText, 
  subtitleText 
  , subject
}: WelcomeEmailProps) {
  const content = welcomeTranslations[lang] || welcomeTranslations["en"];
  // subject prop is not typically used in the template body, but available for overrides
  const resolvedSubject = subject ?? "Welcome to App Studio";
  
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Ubuntu, sans-serif',
    padding: '30px',
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

  const buttonStyle = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '8px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu, sans-serif',
    minWidth: '200px',
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview}</Preview>
      </Head>
      <Container style={containerStyle}>
        <Section style={{ marginBottom: '24px' }}>
          <Row>
            <Column align="center">
              <Img 
                width="640"
                style={{ width: '640px', maxWidth: '100%', height: 'auto' }}
                src={WELCOME_GIF_URL}
                alt="Welcome"
              />
            </Column>
          </Row>
        </Section>
        <Title>{titleText || "Welcome to App Studio"}</Title>
        <Subtitle>
          {subtitleText || content.intro}
        </Subtitle>
        <Section style={{ marginBottom: '32px', marginTop: '40px' }}>
          <Row>
            <Column align="center">
              <Button
                href={buttonLink || content.button.link}
                style={buttonStyle}
              >
                {buttonText || content.button.text}
              </Button>
            </Column>
          </Row>
        </Section>
      </Container>
    </Layout>
  );
}

// React Email dev server expects PreviewProps to be set exactly like this
Welcome.PreviewProps = {
  lang: "en",
};
// Expose subject so template-service can pick it up from various module shapes
// Export a subject factory so callers can compute localized/dynamic subjects
export const subject = (props?: WelcomeEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = welcomeTranslations[lang] || welcomeTranslations['en'];
  // Allow templates to override button text or other props to influence subject if needed
  return content.subject || 'Welcome to App Studio';
};

export const metadata = { subject };
// also attach to default export for some bundlers/interop
/* eslint-disable @typescript-eslint/no-explicit-any */
(Welcome as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */
