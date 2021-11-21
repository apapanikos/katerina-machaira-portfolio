import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import { socialIcons } from '../utils/data'

// TODO import pdf file
const resume = ''

const about = `Hey, my name is Katerina Machaira, and I am a passionate entry-level UI/UX designer, based in Athens, Greece. Understanding people, having empathy towards the challenges, and problem-solving are my go-to essentials in creating simple but at the same time innovative experiences for users.
I am open to internships, part-time and full-time junior positions in the UI/UX design field.`

const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.left}>
        <p>{about}</p>
        <a href={resume} rel="noopener noreferrer" target="_blank" className={styles.resumeBtn}>View my resume</a>
        <ul className={styles.icons}>
          {socialIcons && socialIcons.map((icon, index) => {
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
    </section>
  )
}

export default About
