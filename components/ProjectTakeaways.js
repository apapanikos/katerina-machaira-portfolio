import React from 'react'
import styles from '../styles/ProjectTakeaways.module.css'

const ProjectTakeaways = ({ project }) => {
  const takeaways = project?.takeaways
  return (
    <div className={styles['project-takeaways']}>
      <div className={styles['project-takeaways__content']}>
        <h1>Takeaways.</h1>
        <div className={styles['project-takeaways__content__body']}>
          <h5>Impact.</h5>
          <p>{takeaways.impact}</p>
          <h5>What I learned.</h5>
          <p>{takeaways.results}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectTakeaways
