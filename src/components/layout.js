import React from 'react';
import styled from 'styled-components';

import 'normalize.css';

import '../assets/css/index.css';
import '../assets/css/utilities.css';

import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 15px;
  max-width: 760px;
  min-height: 100vh;
`;

const PrimaryContent = styled.div`
  flex-grow: 1;

  a {
    color: black;
    border-bottom: 2px solid rgba(177, 229, 251, 0.6);
    box-shadow: inset 0 -8px 0 rgba(177, 229, 251, 0.6);
    text-decoration: none;
  }

  a:hover {
    background-color: rgba(177, 229, 251, 0.6);
    border-bottom: 2px solid rgba(177, 229, 251, 0.6);
    text-decoration: none;
  }

  a:visited,
  a:active {
    color: black;
  }
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Head />
    <Header />
    <PrimaryContent>{children}</PrimaryContent>
    <Footer />
  </LayoutContainer>
);

export default Layout;
