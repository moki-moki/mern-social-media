import { FooterStyle, FooterText } from "./styles/FooterStyles";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <FooterStyle>
      <FooterText>&#169; {getYear} Moki-Moki, All Rights Reserved</FooterText>
    </FooterStyle>
  );
};

export default Footer;
