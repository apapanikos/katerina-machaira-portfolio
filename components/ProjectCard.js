import React from 'react'
import styles from '../styles/ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* TO INCLUDE IMAGE */}
      </div>
      <div className={styles.right}>
        <h2>{project.title}</h2>
      </div>
    </div>
  )
}

export default ProjectCard
