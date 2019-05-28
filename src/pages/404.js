import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const NotFoundPage = () => {
  return (
    <PageContainer className="NotFoundPage">
      <Layout>
        <h2>Not Found</h2>
        <p>
          The page you&rsquo;re looking for can&rsquo;t be found. Return to the{' '}
          <Link to="/">home</Link> page.
        </p>
      </Layout>
    </PageContainer>
  );
};

export default NotFoundPage;
