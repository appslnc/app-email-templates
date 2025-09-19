import { Link, Text, Section, Row, Column, Img } from "@react-email/components";
import { YOUTUBE_ICON_URL, FACEBOOK_ICON_URL, X_ICON_URL, LINKEDIN_ICON_URL } from "../constants";

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

const socialLinkStyle = {
  display: 'inline-block',
  margin: '0 10px',
};

const iconWrapperStyle = {
  width: '32px',
  height: '32px',
  padding: '6px',
  borderRadius: '50%',
  backgroundColor: '#808080',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  opacity: 0.7,
  transition: 'opacity 0.2s ease',
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

// Apps Inc Logo - Exact SVG as provided
const appsIncLogoIcon = "data:image/svg+xml,%3Csvg fill='none' height='110' viewBox='0 0 122 110' width='122' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h121.25v109.25h-121.25z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)' clip-rule='evenodd' fill='%23CDCDCD' fill-rule='evenodd'%3E%3Cpath d='m4.53453 92.3051c-4.335542 2.5024-5.82164 8.0459-3.31929 12.3809 2.50235 4.336 8.04555 5.822 12.38106 3.319 4.3356-2.502 5.8217-8.0451 3.3193-12.3807-2.5023-4.3356-8.04552-5.8215-12.38107-3.3192z'/%3E%3Cpath d='m20.7826 64.3524c-4.3412 2.5003-5.8292 8.0389-3.3236 12.3708l16.5963 27.9668c2.5056 4.332 8.0561 5.817 12.3973 3.317 4.3412-2.501 5.8292-8.0393 3.3236-12.3713l-16.5963-27.9667c-2.5056-4.332-8.0561-5.8169-12.3973-3.3166z'/%3E%3Cpath d='m38.1758 33.3835c-4.3581 2.511-5.8519 8.0733-3.3366 12.4238l34.279 58.8627c2.5153 4.351 8.0873 5.842 12.4454 3.331 4.358-2.511 5.8519-8.0735 3.3365-12.424l-34.2789-58.8628c-2.5154-4.3505-8.0874-5.8417-12.4454-3.3307z'/%3E%3Cpath d='m56.3023 2.0302c-4.3539 2.50641-5.8463 8.0586-3.3334 12.4012l51.2941 90.2476c2.513 4.342 8.079 5.831 12.433 3.324 4.354-2.506 5.847-8.0583 3.334-12.4009l-51.2941-90.24722c-2.5129-4.34258-8.0797-5.83109-12.4336-3.32468z'/%3E%3C/g%3E%3C/svg%3E";

export const Footer = () => (
  <Section style={footerContainerStyle}>
    <Row style={logoStyle}>
      <Column align="center">
        <Img
          src={appsIncLogoIcon}
          width="43"
          height="39"
          alt="Apps Inc."
        />
      </Column>
    </Row>
    <Row style={socialLinksContainerStyle}>
      <Column align="center">
        <table style={{ margin: '0 auto' }}>
          <tr>
            <td style={socialLinkStyle}>
              <Link 
                href="https://youtube.com/@AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={YOUTUBE_ICON_URL}
                  width="24"
                  height="24"
                  alt="YouTube"
                />
              </Link>
            </td>
            <td style={socialLinkStyle}>
              <Link 
                href="https://facebook.com/AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={FACEBOOK_ICON_URL}
                  width="24"
                  height="24"
                  alt="Facebook"
                />
              </Link>
            </td>
            <td style={socialLinkStyle}>
              <Link 
                href="https://x.com/AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={X_ICON_URL}
                  width="24"
                  height="24"
                  alt="X"
                />
              </Link>
            </td>
            <td style={socialLinkStyle}>
              <Link 
                href="https://linkedin.com/company/AppsInc" 
                style={iconWrapperStyle}
                className="social-icon"
              >
                <Img
                  src={LINKEDIN_ICON_URL}
                  width="24"
                  height="24"
                  alt="LinkedIn"
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