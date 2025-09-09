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
}

export default function Welcome({ 
  lang = "en", 
  buttonText, 
  buttonLink, 
  titleText, 
  subtitleText 
}: WelcomeEmailProps) {
  const content = welcomeTranslations[lang] || welcomeTranslations["en"];
  
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
