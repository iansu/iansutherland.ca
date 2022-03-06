import Head from 'next/head';
import Script from 'next/script';

const HeadComponent = ({ children }) => {
  return (
    <Head>
      {children}
      {/* <link rel="canonical" href={`${siteUrl}${pathname}`} /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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

      <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-12870369-1"></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-12870369-1');
          `,
        }}
      />
    </Head>
  );
};

export default HeadComponent;
