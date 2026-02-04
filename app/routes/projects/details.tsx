import type { Route } from "./+types/details";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
export async function loader({
  request,
  params,
}: Route.LoaderArgs) {
  const { id } = params;
  const res = await fetch(`${import.meta.env.VITE_API_URL_KEY}/projects?filter[documentId][$eq]=${id}&populate=*`);
  if (!res.ok)
    throw new Response("Failed to fetch project details", {
      status: res.status,
    });
  const json: StrapiResponse<StrapiProject> = await res.json();
  const item = json.data[0];
  const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,  
    image: item.image?.url ? `${import.meta.env.VITE_STRAPI_URL_KEY}${item.image.url}`: '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured
  }
  return { project };
}

const ProductDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { project } = loaderData || {};
  return (
    <>
      <Link
        to="/projects"
        className="flex items-center text-blue-500 mb-4 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back to Projects
      </Link>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-4 items-start bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-sm p-4">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover h-60 mb-4 rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            {project.title}
          </h2>
          <div className="text-gray-400 text-sm mb-4">
            <span className="mr-4">{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
          <p className="text-gray-300">{project.description}</p>
          <a href={project.url} target="_blank" className="inline-block rounded transition mt-2 bg-blue-600 px-6 py-2 hover:bg-blue-700">Check Live Site</a>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
