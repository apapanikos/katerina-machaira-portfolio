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
          <div className={styles['project-ideation__content__body__img']}>
            <Image
              src={getStrapiMedia(ideation?.content)}
              alt={ideation?.content.name}
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectIdeation
