import Head from '@components/head';
import Container from '@components/container';
import ProfilePicture from '@components/profile-picture';
import Bio from '@components/bio';
import { GitHubIcon, TwitterIcon } from '@components/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian Sutherland &ndash; Always Be Coding</title>
      </Head>

      <Container paddingBreakpoint="lg" width="5xl">
        <div className="pt-16 md:pt-24">
          <ProfilePicture size={192} borderSize={8} />
          <div className="text-center">
            <h1 className="font-bold text-3xl md:text-4xl mt-6">Ian Sutherland</h1>
            <div className="mt-5 leading-6 text-gray-700 content-links">
              <Bio more={true} />
            </div>
            <div>
              <div className="flex justify-center mt-8 space-x-3">
                <a
                  href="https://twitter.com/iansu"
                  className="inline-block w-5 h-5 md:w-6 md:h-6 hover:text-blue-500"
                >
                  <TwitterIcon size="100%" />
                </a>
                <a
                  href="https://github.com/iansu"
                  className="inline-block w-5 h-5 md:w-6 md:h-6 hover:text-blue-500"
                >
                  <GitHubIcon size="100%" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
