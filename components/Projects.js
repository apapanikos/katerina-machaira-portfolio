import React from 'react'
import styles from '../styles/Projects.module.css'
import ProjectCard from './ProjectCard'

const Projects = ({ projects }) => {
  return (
    <section id="projects" className={styles.container}>
      <h1>Projects</h1>
      <ul className={styles['projects-list']}>
        {projects && projects?.data?.map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}
      </ul>
    </section>
  )
}

export default Projects