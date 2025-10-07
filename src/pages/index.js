// src/pages/index.js
import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ProjectCard from "../components/ProjectCard"

// The main page component
const IndexPage = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  
  const coreSkills = [
      'Python, R, SQL', 
      'Tableau, Power BI, Matplotlib, Seaborn', 
      'Postgre SQL, Big Query', 
      'Data Wrangling & Normalization', 
      'Feature Engineering', 
      'Data Validation & Quality Checks',
      'Correlation & Causation Analysis',
      'Anomaly Detection',
      'Excel'
  ];

  return (
    <Layout>
      <section id="hero" style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>
            Hi, I'm **Sheikh Muhammad Jawad Ahmed** 📊
        </h1>
        <p style={{ fontSize: '1.4em', fontWeight: 300, maxWidth: '900px', margin: '0 auto 30px' }}>
          I am a **Data Analyst** specializing in transforming raw data into actionable insights and robust reporting solutions using **SQL, R, and Tableau.**
        </p>
        <a href="#projects" className="action-button">Explore My Work →</a>
      </section>

      <hr />

      <section id="projects" style={{ marginTop: '50px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Featured Data Analysis Projects</h2>
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </section>

      <hr />
      
      <section id="skills" style={{ marginTop: '80px', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Core Analytical Skills</h2>
        <div className="skills-grid">
            {coreSkills.map(skill => (
                <div key={skill} className="skill-item">
                    {skill}
                </div>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

// Query all projects from the Markdown files
export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        html
        frontmatter {
          title
          date(formatString: "MMM YYYY")
          slug
          stack
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, aspectRatio: 1.5)
            }
          }
        }
      }
    }
  }
`
