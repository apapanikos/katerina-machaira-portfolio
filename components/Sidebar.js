import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a> 
          <h1 className="tracking-widest font-extrabold text-base">kat.</h1>
        </a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/services">
        <a>Services</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}