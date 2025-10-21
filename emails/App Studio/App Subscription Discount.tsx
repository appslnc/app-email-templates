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
import { appSubscriptionDiscountTranslations } from "./App Subscription Discount.translations";
import { COUNTDOWN_GIF_URL } from "../constants";

export interface AppSubscriptionDiscountEmailProps {
  lang?: keyof typeof appSubscriptionDiscountTranslations;
  userAppGuid: string;
}

const AppSubscriptionDiscountEmail = ({ 
  lang = "en",
  userAppGuid,
}: AppSubscriptionDiscountEmailProps) => {
  const content = appSubscriptionDiscountTranslations[lang] || appSubscriptionDiscountTranslations["en"];

  const baseUrl="https://services.igenapps.com"
  const subUrl = baseUrl+`?AppGuid=${userAppGuid}`;

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
    boxShadow: '0 4px 16px rgba(220, 38, 38, 0.4)',
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
        {/* Countdown Timer Image */}
        <Section style={{ marginBottom: '6px' }}>
          <Row>
            <Column align="center">
              <div style={{
                backgroundColor: '#000000',
                padding: '12px',
                borderRadius: '12px',
                display: 'inline-block',
              }}>
                <Img
                  src={COUNTDOWN_GIF_URL}
                  alt="24 Hour Countdown Timer"
                  style={{
                    borderRadius: '8px',
                    display: 'block',
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                  }}
                />
              </div>
            </Column>
          </Row>
        </Section>

        {/* Title */}
        <Title style={{ marginTop: '20px' }}>{content.heading}</Title>
        
        {/* Discount Text */}
        <Section style={{ marginBottom: '16px' }}>
          <Row>
            <Column align="center">
              <Text style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#DC2626',
                textAlign: 'center',
                margin: '0',
              }}>
                {content.discountText}
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Intro Text */}
        <Subtitle>
          {content.intro}
        </Subtitle>

        {/* Urgency Text */}
        <Section style={{ marginBottom: '24px' }}>
          <Row>
            <Column align="center">
              <Text style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#DC2626',
                textAlign: 'center',
                margin: '0',
              }}>
                {content.urgency}
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Benefits */}
        <Section style={{ marginBottom: '24px' }}>
          <Row>
            <Column align="center">
              <Text style={{
                fontSize: '16px',
                color: '#059669',
                textAlign: 'center',
                margin: '0',
                lineHeight: '24px',
                whiteSpace: 'pre-line',
              }}>
                {content.benefits}
              </Text>
            </Column>
          </Row>
        </Section>

        {/* Two Stacked Buttons */}
        <Section style={{ marginTop: '40px', marginBottom: '0px' }}>
          <Row>
            <Column align="center">
              <div style={buttonContainerStyle}>
                <PrimaryButton
                  href={`${subUrl}&PlanId=120`}
                  style={{ marginBottom: '12px' }}
                >
                  {content.yearlyPlanCTA}
                </PrimaryButton>

                <SecondaryButton
                  href={`${subUrl}&PlanId=119`}
                >
                  {content.monthlyPlanCTA}
                </SecondaryButton>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Terms */}
        <Section style={{ marginTop: '32px' }}>
          <Row>
            <Column align="center">
              <Text style={{
                fontSize: '12px',
                color: '#6B7280',
                textAlign: 'center',
                margin: '0',
                lineHeight: '18px',
              }}>
                {content.terms}
              </Text>
            </Column>
          </Row>
        </Section>
      </Container>
    </Layout>
  );
};

AppSubscriptionDiscountEmail.PreviewProps = {
  lang: "en",
  appName: "Your App",
  userAppGuid: "00000000-0000-0000-0000-000000000000",

};

export default AppSubscriptionDiscountEmail;

export const metadata = { subject: appSubscriptionDiscountTranslations.en.subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(AppSubscriptionDiscountEmail as any).subject = appSubscriptionDiscountTranslations.en.subject;
/* eslint-enable @typescript-eslint/no-explicit-any */