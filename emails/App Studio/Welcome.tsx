import {
  Head,
  Container,
  Heading,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Img,
} from "@react-email/components";
import Layout from "../Components/Layout";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import PrimaryButton from "../Components/PrimaryButton";
import { welcomeTranslations } from "./Welcome.translations";
import { WELCOME_GIF_URL } from "../constants";

export interface WelcomeEmailProps {
  lang?: keyof typeof welcomeTranslations;
}

export default function Welcome({ lang = "en" }: WelcomeEmailProps) {
  const content = welcomeTranslations[lang] || welcomeTranslations["en"];
  
  const containerStyle = {
    maxWidth: '660px',
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
                style={{ width: '90%', maxWidth: '650px', height: 'auto' }}
                src={WELCOME_GIF_URL}
                alt="Welcome"
              />
            </Column>
          </Row>
        </Section>
        <Title>{content.subtitleText}</Title>
        <Text style={textStyle}>{content.intro}</Text>
        <Section style={{ marginBottom: '32px', marginTop: '40px' }}>
          <Row>
            <Column align="center">
              <PrimaryButton
                href={content.button.link}
              >
                {content.button.text}
              </PrimaryButton>
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
