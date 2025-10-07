// src/templates/project-details.js
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, date } = data.markdownRemark.frontmatter
  const image = getImage(data.markdownRemark.frontmatter.featuredImage)
  
  // Custom parsing for the project links table in Markdown
  const descriptionHtml = html.split('## Project Deliverables & Links')[0];
  const linksTableHtml = html.split('## Project Deliverables & Links')[1] ? '<h2>Project Deliverables & Links</h2>' + html.split('## Project Deliverables & Links')[1] : '';

  return (
    <Layout>
      <div className="project-detail-container">
        <h1 className="project-title">{title}</h1>
        
        {image && (
          <GatsbyImage 
            image={image} 
            alt={`Featured image for ${title}`} 
            className="project-featured-image"
          />
        )}

        <p className="project-meta">
          **Date:** {date} | **Stack:** {stack.join(" / ")}
        </p>
        
        {/* Main Content (Overview, Techniques, Insights) */}
        <div 
          className="project-content" 
          dangerouslySetInnerHTML={{ __html: descriptionHtml }} 
        />
        
        {/* Links Section (Deliverables) */}
        <div 
          className="project-links-section" 
          dangerouslySetInnerHTML={{ __html: linksTableHtml }} 
        />

        {/* Tableau Dashboard Embedding Link (New Tab) */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <a 
                href="/projects/tableau-dashboard-embed.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="dashboard-link"
            >
                View Tableau Dashboard (Opens in New Tab)
            </a>
        </div>


        <div style={{ marginTop: '40px' }}>
          <a href="/" className="back-link">← Back to Portfolio</a>
        </div>
      </div>
    </Layout>
  )
}

// GraphQL query to fetch the specific project data
export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        date(formatString: "MMMM YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 800)
          }
        }
      }
    }
  }
`
