// src/components/ProjectCard.js
import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCard = ({ project }) => {
    const image = getImage(project.frontmatter.featuredImage);
    const shortDescription = project.html.split('##')[0].trim().substring(0, 150) + '...'; // Extracts the first paragraph
    
    return (
        <Link 
            to={`/projects/${project.frontmatter.slug}`} 
            className="project-card"
        >
            <div className="card-image-wrapper">
                {image && (
                    <GatsbyImage 
                        image={image} 
                        alt={`Featured image for ${project.frontmatter.title}`} 
                        className="card-image"
                    />
                )}
            </div>
            <div className="card-content">
                <h3>{project.frontmatter.title}</h3>
                <p className="card-meta">{project.frontmatter.date} | Stack: {project.frontmatter.stack.join(", ")}</p>
                <p className="card-excerpt">{shortDescription}</p>
                <span className="read-more-link">View Details →</span>
            </div>
        </Link>
    )
}

export default ProjectCard
