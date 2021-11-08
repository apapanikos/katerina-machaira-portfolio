import { fetchAPI } from "../../lib/api";
import Link from 'next/link'
import Layout from '../../components/Layout'
import Sidebar from '../../components/Sidebar'

export default function Project({ project }) {
  return (
    <div>
      <Link href="/">
        <a>Go Home</a>
      </Link>
      <h2>{project.title}</h2>
    </div>
  )
}

Project.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const projects = await fetchAPI("/projects");
  const paths = projects?.map((project) => ({
    params: {
      slug: project?.slug || ''
    },
  }))
  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const { slug } = params;

  const projects = await fetchAPI(
    `/projects?slug=${slug}`
  );
  const project = projects[0];

  return {
    props: { project },
  };
}