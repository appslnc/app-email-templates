
import {
  Head,
  Container,
  Preview,
  Button,
  Section,
  Row,
  Column,
  Img,
} from "@react-email/components";
import Layout from "../Components/Layout";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import { appPublishedNotSubscribedTranslations } from "./App Published Not Subscribed.translations";

export interface AppPublishedNotSubscribedEmailProps {
  lang?: keyof typeof appPublishedNotSubscribedTranslations;
  userAppGuid: string;
  appName?: string;
  appIcon?: string;
 }

const AppPublishedNotSubscribedEmail = ({ 
  lang = "en",
  appName = "Your App",
  appIcon,
  userAppGuid
}: AppPublishedNotSubscribedEmailProps) => {

  const baseUrl="https://services.igenapps.com"

  const subUrl = baseUrl+`?AppGuid=${userAppGuid}`;

  const content = appPublishedNotSubscribedTranslations[lang] || appPublishedNotSubscribedTranslations["en"];
  
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Ubuntu, sans-serif',
    padding: '30px 30px 10px 30px',
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
    display: 'block',
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu, sans-serif',
    width: '100%',
    maxWidth: '200px',
    margin: '0 auto',
    border: '2px solid #000000',
  };

  const iconContainerStyle = {
    textAlign: 'center' as const,
    margin: '0 auto',
  };

  const iconStyle = {
    width: '96px',
    height: '96px',
    borderRadius: '24px',
    boxShadow: '0 4px 16px rgba(75, 85, 99, 0.4)',
    animation: 'pulse 2s infinite',
    marginBottom: '10px',
  };

  const buttonContainerStyle = {
    width: '100%',
  };

  const appNameStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center' as const,
    marginBottom: '16px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview}</Preview>
        <style>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.05);
            }
          }
        `}</style>
      </Head>
      <Container style={containerStyle}>
        {/* App Icon with Pulsing Glow */}
        <Section style={{ marginBottom: '6px' }}>
          <Row>
            <Column align="center">
              <Img
                src={appIcon || "/static/default-Icon.png"}
                alt="App Icon"
                width="96"
                height="96"
                style={iconStyle}
              />
            </Column>
          </Row>
        </Section>

        {/* Title */}
        <Title>{content.heading}</Title>
        
        {/* Subtitle */}
        <Subtitle>
          {content.subtitleText}
        </Subtitle>

        {/* Three Stacked Buttons */}
        <Section style={{ marginTop: '40px', marginBottom: '0px' }}>
          <Row>
            <Column align="center">
              <div style={buttonContainerStyle}>
                <Button
                  href={`${subUrl}&PlanId=144`}
                  style={{...buttonStyle, marginBottom: '12px'}}
                >
                  {content.yearlyPlanCTA}
                </Button>
                
                <Button
                  href={`${subUrl}&PlanId=143`}
                  style={{...buttonStyle, marginBottom: '12px'}}
                >
                  {content.sixMonthPlanCTA}
                </Button>
                
                <Button
                  href={`${subUrl}&PlanId=142`}
                  style={buttonStyle}
                >
                  {content.monthlyPlanCTA}
                </Button>
              </div>
            </Column>
          </Row>
        </Section>
      </Container>
    </Layout>
  );
};

AppPublishedNotSubscribedEmail.PreviewProps = {
  lang: "en",
  appName: "My Awesome App"
};

export default AppPublishedNotSubscribedEmail;

export const subject = (props?: AppPublishedNotSubscribedEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = appPublishedNotSubscribedTranslations[lang] || appPublishedNotSubscribedTranslations['en'];
  const appName = props?.appName ?? 'Your App';
  return (content.subject || `Your App is Live!`).replace('{appName}', appName);
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(AppPublishedNotSubscribedEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */