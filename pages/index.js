import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Container from '../components/Container'

export default function Home() {
  return (
  <Container
    title="Katerina Machaira - UI/UX Designeer & Content Creator"
    description="Desc"
  >
    <Hero />
  </Container>
  )
}
