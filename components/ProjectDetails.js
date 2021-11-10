import React from 'react'
import styles from '../styles/ProjectDetails.module.css'
import Moment from 'react-moment'

const ProjectDetails = ({ project }) => {
  const details = project?.details
  return (
    <div className={styles['project-details']}>
      <div className={styles['project-details__content']}>
        <div className={styles['project-details__content__desc']}>
          <h5>The product</h5>
          <p>{details?.product_desc}</p>
        </div>
        <div className={styles['project-details__content__desc']}>
          <h5>The problem</h5>
          <p>{details?.problem}</p>
        </div>
        <div className={styles['project-details__content__row']}>
          <div className={styles['project-details__content__column']}>
            <div className={styles['project-details__content__desc']}>
              <h5>The goal</h5>
              <p>{details?.goal}</p>
            </div>
            <div className={styles['project-details__content__desc']}>
              <h5>Project Duration.</h5>
              <p>
                <Moment format="MMMM YYYY">{details.start_date}</Moment> - 
                <Moment format="MMMM YYYY">{details.end_date}</Moment>
              </p>
            </div>
            <div className={styles['project-details__content__desc']}>
              <h5>Target Audience.</h5>
              <p>{details.target_audience}</p>
            </div>
          </div>
          <div className={styles['project-details__content__column--end']}>
            <div className={styles['project-details__content__desc']}>
              <h5>Responsibilities</h5>
              <p dangerouslySetInnerHTML={{ __html: details.responsibilities}}></p>
            </div>
            <div className={styles['project-details__content__desc']}>
              <h5>My Role.</h5>
              <p>{details.my_role}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles['project-details__title']}>Project\ 0{project?.id}</h1>
    </div>
  )
}

export default ProjectDetails
