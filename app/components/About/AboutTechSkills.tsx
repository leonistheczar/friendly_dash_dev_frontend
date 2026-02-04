const AboutTechSkills = () => {
    return ( 
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-semibold">🚀 Tech I Use</h1>
        <ul className="flex flex-wrap gap-4">
          {["React.js", "Next.js", "Vue",
             "Typescript", "Node.js", "Tailwind CSS", 
             "Prisma ORM", "PostgreSQL", "Docker", "Git"].map((tech, index) => (
              <li key={index} className="bg-slate-700 text-sm rounded-md text-gray-200 list-none px-3 py-1 transition hover:bg-slate-800 hover:cursor-pointer hover:-translate-y-1">{tech}</li>
             ))}
        </ul>
      </div>
     );
}
 
export default AboutTechSkills;