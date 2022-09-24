import React from 'react'
import styles from '../styles/ProjectLfPrototypes.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectLfPrototypes = ({ project }) => {
  const lowFidelityPrototypes = project?.lf_prototypes
  return (
    <div className={styles['project-lf-prototypes']}>
      <div className={styles['project-lf-prototypes__content']}>
        <h1>Low Fidelity Prototypes.</h1>
        <p>{lowFidelityPrototypes.desc}</p>
        <ul className={styles['project-lf-prototypes__content__images']}>
          {lowFidelityPrototypes?.images && lowFidelityPrototypes?.images?.data.map((img, index) => {
            return <li key={index}>
              <Image
                src={getStrapiMedia(img?.attributes)}
                alt={img?.attributes?.name}
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
              />
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProjectLfPrototypes