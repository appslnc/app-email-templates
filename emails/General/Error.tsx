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
import PrimaryButton from "../Components/PrimaryButton";

export interface ErrorEmailProps {
  subject: string;
  preview: string;
  heading: string;
  message: string;
  errorDetails?: string;
  actionUrl?: string;
  actionText?: string;
}

const ErrorEmail = ({
  subject,
  preview,
  heading,
  message,
  errorDetails,
  actionUrl,
  actionText
}: ErrorEmailProps) => {
  const containerStyle = {
    maxWidth: '660px',
    margin: '0 auto',
    padding: '30px',
    fontFamily: 'Ubuntu, sans-serif',
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

  const errorStyle = {
    fontSize: '14px',
    color: '#6B7280',
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '24px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap' as const,
  };

  return (
    <Layout fontFamily={"brand"}>
      <Head>
        <Preview>{preview}</Preview>
      </Head>
      <Container style={containerStyle}>
        <Heading style={headingStyle}>{heading}</Heading>
        <Text style={textStyle}>
          {message}
        </Text>

        {errorDetails && (
          <Section style={{ marginBottom: '32px' }}>
            <Text style={errorStyle}>
              {errorDetails}
            </Text>
          </Section>
        )}

        {actionUrl && actionText && (
          <Section style={{ marginBottom: '32px' }}>
            <Row>
              <Column align="center">
                <PrimaryButton
                  href={actionUrl}
                >
                  {actionText}
                </PrimaryButton>
              </Column>
            </Row>
          </Section>
        )}
      </Container>
    </Layout>
  );
};

ErrorEmail.PreviewProps = {
  subject: "System Error Alert",
  preview: "An error occurred in the system",
  heading: "System Error",
  message: "An unexpected error has occurred. Our team has been notified and is working to resolve the issue.",
  errorDetails: "Error ID: ERR-2025-11-02-001\nTimestamp: 2025-11-02T10:30:00Z\nComponent: UserService",
  actionUrl: "https://dashboard.example.com/errors",
  actionText: "View Error Details",
};

export default ErrorEmail;

// Export subject function
export const subject = (props?: ErrorEmailProps) => {
  return props?.subject || 'System Error';
};

export const metadata = { subject };
/* eslint-disable @typescript-eslint/no-explicit-any */
(ErrorEmail as any).subject = subject;
/* eslint-enable @typescript-eslint/no-explicit-any */