import Head from '@components/head';
import Layout from '@components/layout';

import ProfilePicture from '@components/profile-picture';
import LinkBox from '@components/link-box';
import { GitHubIcon, LinkedInIcon, PolyworkIcon, TwitterIcon } from '@components/icons';

const Links = () => {
  return (
    <>
      <Head>
        <title>Links &ndash; Ian Sutherland &ndash; Always Be Coding</title>
      </Head>

      <Layout>
        <ul>
          <LinkBox
            href="/about"
            internal={true}
            icon={<ProfilePicture size={48} borderSize="border-0" />}
            title="IanSutherland.ca"
            description="Read my bio or my blog"
          />
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
