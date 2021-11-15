import React from 'react'
import styles from '../styles/ProjectNextSteps.module.css'

const ProjectNextSteps = ({ project }) => {
  const arrowIcon = <svg width="107" height="16" viewBox="0 0 107 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M106.707 8.7071C107.098 8.31657 107.098 7.68341 106.707 7.29288L100.343 0.928923C99.9526 0.538399 99.3194 0.538399 98.9289 0.928924C98.5384 1.31945 98.5384 1.95261 98.9289 2.34314L104.586 7.99999L98.9289 13.6568C98.5384 14.0474 98.5384 14.6805 98.9289 15.0711C99.3195 15.4616 99.9526 15.4616 100.343 15.0711L106.707 8.7071ZM8.74228e-08 9L106 8.99999L106 6.99999L-8.74228e-08 7L8.74228e-08 9Z" fill="black"/>
                    </svg>
  const nextSteps = project?.next_steps
  const renderArrow = (index) => index === 0 ? arrowIcon : null
  return (
    <div className={styles['project-next-steps']}>
     <div className={styles['project-next-steps__content']}>
       <h1>Next Steps.</h1>
       <ul className={styles['project-next-steps__content__list']}>
         {nextSteps && nextSteps.map((step, index) => {
           return <li key = {index} className={styles['project-next-steps__content__list__step']}>
             <div className={styles['project-next-steps__content__list__step__row']}>
              <span>{index + 1}.</span>
              {renderArrow(index)}
             </div>
             <p>{step.value}</p>
           </li>
         })}
       </ul>
     </div>
    </div>
  )
}

export default ProjectNextSteps
