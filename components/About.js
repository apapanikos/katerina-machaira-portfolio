import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import behanceIcon from '../public/social/behance.svg'
import facebookIcon from '../public/social/facebook.svg'
import linkedinIcon from '../public/social/linkedin.svg'

const socialIcons = [
  {source: behanceIcon, alt: 'behance'},
  {source: facebookIcon, alt: 'facebook'},
  {source: linkedinIcon, alt: 'linkedin'},
]

// TODO import pdf file
const resume = ''

const about = 'Hello my name is Katerina Machaira and I am a passionate entry level Ui/Ux designer based in Greece. Hello my name is Katerina Machaira and I am a passionate. Hello my name is Katerina Machaira and I am a passionate entry level Ui/Ux designer based in Greece.'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>{about}</p>
        <a href={resume} without rel="noopener noreferrer" target="_blank" className={styles.resumeBtn}>View my resume</a>
        <ul className={styles.icons}>
          {socialIcons.map((icon, index) => {
            return <li key={index}>
              <Image src={icon.source} alt={icon.alt} width='30px' height='30px'/>
            </li>
          })}
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.tile}>
          <div className={styles.title}>
            <h1>About me.</h1>
            <div className={styles.divider}></div>
          </div>
          <h3 className={styles.subtitle}>
            Get to know me.
           </h3>
        </div>
      </div>
    </div>
  )
}

export default About
