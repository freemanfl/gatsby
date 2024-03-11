/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-google-docs",
      options: {
        // https://drive.google.com/drive/folders/FOLDER_ID
        folder: "1kQeIoZ2Hf-fE6AEJnyiMbh72VaT5PI-I",
        createPages: true,
      },
    },
    "gatsby-transformer-remark",
    //
    // OR "gatsby-plugin-mdx" for advanced usage using MDX
    //
    // You need some transformations?
    // Checkout https://www.gatsbyjs.com/plugins/?=gatsby-remark
    // And pick-up some plugins
  ],
};
