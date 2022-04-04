import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ResumeIcon } from '../assets/resume.svg';

const HeaderWrapper = styled.header`
  padding: 1rem 0;
  margin-bottom: 0.5rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  color: #000;
  svg {
    width: 26px;
    heigth: 26px;
    margin-right: 10px;
  }
`;

interface HeaderProps {
  onPrintClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPrintClick }) => {
  return (
    <HeaderWrapper>
      <div className="ui-container">
        <ContentWrapper>
          <LogoLink href="/">
            <ResumeIcon />
            CV print
          </LogoLink>
          <button className="ui-button isLink" onClick={onPrintClick}>
            Print
          </button>
        </ContentWrapper>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
