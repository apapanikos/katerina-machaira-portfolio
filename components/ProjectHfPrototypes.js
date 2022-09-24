import React from 'react'
import styles from '../styles/ProjectHfPrototypes.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectHfPrototypes = ({ project }) => {
  const highFidelityPrototypes = project?.hf_prototypes
  return (
    <div className={styles['project-hf-prototypes']}>
      <div className={styles['project-hf-prototypes__content']}>
        <h1>High Fidelity Prototypes.</h1>
        <ul className={styles['project-hf-prototypes__content__images']}>
          {highFidelityPrototypes?.images && highFidelityPrototypes?.images?.data.map((img, index) => {
            return <li key={index}>
              <Image
                src={getStrapiMedia(img?.attributes)}
                alt={img?.attributes?.name}
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
