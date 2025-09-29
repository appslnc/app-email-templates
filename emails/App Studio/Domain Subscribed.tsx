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
import { domainSubscribedTranslations } from "./Domain Subscribed.translations";

export interface DomainSubscribedEmailProps {
  lang?: keyof typeof domainSubscribedTranslations;
  domainName?: string;
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

const DomainSubscribedEmail = ({ 
  lang = "en",
  domainName = "example.com",
  planName = "Premium",
  nextBillingDate = "January 1, 2024",
  yearlyPlanCTA,
  sixMonthPlanCTA,
  monthlyPlanCTA,
  titleText,
  subtitleText,
  appIcon,
  previewText
}: DomainSubscribedEmailProps) => {
  const content = domainSubscribedTranslations[lang] || domainSubscribedTranslations["en"];
  
  const containerStyle = {
    maxWidth: '660px',
    margin: '0 auto',
    fontFamily: 'Ubuntu, sans-serif',
    padding: '30px 30px 0 30px',
    backgroundImage: 'url(/static/confetti.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: '100% 100%',
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
    display: 'inline-block',
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu, sans-serif',
    minWidth: '200px',
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
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '12px',
    alignItems: 'center',
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
        {/* Domain Icon */}
        <Section style={{ marginTop: '20px', marginBottom: '6px' }}>
          <Row>
            <Column align="center">
              <Text style={{
                fontSize: '96px',
                textAlign: 'center' as const,
                marginBottom: '10px',
              }}>🌐</Text>
            </Column>
          </Row>
        </Section>

        {/* Title */}
        <Title style={{ marginTop: '40px', marginBottom: '0' }}>{titleText || "Domain Subscribed"}</Title>
        
        {/* Domain Chip */}
        <Section style={{ marginBottom: '16px' }}>
          <Row>
            <Column align="center">
              <Text style={{
                display: 'inline-block',
                backgroundColor: '#4DA5C7',
                color: '#FFFFFF',
                padding: '6px 18px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '400',
                fontFamily: 'Ubuntu, sans-serif',
              }}>
                {domainName}
              </Text>
            </Column>
          </Row>
        </Section>
        
        {/* Subtitle */}
        <Subtitle>
          {subtitleText || "Your domain is now ready for use: protected with premium features, including SSL and priority support."}
        </Subtitle>

        {/* Single Button */}
        <Section style={{ marginTop: '40px', paddingBottom: '30px' }}>
          <Row>
            <Column align="center">
              <PrimaryButton
                href={content.button.link}
                style={{ maxWidth: '200px' }}
              >
                {yearlyPlanCTA || "Manage Domain"}
              </PrimaryButton>
            </Column>
          </Row>
        </Section>
        </div>
      </Container>
    </Layout>
  );
};

DomainSubscribedEmail.PreviewProps = {
  lang: "en",
  domainName: "example.com",
  planName: "Premium",
  nextBillingDate: "January 1, 2024",
};

export default DomainSubscribedEmail;

export const subject = (props?: DomainSubscribedEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = domainSubscribedTranslations[lang] || domainSubscribedTranslations['en'];
  const domainName = props?.domainName ?? '';
  return (content.subject || `Domain Subscription Confirmed: ${domainName}`).replace('{domainName}', domainName);
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(DomainSubscribedEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */