import React from 'react'
import styles from '../styles/ProjectResearch.module.css'

const ProjectResearch = ({ project }) => {
  console.log(project)
  const research = project?.research
  return (
    <div className={styles['project-research']}>
      <div className={styles['project-research__content']}>
        <h1>Research.</h1>
        <p>{research?.desc}</p>
        <h5>Pain Points</h5>
        <ul className={styles['project-research__content__points']}>
          {research?.pain_points && research?.pain_points.map((point, index) => 
            <li key={index}>
              <span>{index + 1}.</span>
              <div className={styles['project-research__content__points__value']}>{point?.value}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default ProjectResearch
