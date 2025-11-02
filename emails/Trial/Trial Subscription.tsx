import {
  Head,
  Container,
  Preview,
  Section,
  Row,
  Column,
  Img,
} from "@react-email/components";
import Layout from "../Components/Layout";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import PrimaryButton from "../Components/PrimaryButton";
import { trialSubscriptionTranslations } from "./Trial Subscription.translations";


export interface TrialSubscriptionEmailProps {
  lang?: keyof typeof trialSubscriptionTranslations;
  userAppGuid: string;
  appName?: string;
  appIcon?: string;
}

const TrialSubscriptionEmail = ({
  lang = "en",
  appIcon,
  userAppGuid
}: TrialSubscriptionEmailProps) => {

  const baseUrl="https://services.igenapps.com"

  const subUrl = baseUrl+`?AppGuid=${userAppGuid}`;

  const content = trialSubscriptionTranslations[lang] || trialSubscriptionTranslations["en"];

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
    boxShadow: '0 4px 16px rgba(59, 130, 246, 0.4)',
    marginBottom: '10px',
  };

  const buttonContainerStyle = {
    width: '100%',
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview}</Preview>
      </Head>
      <Container style={containerStyle}>
        {/* App Icon */}
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

        {/* Benefits */}
        <Section style={{ marginBottom: '24px' }}>
          <Row>
            <Column align="center">
              <div style={{
                fontSize: '16px',
                color: '#059669',
                textAlign: 'center',
                margin: '0',
                lineHeight: '24px',
                whiteSpace: 'pre-line',
              }}>
                {content.benefits}
              </div>
            </Column>
          </Row>
        </Section>

        {/* Three Stacked Buttons */}
        <Section style={{ marginTop: '40px', marginBottom: '0px' }}>
          <Row>
            <Column align="center">
              {/* eslint-disable-next-line */}
              <div style={buttonContainerStyle}>
                <PrimaryButton
                  href={`${subUrl}&PlanId=144`}
                  style={{ marginBottom: '12px' }}
                >
                  {content.yearlyPlanCTA}
                </PrimaryButton>

                <PrimaryButton
                  href={`${subUrl}&PlanId=143`}
                  style={{ marginBottom: '12px' }}
                >
                  {content.sixMonthPlanCTA}
                </PrimaryButton>

                <PrimaryButton
                  href={`${subUrl}&PlanId=142`}
                >
                  {content.monthlyPlanCTA}
                </PrimaryButton>
              </div>
            </Column>
          </Row>
        </Section>

        {/* Terms */}
        <Section style={{ marginTop: '32px' }}>
          <Row>
            <Column align="center">
              <div style={{
                fontSize: '12px',
                color: '#6B7280',
                textAlign: 'center',
                margin: '0',
                lineHeight: '18px',
              }}>
                {content.terms}
              </div>
            </Column>
          </Row>
        </Section>
      </Container>
    </Layout>
  );
};

TrialSubscriptionEmail.PreviewProps = {
  lang: "en"
};

export default TrialSubscriptionEmail;

export const subject = (props?: TrialSubscriptionEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = trialSubscriptionTranslations[lang] || trialSubscriptionTranslations['en'];
  return content.subject;
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(TrialSubscriptionEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */