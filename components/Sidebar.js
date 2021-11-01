import Link from 'next/link'
import React, { useEffect, useState } from "react"
import styles from '../styles/Sidebar.module.css'
import { navLinks } from "../utils/data";
import { useRouter } from 'next/router';
import clsx from "classnames";

const LinkItem = (props) => {
  const router = useRouter()
  const liStyle = clsx({
    [styles['nav-item']]: true,
    [styles['nav-item--active']]: router.asPath == `/${props.value.path}`
  })
  return (
    <li className={liStyle}>
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