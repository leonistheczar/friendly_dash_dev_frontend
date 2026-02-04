import type { Project } from "~/types";
import { Link } from "react-router";
const ProductCard = ({project}:{project: Project}) => {
    return ( 
        <Link 
        className="block transition transform duration-300 hover:scale-[1.02]" 
        to={`/projects/${project.id}`}>
            <div className="flex flex-col bg-gray-800 border border-gray-700 overflow-hidden shadow-sm transition rounded-lg hover:shadow-md">
              <img src={project.image} alt={project.title} className="w-full object-cover h-60" />
              <div className="p-5">
                <h3 className="font-semibold text-blue-600 text-xl md:text-2xl mb-1">
                  {project.title}
                </h3>
                <div className="mt-2 flex text-gray-400 text-sm justify-between items-center">
                  <span>{project.category}</span>
                  <span>{new Date(project.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
        </Link>
     );
}
 
export default ProductCard;