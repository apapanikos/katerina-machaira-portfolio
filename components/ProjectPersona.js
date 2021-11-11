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
        <div className = 'row mt-12'>
          <div className = 'col'>
            <h5 className={styles['project-persona__content__name']}>{persona.name}</h5>
            <div className={styles['project-persona__content__age']}>
              <span className='font-extrabold'>Age: </span> {persona.age}
            </div>
            <div className={styles['project-persona__content__edu']}>
              <span className='font-extrabold'> Education: </span> {persona.education}
            </div>
            <div className={styles['project-persona__content__family']}>
              <span className='font-extrabold'> Family: </span> {persona.family}
            </div>
          </div>
          <div className="col">
            <h5 className={styles['project-persona__content__goals']}>Goals</h5>
            <p dangerouslySetInnerHTML={{ __html: persona.goals}}></p>
          </div>
          <div className="col">
            <h5 className={styles['project-persona__content__frustrations']}>Frustrations</h5>
            <p dangerouslySetInnerHTML={{ __html: persona.frustrations}}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPersona
