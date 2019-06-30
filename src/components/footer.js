import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Icon from './icon';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin: 4rem 0 1rem;
  padding: 1rem 0;
  border-top: 1px solid #dee2e6;
  color: #6c757d;
  font-size: 0.9em;

  @media (max-width: 576px) {
    font-size: 0.75em;
  }
`;

const FooterCopyright = styled.div`
  a {
    color: #6c757d;
    border-bottom: 1px dotted #6c757d;
  }

  a:visited {
    color: #6c757d;
  }

  a:hover,
  a:active {
    color: #007bff;
    border-bottom: 1px solid #007bff;
  }
`;

const FooterLinks = styled.div`
  a {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-top: 2px;
    color: #6c757d;
  }

  a:visited {
    color: #6c757d;
  }

  a:hover,
  a:active {
    color: #007bff;
  }

  a + a {
    margin-left: 0.6rem;
  }

  @media (max-width: 576px) {
    a {
      width: 12px;
      height: 12px;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterCopyright>
        <div>
          &copy; {currentYear} <Link to="/">Ian Sutherland</Link>. All Rights Reserved.
        </div>
      </FooterCopyright>
      <FooterLinks>
        <a href="https://twitter.com/iansu">
          <Icon name="twitter" size="100%" />
        </a>
        <a href="https://github.com/iansu">
          <Icon name="github" size="100%" />
        </a>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
