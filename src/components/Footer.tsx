import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <span>CV print</span>
    </FooterWrapper>
  );
};

export default Footer;
