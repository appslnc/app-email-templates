import {
  Head,
  Container,
  Heading,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from "@react-email/components";
import Layout from "../Components/Layout";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import PrimaryButton from "../Components/PrimaryButton";
import { promoAppSubscriptionTranslations } from "./Promo App Subscription.translations";

export interface PromoAppSubscriptionEmailProps {
  lang?: keyof typeof promoAppSubscriptionTranslations;
  appName?: string;
  discount?: string;
}

const PromoAppSubscriptionEmail = ({ lang = "en", appName = "Our App", discount = "50%" }: PromoAppSubscriptionEmailProps) => {
  const content = promoAppSubscriptionTranslations[lang] || promoAppSubscriptionTranslations["en"];
  
  const containerStyle = {
    maxWidth: '660px',
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

  const discountStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center' as const,
    marginBottom: '24px',
    fontFamily: 'Ubuntu, sans-serif',
  };


  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview.replace('{appName}', appName).replace('{discount}', discount)}</Preview>
      </Head>
      <Container style={containerStyle}>
        <Heading style={headingStyle}>{content.heading.replace('{appName}', appName)}</Heading>
        <Title style={{ fontSize: '52px' }}>
          {content.discountText.replace('{discount}', discount)}
        </Title>
        <Subtitle>
          {content.intro.replace('{appName}', appName).replace('{discount}', discount)}
        </Subtitle>
        <Section style={{ marginTop: '30px', marginBottom: '16px' }}>
          <Row>
            <Column align="center">
              <PrimaryButton
                href={content.button.link}
              >
                {content.button.text}
              </PrimaryButton>
            </Column>
          </Row>
        </Section>
        <Text style={{ ...textStyle, fontSize: '12px', marginBottom: '0', color: '#9CA3AF' }}>
          {content.terms}
        </Text>
      </Container>
    </Layout>
  );
};

PromoAppSubscriptionEmail.PreviewProps = {
  lang: "en",
  appName: "Our App",
  discount: "50%",
};

export default PromoAppSubscriptionEmail;

export const subject = (props?: PromoAppSubscriptionEmailProps) => {
  const lang = props?.lang ?? 'en';
  const content = promoAppSubscriptionTranslations[lang] || promoAppSubscriptionTranslations['en'];
  const appName = props?.appName ?? 'Our App';
  const discount = props?.discount ?? '';
  return (content.subject || `Limited Time: ${discount} OFF ${appName}`).replace('{appName}', appName).replace('{discount}', discount);
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(PromoAppSubscriptionEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */