import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import About from '../components/About'
import { fetchAPI } from '../lib/api'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Index({ projects }) {
  return (
    <>
    <Hero />
    <About />
    <Projects projects = {projects} />
    <Contact />
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
  const projects = await fetchAPI('/api/projects?populate=*')

  return {
    props: { projects },
  };
}