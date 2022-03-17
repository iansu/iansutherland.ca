import { Links, LinksFunction, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import { ThemeProvider } from 'remix-theme';

import styles from './styles/tailwind.css';

export const meta: MetaFunction = () => {
  return { title: 'Ian Sutherland &ndash; Always Be Coding' };
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <ThemeProvider attribute="class">
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta
            name="description"
            content="
I’m a full stack software developer living in Calgary, Canada. I’m the maintainer of Create React App and I contribute to Node.js. I also work on a number of other open source projects, mostly in the JavaScript ecosystem."
          />

          <meta property="og:url" content="https://iansutherland.ca/" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="Ian Sutherland" />
          <meta property="og:image" content="https://iansutherland.ca/ian-sutherland-logo.png" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="iansu" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />

          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-12870369-1"></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-12870369-1');
              `,
          }}
        /> */}
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  );
}
