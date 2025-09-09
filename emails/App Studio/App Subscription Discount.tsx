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
  Img,
} from "@react-email/components";
import Layout from "../Components/Layout";
import Title from "../Components/Title";
import Subtitle from "../Components/Subtitle";
import { appSubscriptionDiscountTranslations } from "./App Subscription Discount.translations";

export interface AppSubscriptionDiscountEmailProps {
  lang?: keyof typeof appSubscriptionDiscountTranslations;
  appName?: string;
  discount?: string;
  expiryDate?: string;
  yearlyPlanCTA?: string;
  sixMonthPlanCTA?: string;
  monthlyPlanCTA?: string;
  titleText?: string;
  subtitleText?: string;
  appIcon?: string;
  previewText?: string;
  countdownImageUrl?: string;
}

const AppSubscriptionDiscountEmail = ({ 
  lang = "en",
  appName = "Our App",
  discount = "30%",
  expiryDate = "December 31, 2023",
  yearlyPlanCTA,
  sixMonthPlanCTA,
  monthlyPlanCTA,
  titleText,
  subtitleText,
  appIcon,
  previewText,
  countdownImageUrl
}: AppSubscriptionDiscountEmailProps) => {
  const content = appSubscriptionDiscountTranslations[lang] || appSubscriptionDiscountTranslations["en"];
  
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
                  src={countdownImageUrl || "/static/countdown.gif"}
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
        <Title style={{ marginTop: '20px' }}>{titleText || "Flash Offer: Extra 50% Off!"}</Title>
        
        {/* Subtitle */}
        <Subtitle>
          {subtitleText || "For a limited time only, enjoy an additional 50% off on top of our already low prices. Don't miss this chance to maximize your savings!"}
        </Subtitle>

        {/* Two Stacked Buttons */}
        <Section style={{ marginTop: '40px', marginBottom: '0px' }}>
          <Row>
            <Column align="center">
              <div style={buttonContainerStyle}>
                <Button
                  href={content.button.link}
                  style={{...buttonStyle, marginBottom: '12px'}}
                >
                  {yearlyPlanCTA || "<Yearly_Plan_50%>"}
                </Button>
                
                <Button
                  href={content.button.link}
                  style={secondaryButtonStyle}
                >
                  {monthlyPlanCTA || "<Monthly_Plan_50%>"}
                </Button>
              </div>
            </Column>
          </Row>
        </Section>
      </Container>
    </Layout>
  );
};

AppSubscriptionDiscountEmail.PreviewProps = {
  lang: "en",
  appName: "Our App",
  discount: "30%",
  expiryDate: "December 31, 2023",
};

export default AppSubscriptionDiscountEmail;