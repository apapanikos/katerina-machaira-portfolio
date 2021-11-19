import React from 'react'
import styles from '../styles/ProjectCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectCard = ({ project, index }) => {
  const getObjectPosition = (index) => ( index & 1 ) ? 'left bottom' : 'right bottom'
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles['image-container']}>
          <Link href={`/projects/${project.slug}`} key={project.id}>
            <Image
              src={getStrapiMedia(project?.thumbnail)}
              alt={project?.thumbnail.name}
              width={700}
              height={450}
              layout="fill"
              objectFit="cover"
              objectPosition={getObjectPosition(index + 1)}
            />
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles['project-title']}>{project.title}</h2>
        <h4 className={styles['project-desc']}>{project.description}</h4>
        <Link href={`/projects/${project.slug}`} key={project.id}>
          <a className={styles['link-btn']}>View case study</a>
        </Link>
        <h2 className={styles['project-index']}>0{index + 1}.</h2>
      </div>
    </div>
  )
}

export default ProjectCard
