import React from 'react';
import { Link } from 'gatsby';

import Page from '../components/page';
import Layout from '../components/layout';

const NotFoundPage = () => {
  return (
    <Page name="NotFoundPage">
      <Layout>
        <h2>Not Found</h2>
        <p>
          The page you&rsquo;re looking for can&rsquo;t be found. Return to the{' '}
          <Link to="/">home</Link> page.
        </p>
      </Layout>
    </Page>
  );
};

export default NotFoundPage;
