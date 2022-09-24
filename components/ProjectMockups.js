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
        <ul className={styles['project-mockups__content__images']}>
          {mockups?.images && mockups?.images?.data.map((img, index) => {
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

export default ProjectMockups
