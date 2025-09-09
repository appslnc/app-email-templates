import { Img, Text, Section } from "@react-email/components";


// Apps Inc placeholder logo as data URI
const placeholderIcon = "data:image/svg+xml,%3Csvg fill='none' height='110' viewBox='0 0 122 110' width='122' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h121.25v109.25h-121.25z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)' clip-rule='evenodd' fill='%23BEBEBE' fill-rule='evenodd'%3E%3Cpath d='m4.53453 92.3051c-4.335542 2.5024-5.82164 8.0459-3.31929 12.3809 2.50235 4.336 8.04555 5.822 12.38106 3.319 4.3356-2.502 5.8217-8.0451 3.3193-12.3807-2.5023-4.3356-8.04552-5.8215-12.38107-3.3192z'/%3E%3Cpath d='m20.7826 64.3524c-4.3412 2.5003-5.8292 8.0389-3.3236 12.3708l16.5963 27.9668c2.5056 4.332 8.0561 5.817 12.3973 3.317 4.3412-2.501 5.8292-8.0393 3.3236-12.3713l-16.5963-27.9667c-2.5056-4.332-8.0561-5.8169-12.3973-3.3166z'/%3E%3Cpath d='m38.1758 33.3835c-4.3581 2.511-5.8519 8.0733-3.3366 12.4238l34.279 58.8627c2.5153 4.351 8.0873 5.842 12.4454 3.331 4.358-2.511 5.8519-8.0735 3.3365-12.424l-34.2789-58.8628c-2.5154-4.3505-8.0874-5.8417-12.4454-3.3307z'/%3E%3Cpath d='m56.3023 2.0302c-4.3539 2.50641-5.8463 8.0586-3.3334 12.4012l51.2941 90.2476c2.513 4.342 8.079 5.831 12.433 3.324 4.354-2.506 5.847-8.0583 3.334-12.4009l-51.2941-90.24722c-2.5129-4.34258-8.0797-5.83109-12.4336-3.32468z'/%3E%3C/g%3E%3C/svg%3E";

export interface UserAppProps {
  appIconUrl?: string;
  appName?: string;
  width?: number;
  height?: number;
}

const UserApp = ({ 
  appIconUrl, 
  appName = "App Name", 
  width = 120, 
  height = 120 
}: UserAppProps) => {
  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '24px',
  };

  const imageContainerStyle: React.CSSProperties = {
    display: 'inline-block',
    borderRadius: '30px',
    border: '1px solid #E5E7EB',
    padding: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    marginTop: '15px',
    marginBottom: '12px',
    animation: 'pulse 2s infinite',
    backgroundColor: '#F2F2F2',
  };

  const imageStyle: React.CSSProperties = {
    borderRadius: '20px',
    display: 'block',
  };

  const appNameStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '500',
    color: '#111827',
    fontFamily: 'Ubuntu, sans-serif',
    textAlign: 'center',
    marginTop: '12px',
  };

  return (
    <Section style={containerStyle}>
      <div style={imageContainerStyle}>
        <Img
          src={appIconUrl || placeholderIcon}
          width={width}
          height={height}
          alt={appName}
          style={imageStyle}
        />
      </div>
      <Text style={appNameStyle}>{appName}</Text>
      
      {/* CSS animation for pulsing shadow effect */}
      <style>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          50% {
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          }
          100% {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </Section>
  );
};

export default UserApp;