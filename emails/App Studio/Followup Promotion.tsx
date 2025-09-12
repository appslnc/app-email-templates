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
} from "@react-email/components";
import Layout from "../Components/Layout";
import { followupPromotionTranslations } from "./Followup Promotion.translations";

export interface FollowupPromotionEmailProps {
  lang?: keyof typeof followupPromotionTranslations;
  appName?: string;
  userName?: string;
  offerType?: string;
}

const FollowupPromotionEmail = ({ 
  lang = "en", 
  appName = "Our App", 
  userName = "there",
  offerType = "premium features"
}: FollowupPromotionEmailProps) => {
  const content = followupPromotionTranslations[lang] || followupPromotionTranslations["en"];
  
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

  const personalizedStyle = {
    fontSize: '18px',
    color: '#111827',
    textAlign: 'center' as const,
    marginBottom: '24px',
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
  };

  const highlightBoxStyle = {
    backgroundColor: '#F8FAFC',
    border: '2px solid #E2E8F0',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '24px',
  };

  const highlightTextStyle = {
    fontSize: '16px',
    color: '#1E293B',
    textAlign: 'center' as const,
    margin: '0',
    fontFamily: 'Ubuntu, sans-serif',
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview.replace('{appName}', appName)}</Preview>
      </Head>
      <Container style={containerStyle}>
        <Text style={personalizedStyle}>
          {content.greeting.replace('{userName}', userName)}
        </Text>
        <Heading style={headingStyle}>
          {content.heading.replace('{appName}', appName)}
        </Heading>
        <Text style={textStyle}>
          {content.intro.replace('{appName}', appName).replace('{offerType}', offerType)}
        </Text>
        <Section style={highlightBoxStyle}>
          <Text style={highlightTextStyle}>
            {content.valueProposition}
          </Text>
        </Section>
        <Text style={textStyle}>
          {content.socialProof}
        </Text>
        <Section style={{ marginBottom: '32px' }}>
          <Row>
            <Column align="center">
              <Button
                href={content.button.link}
                style={buttonStyle}
              >
                {content.button.text}
              </Button>
            </Column>
          </Row>
        </Section>
        <Text style={{ ...textStyle, fontSize: '14px', marginBottom: '16px' }}>
          {content.benefits}
        </Text>
        <Text style={{ ...textStyle, fontSize: '14px', color: '#9CA3AF' }}>
          {content.closing}
        </Text>
      </Container>
    </Layout>
  );
};

FollowupPromotionEmail.PreviewProps = {
  lang: "en",
  appName: "Our App",
  userName: "Alex",
  offerType: "premium features",
};

export default FollowupPromotionEmail;

export const subject = (props?: FollowupPromotionEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = followupPromotionTranslations[lang] || followupPromotionTranslations['en'];
  const appName = props?.appName ?? 'our app';
  return (content.subject || `Thinking about ${appName}?`).replace('{appName}', appName);
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(FollowupPromotionEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */