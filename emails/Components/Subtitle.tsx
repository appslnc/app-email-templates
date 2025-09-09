import { Text } from "@react-email/components";


export interface SubtitleProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Subtitle = ({ 
  children = "Subtitle text", 
  style = {} 
}: SubtitleProps) => {
  const subtitleStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 300,
    color: '#6B7280',
    fontFamily: 'Ubuntu, sans-serif',
    textAlign: 'center',
    marginBottom: '16px',
    marginTop: '0',
    lineHeight: '20px',
    ...style,
  };

  return (
    <Text style={subtitleStyle}>
      {children}
    </Text>
  );
};

export default Subtitle;