import behanceIcon from '../public/social/behance.svg'
import facebookIcon from '../public/social/facebook.svg'
import linkedinIcon from '../public/social/linkedin.svg'

export const navLinks = [
  { 
    name: "kat.", 
    path: "#home" ,
    parentClass: 'mb-3 nav-item',
    class: 'tracking-widest font-extrabold text-base'
  },
  {
    name: "About",
    path: "#about",
    parentClass: 'nav-item',
    class: ''
  },
  {
    name: "Projects",
    path: "#projects",
    parentClass: 'nav-item',
    class: ''
  },
  {
    name: "Contact",
    path: "#contact",
    parentClass: 'nav-item',
    class: ''
  },
]

export const socialIcons = [
  {source: behanceIcon, alt: 'behance'},
  {source: facebookIcon, alt: 'facebook'},
  {source: linkedinIcon, alt: 'linkedin'},
]