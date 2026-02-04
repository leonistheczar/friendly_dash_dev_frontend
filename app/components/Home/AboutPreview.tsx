import { Link } from "react-router";
const AboutPreview = () => {
    const styles = {
    size: "h-36 w-36",
  };
    return ( 
        <div className="flex flex-col bg-gray-900 md:flex-row rounded-md shadow-md p-8 gap-10 items-center md:justify-between">
        <img
          src="/images/profile.jpg"
          alt="Profile-Pic"
          className={`${styles.size} object-cover rounded-full border-4 border-blue-600 shadow-md`}
        />
        <div className="flex flex-col justify-center gap-2">
          <span className="font-bold text-xl sm:text-2xl text-white">Hey, I’m Muhammad Ali 👋</span>
          <h2 className="mb-2 text-gray-300 text-sm  sm:text-base ">
            Computer Science student focused on web development, with a keen
            interest in building scalable applications and strengthening my
            engineering fundamentals for a long-term tech career.
          </h2>
          <Link to="/about" className="text-sm text-blue-400 hover:text-blue-300" >Learn about me ➡️</Link>
        </div>
      </div>
     );
}
 
export default AboutPreview;