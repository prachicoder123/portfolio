import React from 'react'

export default function ProjectCard({project}){
  return (
    <article className="card">
      <h4>{project.title}</h4>
      <p className="tech">Tech: {project.tech}</p>
      <ul>
        {project.points.map((pt, i) => <li key={i}>{pt}</li>)}
      </ul>
      {project.url && <a className="link" href={project.url} target="_blank" rel="noreferrer">View Project</a>}
    </article>
  )
}
