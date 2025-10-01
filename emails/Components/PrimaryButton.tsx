import { Button } from "@react-email/components";


export interface PrimaryButtonProps {
  href: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const PrimaryButton = ({ 
  href, 
  children = "Click Here", 
  style = {} 
}: PrimaryButtonProps) => {
  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '19px 32px',
    borderRadius: '12px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    fontFamily: 'Ubuntu, sans-serif',
    border: '2px solid #000000',
    fontSize: '16px',
    lineHeight: '20px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '450px',
    margin: '0 auto',
    minHeight: '60px',
    boxSizing: 'border-box',
    ...style,
  };

  return (
    <Button href={href} style={primaryButtonStyle}>
      {children}
    </Button>
  );
};

export default PrimaryButton;