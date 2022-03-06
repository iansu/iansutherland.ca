import Head from '@components/head';
import Container from '@components/container';
import ThemeToggle from '@components/theme-toggle';
import ProfilePicture from '@components/profile-picture';
import Bio from '@components/bio';
import { GitHubIcon, TwitterIcon } from '@components/icons';

const Home = () => {
  return (
    <>
      <Head>
        <title>Ian Sutherland &ndash; Always Be Coding</title>
      </Head>

      <Container width="max-w-6xl" paddingBreakpoint="lg:px-0">
        <div className="flex flex-row-reverse mt-6">
          <ThemeToggle />
        </div>
        <div className="pt-8 pb-16 md:pt-12 md:pb-24">
          <ProfilePicture size={192} borderSize="border-8" />
          <div className="text-center">
            <h1 className="font-bold text-3xl md:text-4xl mt-6">Ian Sutherland</h1>
            <div className="mt-5 mx-auto max-w-4xl leading-6 text-lg text-gray-700 dark:text-gray-200 content-links">
              <Bio more={true} />
            </div>
            <div>
              <div className="flex justify-center mt-8 space-x-5">
                <a href="https://twitter.com/iansu" className="inline-block w-8 h-8">
                  <TwitterIcon size="100%" />
                </a>
                <a href="https://github.com/iansu" className="inline-block w-8 h-8">
                  <GitHubIcon size="100%" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
