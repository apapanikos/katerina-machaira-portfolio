import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import { fetchAPI } from '../lib/api'

export default function Index({ projects }) {
  return (
    <>
    <Hero />
    <About />
    {projects && projects.map((project) => (
      <div key={project.id}>
        <h1>{project.title}</h1>
      </div>
    ))}
    </>
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

export async function getStaticProps() {
  // get projects from api using the helper function
  const projects = fetchAPI('/projects');

  return {
    props: { projects },
  }
}