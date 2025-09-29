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
import { subscribeAppTranslations } from "./Subscribe App.translations";

export interface SubscribeAppEmailProps {
  lang?: keyof typeof subscribeAppTranslations;
  appName?: string;
  yearlyPlanCTA?: string;
  sixMonthPlanCTA?: string;
  monthlyPlanCTA?: string;
  titleText?: string;
  subtitleText?: string;
  appIcon?: string;
  previewText?: string;
}

const SubscribeAppEmail = ({ 
  lang = "en",
  appName = "Our App",
  yearlyPlanCTA,
  sixMonthPlanCTA,
  monthlyPlanCTA,
  titleText,
  subtitleText,
  appIcon,
  previewText
}: SubscribeAppEmailProps) => {
  const content = subscribeAppTranslations[lang] || subscribeAppTranslations["en"];
  
  const containerStyle = {
    maxWidth: '660px',
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
        <Title>{titleText || "Choose your Plan"}</Title>
        
        {/* Subtitle */}
        <Subtitle>
          {subtitleText || "Your app is about to get even better with a subscription. Set your own app icon, view analytics, unlock all screens and features and much more."}
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
                  {yearlyPlanCTA || "<Yearly_Plan_CTA>"}
                </PrimaryButton>

                <PrimaryButton
                  href={content.button.link}
                  style={{ marginBottom: '12px' }}
                >
                  {sixMonthPlanCTA || "<6_Month_Plan_CTA>"}
                </PrimaryButton>

                <PrimaryButton
                  href={content.button.link}
                >
                  {monthlyPlanCTA || "<Monthly_Plan_CTA>"}
                </PrimaryButton>
              </div>
            </Column>
          </Row>
        </Section>
      </Container>
    </Layout>
  );
};

SubscribeAppEmail.PreviewProps = {
  lang: "en",
  appName: "Our App",
};

export default SubscribeAppEmail;

export const subject = (props?: SubscribeAppEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = subscribeAppTranslations[lang] || subscribeAppTranslations['en'];
  return content.subject || (props?.appName ? `${props.appName} - Choose your plan` : 'Choose your plan');
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(SubscribeAppEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */