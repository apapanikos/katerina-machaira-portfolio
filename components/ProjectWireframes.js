import React from 'react'
import styles from '../styles/ProjectWireframes.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectWireframes = ({ project }) => {
  const wireframes = project?.wireframes
  return (
    <div className={styles['project-wireframes']}>
      <div className={styles['project-wireframes__content']}>
        <h1>Wireframes.</h1>
        <p>{wireframes.desc}</p>
        <ul className={styles['project-wireframes__content__images']}>
          {wireframes?.images && wireframes?.images?.data.map((img, index) => {
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

export default ProjectWireframes
