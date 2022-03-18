import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import type { MetaFunction } from 'remix';
import { ThemeProvider } from 'remix-theme';

import { getDescription, getTitle } from '~/lib/meta';
import Layout from '~/components/layout';

import styles from './styles/tailwind.css';

export const meta: MetaFunction = () => {
  return { title: getTitle(), description: getDescription() };
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <ThemeProvider attribute="class">
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />

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

          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-12870369-1"></script>
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
          />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <html lang="en">
      <head>
        <title>Not Found &ndash; Ian Sutherland &ndash; Always Be Coding</title>
        <Links />
      </head>
      <body className="bg-white transition duration-500 dark:bg-gray-900">
        <Layout>
          <h2 className="mb-3 text-2xl font-bold">Not Found</h2>
          <p className="content-links">
            The page you&rsquo;re looking for can&rsquo;t be found. Return to the{' '}
            <Link to="/">home</Link> page.
          </p>
        </Layout>
        <Scripts />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  console.error('CatchBoundary', caught);

  if (caught.status === 404) {
    return (
      <html lang="en">
        <head>
          <title>Not Found &ndash; Ian Sutherland &ndash; Always Be Coding</title>
          <Links />
        </head>
        <body className="bg-white transition duration-500 dark:bg-gray-900">
          <Layout>
            <h2 className="mb-3 text-2xl font-bold">Not Found</h2>
            <p className="content-links">
              The page you&rsquo;re looking for can&rsquo;t be found. Return to the{' '}
              <Link to="/">home</Link> page.
            </p>
          </Layout>
          <Scripts />
        </body>
      </html>
    );
  }

  throw new Error(`Unhandled error: ${caught.status}`);
}
