type ProjectCategoriesProps = {
    categories: string[];
    currentCategory: string;
    setCategory: (category: string) => void;
}
const ProjectCategories = ({categories, currentCategory, setCategory}: ProjectCategoriesProps) => {
    return ( 
        <div className="flex gap-x-4">
                  {categories.map((category, index) => (
                    <button 
                    key={index+1}
                    className={`px-3 py-1 text-sm rounded-lg cursor-pointer ${currentCategory === category ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-800'}`}
                    onClick={() => setCategory(category)}> 
                            {category}</button>
                  ))}
                </div>
     );
}
 
export default ProjectCategories;