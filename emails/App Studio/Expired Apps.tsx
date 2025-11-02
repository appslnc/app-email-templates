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
import { expiredAppsTranslations } from "./Expired Apps.translations";

export interface ExpiredAppsEmailProps {
  lang?: keyof typeof expiredAppsTranslations;
  userAppGuid: string;
  appName?: string;
  appIcon?: string;
}

const ExpiredAppsEmail = ({
  lang = "en",
  appName = "Your App",
  appIcon,
  userAppGuid
}: ExpiredAppsEmailProps) => {

  const baseUrl="https://services.igenapps.com"

  const subUrl = baseUrl+`?AppGuid=${userAppGuid}`;

  const content = expiredAppsTranslations[lang] || expiredAppsTranslations["en"];

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
    color: '#dc2626',
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
    boxShadow: '0 4px 16px rgba(220, 38, 38, 0.4)',
    opacity: '0.7',
    filter: 'grayscale(50%)',
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
      </Head>
      <Container style={containerStyle}>
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
        <Title>{content.heading}</Title>

        {/* Subtitle */}
        <Subtitle>
          {content.subtitleText}
        </Subtitle>

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
      </Container>
    </Layout>
  );
};

ExpiredAppsEmail.PreviewProps = {
  lang: "en",
  appName: "My Awesome App"
};

export default ExpiredAppsEmail;

export const subject = (props?: ExpiredAppsEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = expiredAppsTranslations[lang] || expiredAppsTranslations['en'];
  const appName = props?.appName ?? 'Your App';
  return (content.subject || `Your App Access Has Expired`).replace('{appName}', appName);
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(ExpiredAppsEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */