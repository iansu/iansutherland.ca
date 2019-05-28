import React from 'react';
import styled from 'styled-components';

import 'normalize.css';

import '../assets/css/index.css';

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
