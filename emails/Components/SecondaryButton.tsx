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
    padding: '19px 31px',
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
    <Button href={href} style={secondaryButtonStyle}>
      {children}
    </Button>
  );
};

export default SecondaryButton;