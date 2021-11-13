import React from 'react'
import styles from '../styles/ProjectIdeation.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectIdeation = ({ project }) => {
  const ideation = project?.ideation
  return (
    <div className={styles['project-ideation']}>
      <div className={styles['project-ideation__content']}>
        <h1>Ideation.</h1>
        <div className={styles['project-ideation__content__body']}>
          <p>{ideation.desc}</p>
          {/* Uncomment when image is uploaded */}
          {/* <Image src={getStrapiMedia(ideation?.image)} alt={persona?.image.name} width={ideation?.image.width} height={ideation?.image.height}/> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectIdeation
