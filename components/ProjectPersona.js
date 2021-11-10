import React from 'react'
import styles from '../styles/ProjectPersona.module.css'
import Image from 'next/image'
import { getStrapiMedia } from '../lib/media'

const ProjectPersona = ({ project }) => {
  const persona = project?.persona
  return (
    <div className={styles['project-persona']}>
      <div className={styles['project-persona__content']}>
        <h1>Persona</h1>
        <div className={styles['project-persona__content__intro']}>
          {/* <Image src={getStrapiMedia(persona?.avatar)} alt={persona.avatar.name} width={persona.avatar.width} height={persona.avatar.height}/> */}
          <p>"{persona.desc}"</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPersona
