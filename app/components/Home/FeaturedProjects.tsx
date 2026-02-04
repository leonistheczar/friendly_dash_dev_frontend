import type { Project } from "~/types";
import ProjectCard from "../Projects/ProjectCard";
type featuredProjectsProps = {
    projects: Project[],
    count: number
}
const FeaturedProjects = ({projects, count}: featuredProjectsProps) => {
    const featured = projects.filter((project) => project.featured).slice(0, count);
    return ( 
        <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-200 text-center sm:text-left">💫 Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 justify-between items-center">
                    {featured.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>
        </div>
     );
}
 
export default FeaturedProjects;