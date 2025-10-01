import { Link, Text, Section, Row, Column, Img } from "@react-email/components";
import { YOUTUBE_ICON_URL, FACEBOOK_ICON_URL, X_ICON_URL, LINKEDIN_ICON_URL, APPS_ICON_URL } from "../constants";

const footerContainerStyle = {
  marginTop: '40px',
  padding: '40px 20px',
  backgroundColor: '#F2F2F2',
  textAlign: 'center' as const,
  fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
};

const logoStyle = {
  marginBottom: '24px',
};

const socialLinksContainerStyle = {
  marginBottom: '24px',
};

const iconWrapperStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#808080',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  opacity: 0.7,
  transition: 'opacity 0.2s ease',
  margin: '0 8px',
};

const addressStyle = {
  fontSize: '14px',
  color: '#BEBEBE',
  lineHeight: '20px',
  marginBottom: '16px',
  fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const copyrightStyle = {
  fontSize: '14px',
  color: '#BEBEBE',
  fontFamily: 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

export const Footer = () => (
  <Section style={footerContainerStyle}>
    <Row style={logoStyle}>
      <Column align="center">
      <Link href="https://xn--pps-lla.com/">
        <Img
          src={APPS_ICON_URL}
          width="43"
          height="39"
          alt="Apps Inc."
        />
        </Link>
      </Column>
    </Row>
    <Row style={socialLinksContainerStyle}>
      <Column align="center">
        <table style={{ margin: '0 auto', borderCollapse: 'collapse' }}>
          <tr>
            <td style={{ padding: '0 5px' }}>
              <Link 
                href="https://youtube.com/@AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={YOUTUBE_ICON_URL}
                  width="18"
                  height="18"
                  alt="YouTube"
                  style={{ display: 'block' }}
                />
              </Link>
            </td>
            <td style={{ padding: '0 5px' }}>
              <Link 
                href="https://facebook.com/AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={FACEBOOK_ICON_URL}
                  width="18"
                  height="18"
                  alt="Facebook"
                  style={{ display: 'block' }}
                />
              </Link>
            </td>
            <td style={{ padding: '0 5px' }}>
              <Link 
                href="https://x.com/AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={X_ICON_URL}
                  width="18"
                  height="18"
                  alt="X"
                  style={{ display: 'block' }}
                />
              </Link>
            </td>
            <td style={{ padding: '0 5px' }}>
              <Link 
                href="https://linkedin.com/company/AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={LINKEDIN_ICON_URL}
                  width="18"
                  height="18"
                  alt="LinkedIn"
                  style={{ display: 'block', marginTop: '-2px', marginLeft: '1px' }}
                />
              </Link>
            </td>
          </tr>
        </table>
      </Column>
    </Row>
    <Text style={addressStyle}>
      6300 N Wickham Rd<br />
      Melbourne FL, 32940
    </Text>
    <Text style={copyrightStyle}>
      © {new Date().getFullYear()} Apps Inc. All Rights Reserved.
    </Text>
    
    {/* Inline styles for hover effect since React Email doesn't support :hover pseudo-class directly */}
    <style>{`
      .social-icon {
        opacity: 0.7 !important;
        transition: opacity 0.2s ease !important;
      }
      .social-icon:hover {
        opacity: 1 !important;
      }
    `}</style>
  </Section>
);

export default Footer;