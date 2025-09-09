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
import { productsPromoTranslations } from "./Products Promo.translations";

export interface ProductsPromoEmailProps {
  lang?: keyof typeof productsPromoTranslations;
  recipientName?: string;
}

const ProductsPromoEmail = ({ 
  lang = "en",
  recipientName = ""
}: ProductsPromoEmailProps) => {
  const content = productsPromoTranslations[lang] || productsPromoTranslations["en"];
  
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  const headingStyle = {
    fontSize: '28px',
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
    display: 'inline-block',
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu, sans-serif',
  };

  const productBoxStyle = {
    backgroundColor: '#F9FAFB',
    padding: '24px',
    borderRadius: '8px',
    marginBottom: '24px',
    textAlign: 'center' as const,
    fontFamily: 'Ubuntu, sans-serif',
  };

  const productTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '8px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  const productDescStyle = {
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '16px',
    lineHeight: '20px',
    fontFamily: 'Ubuntu, sans-serif',
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Ubuntu, sans-serif',
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{content.preview}</Preview>
      </Head>
      <Container style={containerStyle}>
        <Heading style={headingStyle}>{content.heading}</Heading>
        {recipientName && (
          <Text style={textStyle}>
            {content.greeting.replace('{name}', recipientName)}
          </Text>
        )}
        <Text style={textStyle}>
          {content.intro}
        </Text>
        
        {content.products.map((product, index) => (
          <Section key={index} style={productBoxStyle}>
            <Text style={productTitleStyle}>{product.name}</Text>
            <Text style={productDescStyle}>{product.description}</Text>
            <Text style={priceStyle}>{product.price}</Text>
          </Section>
        ))}
        
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
        
        <Text style={textStyle}>
          {content.closing}
        </Text>
      </Container>
    </Layout>
  );
};

ProductsPromoEmail.PreviewProps = {
  lang: "en",
  recipientName: "John"
};

export default ProductsPromoEmail;