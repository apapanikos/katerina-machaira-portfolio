import React from 'react'
import styles from '../styles/Contact.module.css'
import Image from 'next/image'
import { socialIcons } from '../utils/data'

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h1 className={styles['contact-title']}>Contact.</h1>
      <div className={styles['contact-info']}>
        <div className={styles['contact-info__left']}>
          <h2 className={styles['contact-info__left__subtitle']}>Contact.</h2>
          <div className={styles['contact-info__left__box']}>
            <span className={styles['contact-info__left__box__logo']}>kat.</span>
            <div className={styles['contact-info__left__box__content']}>
              <h4 className={styles['contact-info__left__box__content__title']}>Let's work together.</h4>
              <a className={styles['contact-info__left__box__content__email']} href="mailto:aikaterinimachaira@gmail.com">aikaterinimachaira@gmail.com</a>
              <div className={styles['contact-info__left__box__content__social']}>
                <span>Social</span>
                <ul className={styles['contact-info__left__box__content__social__icons']}>
                  {socialIcons && socialIcons.map((icon, index) => 
                    <li key={index}>
                      <Image src={icon.source} alt={icon.alt} width='30px' height='30px'/>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['contact-info__slogan']}>
          <p>Get in touch with me</p>
          <p>with me</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
