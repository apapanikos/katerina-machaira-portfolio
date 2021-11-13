import React from 'react'
import styles from '../styles/ProjectUsabilityStudy.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectUsabilityStudy = ({ project }) => {
  const usabilityStudy = project?.usability_study
  return (
    <div className={styles['project-usability-study']}>
      <div className={styles['project-usability-study__content']}>
        <h1>Usability Stduy.</h1>
        <p>{usabilityStudy.desc}</p>
        <div className={styles['project-usability-study__content__findings']}>
          <h3>ROUND 1 FINDINGS</h3>
          <ul className={styles['project-usability-study__content__findings__list']}>
            {usabilityStudy?.first_round_findings && usabilityStudy?.first_round_findings.map((finding, index) => 
              <li key={index}>
                <span>{index + 1}.</span>
                <div className={styles['project-usability-study__content__findings__list__value']}>{finding?.value}</div>
              </li>
            )}
          </ul>
        </div>
        <div className={styles['project-usability-study__content__findings']}>
          <h3>ROUND 2 FINDINGS</h3>
          <ul className={styles['project-usability-study__content__findings__list']}>
            {usabilityStudy?.second_round_findings && usabilityStudy?.second_round_findings.map((finding, index) => 
              <li key={index}>
                <span>{index + 1}.</span>
                <div className={styles['project-usability-study__content__findings__list__value']}>{finding?.value}</div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectUsabilityStudy
