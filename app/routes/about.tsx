import { MetaFunction } from 'remix';

import Layout from '~/components/layout';
import Profile from '~/components/profile';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  PolyworkIcon,
  AngelListIcon,
} from '../components/icons';

export const meta: MetaFunction = () => {
  return {
    title: 'About Me &ndash; Ian Sutherland &ndash; Always Be Coding',
    description:
      'I&rsquo;m a full stack software developer living in Calgary, Canada. I&rsquo;m the maintainer of Create React App and I contribute to Node.js. I also work on a number of other open source projects, mostly in the JavaScript ecosystem.',
  };
};

const About = () => {
  return (
    <Layout>
      <Profile />
      <div className="content-links mt-8 space-y-6">
        <p>
          I&rsquo;ve been building software professionally for over 15 years. I have a B.Sc. in
          Computer Science from the University of Calgary and I&rsquo;ve built web, mobile, desktop
          and server applications in a variety of languages. I&rsquo;m currently an engineering lead
          and DX team lead at <a href="https://www.neofinancial.com/">Neo Financial</a> (we&rsquo;re{' '}
          <a href="https://www.neofinancial.com/careers">hiring</a>).
        </p>
        <p>
          If you&rsquo;re interested in my open source work take a look at my{' '}
          <a href="https://github.com/iansu">GitHub</a> profile or follow me on{' '}
          <a href="https://twitter.com/iansu">Twitter</a>. If you&rsquo;re interested in my
          professional work you can connect with me on{' '}
          <a href="https://www.linkedin.com/in/iansu">LinkedIn</a>.
        </p>
        <p>
          Want to know what I&rsquo;m working on this month? Take a look at my list of{' '}
          <a href="https://pages.iansutherland.ca/current-work">current projects</a>. Want to know
          what equipment I use? Take a look at my{' '}
          <a href="https://pages.iansutherland.ca/uses">list of gear</a>.
        </p>
      </div>
      <div className="mt-12">
        <div className="content-links">
          <h3 className="mb-3 text-lg font-bold">Speaking</h3>
          <p>
            I&rsquo;ve spoken at conferences and meetups as well as appeared on podcasts and
            livestreams. Take a look at my{' '}
            <a href="https://pages.iansutherland.ca/speaking">past talks</a> and if you&rsquo;re
            interested in having me speak or be a guest, please get in touch.
          </p>
        </div>
        <h3 className="mb-3 mt-12 text-lg font-bold">Elsewhere</h3>
        <ul className="flex list-none flex-wrap">
          <li className="mr-6 mb-2">
            <a href="https://twitter.com/iansu">
              <TwitterIcon />
            </a>
          </li>
          <li className="mr-6 mb-2">
            <a href="https://github.com/iansu">
              <GitHubIcon />
            </a>
          </li>
          <li className="mr-6 mb-2">
            <a href="https://www.linkedin.com/in/iansu">
              <LinkedInIcon />
            </a>
          </li>
          <li className="mr-6 mb-2">
            <a href="https://www.polywork.com/iansu">
              <PolyworkIcon />
            </a>
          </li>
          <li className="mr-6 mb-2">
            <a href="https://angel.co/iansu">
              <AngelListIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="content-links mt-12 flex flex-col space-y-12 md:flex-row md:space-x-12 md:space-y-0">
        <div>
          <h3 className="mb-3 text-lg font-bold">About This Site</h3>
          <p>
            This site is built with <a href="https://remix.run/">Remix</a> and{' '}
            <a href="https://tailwindcss.com/">Tailwind</a> and hosted on{' '}
            <a href="https://vercel.com/">Vercel</a>. The icons are from{' '}
            <a href="https://simpleicons.org/">Simple Icons</a> and{' '}
            <a href="https://heroicons.com/">Heroicons</a>. The{' '}
            <a href="https://github.com/iansu/iansutherland.ca">source code</a> is available on
            GitHub under the MIT license.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-lg font-bold">Get In Touch</h3>
          <p>
            Got something to say? Want to take over the world? Send me a message on{' '}
            <a href="https://twitter.com/iansu">Twitter</a> or, if you&rsquo;re not into the whole
            brevity thing, <a href="mailto:hello@iansutherland.ca">send me an email</a>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
