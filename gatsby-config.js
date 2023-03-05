/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The Art of Tsundoku: A Lifestyle Blog with Reading for Bookish`,
    description: `本を読むより買うことが好きになってきた読書好きのライフスタイルブログ`,
    twitterUsername: `@tsundokugal`,
    image: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-awesome-pagination",
    "gatsby-plugin-advanced-sitemap",
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: ``,
        contentApiKey: ``,
        version: ``,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }]
};