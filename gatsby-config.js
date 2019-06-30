module.exports = {
  siteMetadata: {
    title: 'Ian Sutherland',
    author: 'Ian Sutherland',
    tagline: 'Always Be Coding',
    description:
      'I’m a full stack software developer living in Calgary, Canada. I’m the maintainer of Create React App and I contribute to Node.js. I also work on a number of other open source projects, mostly in the JavaScript ecosystem.',
    siteUrl: 'https://iansutherland.ca/',
    twitter: 'https://twitter.com/iansu'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-12870369-1'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/.*\.svg$/
        }
      }
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-styled-components'
  ]
};
