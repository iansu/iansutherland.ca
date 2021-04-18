import Head from 'next/head';

import Layout from '../components/layout';
import Profile from '../components/profile';
import {
  AngelListIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  SpotifyIcon,
  TwitterIcon,
} from '../components/icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ian Sutherland &ndash; About Me</title>
      </Head>

      <Layout>
        <Profile />
        <div className="mt-8 space-y-6 content-links">
          <p>
            I&rsquo;ve been building software professionally for over 15 years. I have a B.Sc. in
            Computer Science from the University of Calgary and I&rsquo;ve built web, mobile,
            desktop and server applications in a variety of languages. I currently work as a
            Principle Software Engineer at <a href="https://www.neofinancial.com/">Neo Financial</a>
            .
          </p>
          <p>
            If you&rsquo;re interested in my open source work take a look at my{' '}
            <a href="https://github.com/iansu">GitHub</a> profile or follow me on{' '}
            <a href="https://twitter.com/iansu">Twitter</a>. If you&rsquo;re interested in my
            professional work you can connect with me on{' '}
            <a href="https://www.linkedin.com/in/iansu">LinkedIn</a>.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-bold mb-3">Elsewhere</h3>
          <ul className="flex flex-wrap list-none">
            <li className="mr-6 mb-2">
              <a
                href="https://twitter.com/iansu"
                className="inline-flex space-x-2 hover:text-blue-500"
                data-hover-color="#1da1f2"
              >
                <TwitterIcon /> <span className="hover:text-black">Twitter</span>
              </a>
            </li>
            <li className="mr-6 mb-2">
              <a
                href="https://github.com/iansu"
                className="inline-flex space-x-2 hover:text-blue-500"
              >
                <GitHubIcon /> <span className="hover:text-black">GitHub</span>
              </a>
            </li>
            <li className="mr-6 mb-2">
              <a
                href="https://www.linkedin.com/in/iansu"
                className="inline-flex space-x-2 hover:text-blue-500"
                data-hover-color="#0077B5"
              >
                <LinkedInIcon /> <span className="hover:text-black">LinkedIn</span>
              </a>
            </li>
            <li className="mr-6 mb-2">
              <a
                href="https://angel.co/iansu"
                className="inline-flex space-x-2 hover:text-blue-500"
              >
                <AngelListIcon /> <span className="hover:text-black">AngelList</span>
              </a>
            </li>
            <li className="mr-6 mb-2">
              <a
                href="https://www.instagram.com/iansutherland/"
                className="inline-flex space-x-2 hover:text-blue-500"
                data-hover-color="#E4405F"
              >
                <InstagramIcon /> <span className="hover:text-black">Instagram</span>
              </a>
            </li>
            <li className="mr-6 mb-2">
              <a
                href="https://open.spotify.com/user/iansutherland.ca"
                className="inline-flex space-x-2 hover:text-blue-500"
                data-hover-color="#1ED760"
              >
                <SpotifyIcon /> <span className="hover:text-black">Spotify</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row mt-12 space-y-12 md:space-x-12 md:space-y-0 content-links">
          <div>
            <h3 className="text-lg font-bold mb-3">About This Site</h3>
            <p>
              This site is built with <a href="https://nextjs.org/">Next.js</a> and hosted on{' '}
              <a href="https://www.netlify.com/">Netlify</a>. The icons are from{' '}
              <a href="https://simpleicons.org/">Simple Icons</a>. The{' '}
              <a href="https://github.com/iansu/iansutherland.ca">source code</a> is available on
              GitHub under the MIT license.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Get In Touch</h3>
            <p>
              Got something to say? Want to take over the world? Send me a message on{' '}
              <a href="https://twitter.com/iansu">Twitter</a> or, if you&rsquo;re not into the whole
              brevity thing, <a href="mailto:hello@iansutherland.ca">send me an email</a>.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
