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
        <ul className={styles['project-hf-prototypes__content__images']}>
          {highFidelityPrototypes?.images && highFidelityPrototypes?.images.map((img, index) => {
            return <li key={index}>
              <Image
                src={getStrapiMedia(img)}
                alt={img.name}
                layout="fill"
                objectFit="cover"
                objectPosition="50% 50%"
              />
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectHfPrototypes
