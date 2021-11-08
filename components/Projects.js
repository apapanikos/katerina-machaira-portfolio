import React from 'react'
import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard'

const Projects = ({ projects }) => {
  const MOCK_PROJECTS = [
    {id: 1, title: 'Eaters', description: 'Mobile food app.'},
    {id: 2, title: 'Estate', description: 'Real estate responsive website.'},
    {id: 3, title: 'Medio', description: 'Medicine reminder cross - platform tool.'},
  ]
  return (
    <section id="projects" className={styles.container}>
      <h1>Projects</h1>
      <ul className={styles['projects-list']}>
        {projects && projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}
      </ul>
    </section>
  )
}

export default Projects