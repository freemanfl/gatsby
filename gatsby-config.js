/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-google-docs",
      options: {
        // https://drive.google.com/drive/folders/FOLDER_ID
        folder: "1kQeIoZ2Hf-fE6AEJnyiMbh72VaT5PI-I",
        createPages: true,
      },
    },
    "gatsby-source-google-docs",
    "gatsby-transformer-remark",
    "gatsby-source-google-docs",
  ],
};
