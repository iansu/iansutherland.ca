import Link from 'next/link';

import Head from '@components/head';
import Layout from '@components/layout';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found &ndash; Ian Sutherland &ndash; Always Be Coding</title>
      </Head>

      <Layout>
        <h2 className="text-2xl font-bold mb-3">Not Found</h2>
        <p className="content-links">
          The page you&rsquo;re looking for can&rsquo;t be found. Return to the{' '}
          <Link href="/">home</Link> page.
        </p>
      </Layout>
    </>
  );
};

export default NotFound;
