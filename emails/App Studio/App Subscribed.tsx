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
import SecondaryButton from "../Components/SecondaryButton";
import { appSubscribedTranslations } from "./App Subscribed.translations";

export interface AppSubscribedEmailProps {
  lang?: keyof typeof appSubscribedTranslations;
  appName?: string;
  planName?: string;
  nextBillingDate?: string;
  yearlyPlanCTA?: string;
  sixMonthPlanCTA?: string;
  monthlyPlanCTA?: string;
  titleText?: string;
  subtitleText?: string;
  appIcon?: string;
  previewText?: string;
}

const AppSubscribedEmail = ({ 
  lang = "en",
  appName = "Our App",
  planName = "Premium",
  nextBillingDate = "January 1, 2024",
  yearlyPlanCTA,
  sixMonthPlanCTA,
  monthlyPlanCTA,
  titleText,
  subtitleText,
  appIcon,
  previewText
}: AppSubscribedEmailProps) => {
  const content = appSubscribedTranslations[lang] || appSubscribedTranslations["en"];
  
  const containerStyle = {
    maxWidth: '660px',
    margin: '0 auto',
    fontFamily: 'Ubuntu, sans-serif',
    padding: '30px 30px 10px 30px',
    backgroundImage: 'url(/static/confetti.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: '100% auto',
    borderRadius: '12px',
    position: 'relative' as const,
    minHeight: 'auto',
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


  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: '#000000',
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
        <Preview>{previewText || "Choose your plan - Your app is about to get even better"}</Preview>
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
        {/* Semi-transparent overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '12px',
          zIndex: 1,
        }} />
        
        {/* Content wrapper with higher z-index */}
        <div style={{ position: 'relative', zIndex: 2 }}>
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
        <Title>{titleText || "Congratulations!"}</Title>
        
        {/* Subtitle */}
        <Subtitle>
          {subtitleText || "Your app is now on the path to greatness. You can now submit it to the App Store or Google Play to make it accessible to millions of users worldwide."}
        </Subtitle>

        {/* Three Stacked Buttons */}
        <Section style={{ marginTop: '40px', marginBottom: '0px' }}>
          <Row>
            <Column align="center">
              <div style={buttonContainerStyle}>
                <PrimaryButton
                  href={content.button.link}
                  style={{ marginBottom: '12px' }}
                >
                  {yearlyPlanCTA || "Submit to Both Stores"}
                </PrimaryButton>

                <SecondaryButton
                  href={content.button.link}
                  style={{ marginBottom: '12px' }}
                >
                  {sixMonthPlanCTA || "Submit to App Store"}
                </SecondaryButton>

                <SecondaryButton
                  href={content.button.link}
                >
                  {monthlyPlanCTA || "Submit to Google Play"}
                </SecondaryButton>
              </div>
            </Column>
          </Row>
        </Section>
        </div>
      </Container>
    </Layout>
  );
};

AppSubscribedEmail.PreviewProps = {
  lang: "en",
  appName: "Our App",
  planName: "Premium",
  nextBillingDate: "January 1, 2024",
};

export default AppSubscribedEmail;

export const subject = (props?: AppSubscribedEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = appSubscribedTranslations[lang] || appSubscribedTranslations['en'];
  const appName = props?.appName ?? '';
  return (content.subject || `Welcome to ${appName} Premium!`).replace('{appName}', appName);
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(AppSubscribedEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */