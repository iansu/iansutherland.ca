module.exports = {
  siteMetadata: {
    title: 'Ian Sutherland',
    author: 'Ian Sutherland',
    tagline: 'Always Be Coding',
    description: 'I’m a full stack software developer living in Calgary, Canada. I’m the maintainer of Create React App and I also contribute to a number of other open source projects, including Node.js, React and Yarn.',
    siteUrl: 'https://iansutherland.ca/',
    twitter: 'https://twitter.com/iansu'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-12870369-1'
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/.*\.svg$/
        }
      }
    },
    `gatsby-plugin-styled-components`
  ]
};
