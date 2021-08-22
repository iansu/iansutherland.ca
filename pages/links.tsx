import Head from '@components/head';
import Layout from '@components/layout';

import Profile from '@components/profile';
import LinkBox from '@components/link-box';
import { GitHubIcon, LinkedInIcon, PolyworkIcon, TwitterIcon } from '@components/icons';

const Links = () => {
  return (
    <>
      <Head>
        <title>Links &ndash; Ian Sutherland &ndash; Always Be Coding</title>
      </Head>

      <Layout>
        <div className="mb-8">
          <Profile more={true} />
        </div>
        <ul>
          <LinkBox
            href="https://twitter.com/iansu"
            icon={<TwitterIcon colorful={true} size="48px" />}
            title="Twitter"
            description="Follow me on Twitter or send me a DM"
          />
          <LinkBox
            href="https://github.com/iansu"
            icon={<GitHubIcon size="48px" />}
            title="GitHub"
            description="Follow my work on GitHub"
          />
          <LinkBox
            href="https://www.linkedin.com/in/iansu"
            icon={<LinkedInIcon colorful={true} size="48px" />}
            title="LinkedIn"
            description="Connect with me on LinkedIn"
          />
          <LinkBox
            href="https://www.polywork.com/iansu"
            icon={<PolyworkIcon colorful={true} size="48px" />}
            title="Polywork"
            description="Connect with me on Polywork"
          />
        </ul>
      </Layout>
    </>
  );
};

export default Links;
