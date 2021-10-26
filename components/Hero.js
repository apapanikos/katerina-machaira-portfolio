import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <h1>UI/UX</h1>
          <h1>Designer</h1>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.tile}>
          <div className={styles.title}>
            <h1>Port</h1>
            <h1>Folio.</h1>
          </div>
        </div>
        <div className={styles.subtitle}>
          <h3>Hello I am Katerina Machaira</h3>
          <h3>I am a Ui/Ux Designer</h3>
        </div>
      </div>
    </div>
  )
}

export default Hero