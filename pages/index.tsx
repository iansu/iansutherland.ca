import Head from 'next/head';

import Layout from '../components/layout';
import Profile from '../components/profile';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian Sutherland &ndash; Always Be Coding</title>
      </Head>

      <Layout>
        <Profile more={true} />
      </Layout>
    </>
  );
}
