/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-source-google-docs",
    "gatsby-transformer-remark",
    "gatsby-source-google-docs",
  ],
};
