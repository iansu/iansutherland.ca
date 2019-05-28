import React from 'react';
import styled from 'styled-components';

import Icon from './icon';

import IanSutherlandLogo from '../assets/images/ian-sutherland-logo.svg';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  align-items: center;
  margin: 2em 0 2.5em;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 0.4em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5em;
    }
  }
`;

const LogoContainer = styled.div`
  width: 48px;
  height: 48px;

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`;

const HeaderLinks = styled.div`
  a {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-top: 5px;
    color: black;
  }

  a:visited {
    color: #000;
  }

  a:hover,
  a:active {
    color: #007bff;
  }

  a + a {
    margin-left: 0.8em;
  }

  @media (max-width: 576px) {
    a {
      width: 16px;
      height: 16px;
      margin-top: 7px;
    }
  }
`;

const logoStyles = {
  width: '100%',
  height: '100%'
};

const Header = () => (
  <HeaderContainer>
    <HeaderLogo>
      <LogoContainer>
        <IanSutherlandLogo style={logoStyles} />
      </LogoContainer>
      <h1>Ian Sutherland</h1>
    </HeaderLogo>
    <HeaderLinks>
      <a href="https://twitter.com/iansu">
        <Icon name="twitter" size="100%" />
      </a>
      <a href="https://github.com/iansu">
        <Icon name="github" size="100%" />
      </a>
    </HeaderLinks>
  </HeaderContainer>
);

export default Header;
