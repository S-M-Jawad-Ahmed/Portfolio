/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  // IMPORTANT: pathPrefix set for GitHub Pages hosting (repository name)
  pathPrefix: "/Portfolio", 
  siteMetadata: {
    title: `Data Analyst Portfolio | Sheikh Muhammad Jawad Ahmed`,
    description: `A dynamic and fast portfolio of data analysis projects.`,
    author: `@S-M-Jawad-Ahmed`,
    siteUrl: `https://S-M-Jawad-Ahmed.github.io/Portfolio/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // Source files for projects (Markdown)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    // Source files for images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/static/images/`,
      },
    },
    `gatsby-transformer-remark`, // Transforms Markdown into queryable data
  ],
}
