import ReactMarkdown from "react-markdown";
import type { Route } from "./+types";
import type { Posts, StrapiPost, StrapiResponse } from "~/types";
import { Link } from "react-router";
export async function loader ({ request, params }: Route.LoaderArgs){
    const { slug } = params as { slug: string };
    const res = await fetch(`${import.meta.env.VITE_API_URL_KEY}/blog-posts?filter[slug][$eq]=${slug}&sort=date:desc&populate=*`);
    if(!res.ok) throw new Error ("Failed to fetch posts...");
    const json: StrapiResponse<StrapiPost> = await res.json();
    if(!json.data.length) throw new Response("Post Not Found", {status: 404});
    const item = json.data[0];
    const postDetails = {
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        date: item.date,
        slug: item.slug,
        post: item.post
    }
    return { postDetails };
}
type BlogPost = {
    loaderData: {
        postDetails: Posts,
    };
}
const BlogDetails = ({loaderData}: BlogPost) => {
    const { postDetails } = loaderData;

    return ( 
        <div className="max-w-4xl rounded-lg shadow-lg mx-auto bg-gray-900 px-6 py-12">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">{postDetails.title}</h1>
            <p className="text-sm text-gray-400 mb-6">{new Date(postDetails.date).toLocaleDateString()}</p>
            <img src={postDetails.image} alt={postDetails.title} className="w-full h-60 object-cover rounded-lg mb-6" />
            <div className="prose prose-invert max-w-none mb-12">
                <ReactMarkdown>{postDetails.post}</ReactMarkdown>
            </div>
            <Link to="/blogs" className="inline-block px-6 py-2 bg-blue-600 rounded-lg text-white transition hover:bg-blue-700">⬅️ Back to Blogs</Link>
        </div>
     );
}
 
export default BlogDetails;