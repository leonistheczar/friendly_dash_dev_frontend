import { Link } from "react-router";
import type { Posts, StrapiPost } from "~/types";
const PostCard = ({ postData }: { postData: Posts }) => {
  const blogImgStyle = {
    layout: "w-full h-40",
  };
  return (
    <article className="bg-gray-800 flex flex-col gap-2 p-6 rounded-lg mb-4 transition-all">
      <Link
        to={`/blogs/${postData.slug}`}
        className="text-2xl font-semibold text-blue-400 hover:underline"
      >
        {postData.title}
      </Link>
      <p className="text-gray-500 text-sm mt-1">
        Published on: {new Date(postData.date).toLocaleDateString()}
      </p>
      <img src={postData.image} alt={postData.title} className={`${blogImgStyle.layout} object-cover`}  />
      <p className="text-gray-300 mt-2">{postData.excerpt}</p>
      <Link
        to={`/blogs/${postData.slug}`}
        className="text-sm text-blue-300 hover:underline"
      >
        Read More ➡️
      </Link>
    </article>
  );
};

export default PostCard;
