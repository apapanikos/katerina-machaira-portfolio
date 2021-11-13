import React from 'react'
import styles from '../styles/ProjectHfPrototypes.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectHfPrototypes = ({ project }) => {
  const highFidelityPrototypes = project?.high_fidelity_prototypes
  return (
    <div className={styles['project-hf-prototypes']}>
      <div className={styles['project-hf-prototypes__content']}>
        <h1>High Fidelity Prototypes.</h1>
      </div>
    </div>
  )
}

export default ProjectHfPrototypes
