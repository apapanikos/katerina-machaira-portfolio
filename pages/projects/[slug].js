import { fetchAPI } from "../../lib/api";
import Link from 'next/link'
import Layout from '../../components/Layout'
import ProjectDetails from "../../components/ProjectDetails"
import ProjectResearch from "../../components/ProjectResearch"
import ProjectPersona from "../../components/ProjectPersona"
import ProjectIdeation from "../../components/ProjectIdeation"
import ProjectWireframes from "../../components/ProjectWireframes";
import ProjectLfPrototypes from "../../components/ProjectLfPrototypes";
import ProjectUsabilityStudy from "../../components/ProjectUsabilityStudy";
import ProjectMockups from "../../components/ProjectMockups";
import ProjectHfPrototypes from "../../components/ProjectHfPrototypes";
import ProjectTakeaways from "../../components/ProjectTakeaways";
import ProjectNextSteps from "../../components/ProjectNextSteps";

export default function Project({ project }) {
  return (
    <div className="px-16 py-20">
      <div className="flex justify-between items-center p-8">
        <Link href="/">
          <a>
            <svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM58 10.5L2 10.5V13.5L58 13.5V10.5Z" fill="black"/>
            </svg>
          </a>
        </Link>
        <h1 className="text-7xl font-extrabold">{project?.attributes?.title}</h1>
        <div></div>
      </div>
      <ProjectDetails project = {project?.attributes} />
      <ProjectResearch project = {project?.attributes} />
      <ProjectPersona project = {project?.attributes} />
      <ProjectIdeation project = {project?.attributes} />
      <ProjectWireframes project = {project?.attributes} />
      <ProjectLfPrototypes project = {project?.attributes}/>
      <ProjectUsabilityStudy project = {project?.attributes}/>
      <ProjectMockups project = {project?.attributes}/>
      <ProjectHfPrototypes project = {project?.attributes}/>
      <ProjectTakeaways project = {project?.attributes} />
      <ProjectNextSteps project = {project?.attributes} />
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
  const projects = await fetchAPI("/api/projects?populate=*");
  const paths = projects?.data?.map((project) => ({
    params: {
      slug: project?.attributes?.slug || ''
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
    `/api/projects?populate=deep&filters[slug]=${slug}`
  );
  const project = projects?.data[0];

  return {
    props: { project },
  };
}