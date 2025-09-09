import { Html, Head, Body } from "@react-email/components";
import Footer from "./Footer";


export interface LayoutProps {
    children: React.ReactNode;
    fontFamily?: 'sans' | 'serif' | 'mono' | 'custom' | 'brand';
    showFooter?: boolean;
}

const Layout = ({ children, fontFamily = 'sans', showFooter = true }: LayoutProps) => {
    const fontFamilyString = 'Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    
    return (
        <Html>
          
                <Head>
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700;800&display=swap" 
                        rel="stylesheet" 
                    />
                </Head>

                <Body style={{ 
                    margin: 0, 
                    padding: 0, 
                    fontFamily: fontFamilyString,
                } as React.CSSProperties}>
                    {children}
                    {showFooter && <Footer />}
                </Body>

        </Html>
    );
};

export default Layout;
