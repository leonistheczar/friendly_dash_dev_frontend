import type { Route } from "./+types/index";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import ProductCard from "~/components/Projects/ProjectCard";
import Pagination from "../../components/Projects/Pagination";
import ProjectCategories from "~/components/Projects/ProjectCategories";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects | Freindly Dash Developer" },
    { name: "description", content: "Custom React Router-based website, focuses on Portfolio and Blogs!!" },
  ];
}
export async function loader({ request }: Route.LoaderArgs): Promise<{projects: Project[]}>{
  const url = `${import.meta.env.VITE_API_URL_KEY}/projects?populate=*`;
  const res = await fetch(url);
  const json:StrapiResponse<StrapiProject> = await res.json();
  const projectsData = json.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,  
    image: item.image?.url ? `${item.image.url}`: '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured
  }))
  return {projects: projectsData};
}
const ProjectPage = ({loaderData}: Route.ComponentProps) => {
  // Get server-loader data
  const { projects } = loaderData;
  // Project State
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCategory] = useState("All");
  // Category
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filterProjects = 
    currentCategory === "All" ? projects : projects.filter((project) => project.category === currentCategory);
  // Pagination logic
  const totalProjects = filterProjects.length;
  const projectsPerPage = 4;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filterProjects.slice(indexOfFirstProject, indexOfLastProject);
  return ( 
        <><h2 className="text-center text-3xl font-bold mb-8 text-white">🚀 Projects Page</h2>
        <ProjectCategories categories={categories} currentCategory={currentCategory} setCategory={setCategory} />
        <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4 space-y-4 p-4">
          {currentProjects.map((project) => (
             <motion.div layout key={project.id}>
               <ProductCard project={project} />
             </motion.div>
          ))}
        </motion.div>
        </AnimatePresence>
          {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        </>
     );
}
 
export default ProjectPage;