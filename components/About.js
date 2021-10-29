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

const about = 'Hello my name is Katerina Machaira and I am a passionate entry level Ui/Ux designer based in Greece. Hello my name is Katerina Machaira and I am a passionate. Hello my name is Katerina Machaira and I am a passionate entry level Ui/Ux designer based in Greece.'

const About = () => {
  console.log(socialIcons[0].source)
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>{about}</p>
        <div></div>
        <ul>
          {socialIcons.map((icon, index) => {
            return <li key={index}>
              <Image src={icon.source} alt={icon.alt} layout="fill"/>
            </li>
          })}
        </ul>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}

export default About
