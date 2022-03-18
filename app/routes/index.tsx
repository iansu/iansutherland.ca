import { MetaFunction } from 'remix';

import { getTitle } from '~/lib/meta';
import Container from '~/components/container';
import ThemeToggle from '~/components/theme-toggle';
import ProfilePicture from '~/components/profile-picture';
import Bio from '~/components/bio';
import { TwitterIcon, GitHubIcon } from '../components/icons';

export const meta: MetaFunction = () => {
  return {
    title: getTitle(),
    description:
      'I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer of Create React App and I contribute to Node.js. I also work on a number of other open source projects, mostly in the JavaScript ecosystem.',
  };
};

export default function Home() {
  return (
    <Container width="max-w-6xl" paddingBreakpoint="lg:px-0">
      <div className="mt-6 flex flex-row-reverse">
        <ThemeToggle />
      </div>
      <div className="pt-8 pb-16 md:pt-12 md:pb-24">
        <ProfilePicture size={192} borderSize="border-8" />
        <div className="text-center">
          <h1 className="mt-6 text-3xl font-bold md:text-4xl">Ian Sutherland</h1>
          <div className="content-links mx-auto mt-5 max-w-4xl text-lg leading-6 text-gray-700 dark:text-gray-200">
            <Bio more={true} />
          </div>
          <div>
            <div className="mt-8 flex justify-center space-x-5">
              <a href="https://twitter.com/iansu" className="inline-block h-8 w-8">
                <TwitterIcon size="100%" />
              </a>
              <a href="https://github.com/iansu" className="inline-block h-8 w-8">
                <GitHubIcon size="100%" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
