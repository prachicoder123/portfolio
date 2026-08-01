import React from 'react'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects(){
  return (
    <section id="projects" className="container section">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}
