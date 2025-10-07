const path = require(`path`)

// Function to create pages from the project data
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      // Path will be: /projects/cyclistic-case-study
      path: `/projects/${node.frontmatter.slug}`,
      // Template for the project detail page
      component: path.resolve(`./src/templates/project-details.js`),
      // Data passed to the template (slug)
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
