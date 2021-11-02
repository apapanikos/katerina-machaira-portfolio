import { fetchAPI } from "../lib/api";

export default function Project({ project }) {
  return (<div>{project.title}</div>)
}

// tell next.js how many pages there are
export async function getStaticPaths() {
  const projects = await fetchAPI("/projects")

  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
  const projects = await fetchAPI(
    `/projects?slug=${params.slug}`
  );
  const project = projects[0]

  return {
    props: { project },
  };
}