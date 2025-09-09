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
    padding: '17px 32px',
    borderRadius: '15px',
    fontWeight: '500',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
    fontFamily: 'Ubuntu, sans-serif',
    border: '2px solid #000000',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '450px',
    margin: '0 auto',
    ...style,
  };

  return (
    <Button href={href} style={primaryButtonStyle}>
      {children}
    </Button>
  );
};

export default PrimaryButton;