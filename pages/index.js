import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

export default function Index() {
  return (
    <Hero />
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}