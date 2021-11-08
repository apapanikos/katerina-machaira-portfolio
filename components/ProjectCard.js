import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import Link from 'next/link'

const ProjectCard = ({ project, index }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* TO INCLUDE IMAGE */}
      </div>
      <div className={styles.right}>
        <h2 className={styles['project-title']}>{project.title}</h2>
        <h4 className={styles['project-desc']}>{project.description}</h4>
        <Link href={`projects/${project.slug}`} key={project.id}>
          <a className={styles['link-btn']}>View case study</a>
        </Link>
        <h2 className={styles['project-index']}>0{index + 1}.</h2>
      </div>
    </div>
  )
}

export default ProjectCard
