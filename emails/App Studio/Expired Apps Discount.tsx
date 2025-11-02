import {
  Head,
  Container,
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

import { COUNTDOWN_GIF_URL } from "../constants";
import { expiredAppsDiscountTranslations } from "./Expired Apps Discount.translations";

export interface ExpiredAppsDiscountEmailProps {
  lang?: keyof typeof expiredAppsDiscountTranslations;
  userAppGuid: string;
  appName?: string;
  appIcon?: string;
}

const ExpiredAppsDiscountEmail = ({
  lang = "en",
  appIcon,
  userAppGuid
}: ExpiredAppsDiscountEmailProps) => {

  const baseUrl="https://services.igenapps.com"

  const subUrl = baseUrl+`?AppGuid=${userAppGuid}`;

  const content = expiredAppsDiscountTranslations[lang] || expiredAppsDiscountTranslations["en"];

  const containerStyle = {
    maxWidth: '660px',
    margin: '0 auto',
    fontFamily: 'Ubuntu, sans-serif',
    padding: '30px 30px 10px 30px',
  };

  const iconStyle = {
    width: '96px',
    height: '96px',
    borderRadius: '24px',
    boxShadow: '0 4px 16px rgba(220, 38, 38, 0.4)',
    opacity: '0.7',
    filter: 'grayscale(50%)',
    marginBottom: '10px',
  };

  const buttonContainerStyle = {
    width: '100%',
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

        {/* App Icon with Expired Styling */}
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

        {/* Subtitle */}
        <Subtitle>
          {content.subtitleText}
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

ExpiredAppsDiscountEmail.PreviewProps = {
  lang: "en",
  appName: "My Expired App"
};

export default ExpiredAppsDiscountEmail;

export const subject = (props?: ExpiredAppsDiscountEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = expiredAppsDiscountTranslations[lang] || expiredAppsDiscountTranslations['en'];
  return content.subject;
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(ExpiredAppsDiscountEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */