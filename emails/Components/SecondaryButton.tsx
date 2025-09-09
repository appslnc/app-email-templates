import { Button } from "@react-email/components";


export interface SecondaryButtonProps {
  href: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const SecondaryButton = ({ 
  href, 
  children = "Learn More", 
  style = {} 
}: SecondaryButtonProps) => {
  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: '#000000',
    padding: '16px 31px',
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
    <Button href={href} style={secondaryButtonStyle}>
      {children}
    </Button>
  );
};

export default SecondaryButton;