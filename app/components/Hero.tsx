import { Link } from "react-router";
const Hero = ({
  name = "[NAME]",
  text = "I build freindly web experiences and help others become confident, modern developers.",
}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 my-8">
      <header className="bg-gray-900 transition-colors flex flex-col gap-y-2 sm:gap-0 rounded-md text-center py-20 px-4 text-white duration-300">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">Hey, I am {name} 👋</h2>
        <p className="text-sm text-gray-300 mx-auto max-w-2xl mb-6">{text}</p>
        <div className="flex justify-center gap-4">
          <Link
            to={"/projects"}
            className="px-4 py-1 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to={"/contact"}
            className="px-4 py-1 border-2 border-blue-600 rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Hero;
