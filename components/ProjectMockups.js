import React from 'react'
import styles from '../styles/ProjectMockups.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectMockups = ({ project }) => {
  const mockups = project?.mockups
  return (
    <div className={styles['project-mockups']}>
      <div className={styles['project-mockups__content']}>
        <h1>Mockups.</h1>
        <p>{mockups.desc}</p>
      </div>
    </div>
  )
}

export default ProjectMockups
