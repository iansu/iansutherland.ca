import { MetaFunction } from 'remix';

import { getTitle } from '~/lib/meta';
import Layout from '~/components/layout';
import ProfilePicture from '~/components/profile-picture';
import LinkBox from '~/components/link-box';
import { TwitterIcon, GitHubIcon, LinkedInIcon, PolyworkIcon, NeoIcon } from '~/components/icons';

export const meta: MetaFunction = () => {
  return {
    title: getTitle('Links'),
    description: 'Links to my various social media and other online profiles.',
  };
};

const Links = () => {
  return (
    <Layout>
      <ul>
        <LinkBox
          href="/"
          internal={true}
          icon={<ProfilePicture size={48} borderSize="border-0" />}
          title="IanSutherland.ca"
          description="Read my bio or my blog"
        />
        <LinkBox
          href="https://twitter.com/iansu"
          icon={<TwitterIcon size="48px" />}
          title="Twitter"
          description="Follow me on Twitter"
        />
        <LinkBox
          href="https://github.com/iansu"
          icon={<GitHubIcon size="48px" />}
          title="GitHub"
          description="Follow my work on GitHub"
        />
        <LinkBox
          href="https://www.linkedin.com/in/iansu"
          icon={<LinkedInIcon size="48px" />}
          title="LinkedIn"
          description="Connect with me on LinkedIn"
        />
        <LinkBox
          href="https://www.polywork.com/iansu"
          icon={<PolyworkIcon size="48px" />}
          title="Polywork"
          description="Connect with me on Polywork"
        />
        <LinkBox
          href="https://www.neofinancial.com/jobs"
          icon={<NeoIcon size="48px" />}
          title="Neo Financial"
          description="Work with me at Neo"
        />
      </ul>
    </Layout>
  );
};

export default Links;
