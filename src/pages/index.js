import React from 'react';

import Page from '../components/page';
import Layout from '../components/layout';
import Profile from '../components/profile';

const HomePage = () => {
  return (
    <Page name="HomePage">
      <Layout>
        <Profile more />
      </Layout>
    </Page>
  );
};

export default HomePage;
