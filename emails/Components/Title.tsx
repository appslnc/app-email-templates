import { Heading } from "@react-email/components";


export interface TitleProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Title = ({ 
  children = "Primary Title", 
  style = {} 
}: TitleProps) => {
  const h1Style: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 800,
    letterSpacing: '-1px',
    color: '#111827',
    fontFamily: 'Ubuntu, sans-serif',
    textAlign: 'center',
    marginBottom: '24px',
    marginTop: '0',
    ...style,
  };

  return (
    <Heading as="h1" style={h1Style}>
      {children}
    </Heading>
  );
};

export default Title;