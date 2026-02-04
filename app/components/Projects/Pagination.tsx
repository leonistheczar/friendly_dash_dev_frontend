const Pagination = ({totalPages, currentPage, setCurrentPage}: {totalPages: number, currentPage: number, setCurrentPage: (page: number) => void}) => {
    return ( 
            <div className="flex justify-center items-center gap-2">
      {Array.from({length: totalPages}, (_,index) => (
        <button 
          key={index+1}
          className={`px-4 py-2 cursor-pointer rounded-lg 
            ${currentPage === index+1 ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-800'}`}
          onClick={() => setCurrentPage(index+1)} >
            {index+1}
          </button>
      ))}
    </div>
     );
}
 
export default Pagination;