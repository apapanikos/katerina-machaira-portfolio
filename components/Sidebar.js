import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'
import { navLinks } from "../utils/data";

const LinkItem = (props) => {
  return (
    <li className={props.value.parentClass}>
      <Link href={props.value.path}>
        <a className={props.value.class}>
          {props.value.name}
        </a>
      </Link>
    </li>
  )
}

const LinksList = (props) => {
  const links = props.navLinks
  const navLinks = links.map((link, index) => 
    <LinkItem key={index} value={link}/>
  )
  return (
    <ul>{navLinks}</ul>
  )
}

const Sidebar = () => {
  return (
    <aside className={styles.nav}>
      <LinksList navLinks={navLinks} />
    </aside>
  )
}

export default Sidebar