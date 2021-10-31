import Link from 'next/link'
import React, { useEffect, useState } from "react"
import styles from '../styles/Sidebar.module.css'
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
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
  const [isVisible, setIsVisible] = useState(true)
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {   
    window.addEventListener("scroll", listenToScroll)
    return () => 
      window.removeEventListener("scroll", listenToScroll)
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 200
    let heightToShow = 500
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
       
    if (winScroll > heightToHideFrom && winScroll < heightToShow) { 
       isVisible &&      // to limit setting state only the first time         
         setIsVisible(false)
    } else {
         setIsVisible(true)
    }  
  }
  return (
    <aside style={{opacity: isVisible ? '1' : '0'}} className={styles.nav}>
      <LinksList navLinks={navLinks} />
    </aside>
  )
}

export default Sidebar