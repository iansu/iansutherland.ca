import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

import IanSutherlandLogo from '../assets/images/ian-sutherland-logo.png';

const Head = ({ pathname }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            tagline
            description
            twitter
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title, tagline, description, twitter }
      }
    }) => (
      <Helmet defaultTitle={`${title} - ${tagline}`} titleTemplate={`%s - ${title} - ${tagline}`}>
        <html lang="en" />
        <link rel="canonical" href={`${siteUrl}${pathname}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />

        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${siteUrl}${IanSutherlandLogo}`} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={twitter} />
      </Helmet>
    )}
  />
);

export default Head;
