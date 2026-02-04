import { Link } from "react-router";
import type { Route } from "./+types/index";
import type { Posts, StrapiPost, StrapiResponse } from "~/types";
import { useState } from "react";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Projects/Pagination";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs | Freindly Dash Developer" },
    {
      name: "description",
      content:
        "Custom React Router-based website, focuses on Portfolio and Blogs!!",
    },
  ];
}
export async function loader({request,}: Route.LoaderArgs): Promise<{fetchPosts: Posts[]}> {
  const res = await fetch(`${import.meta.env.VITE_API_URL_KEY}/blog-posts?populate=image`);
  if (!res.ok) throw new Error("Failed to fetch blog posts");
  const postsData: StrapiResponse<StrapiPost> = await res.json();
  const fetchPosts = postsData.data.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        post: item.post,
        slug: item.slug,
        excerpt: item.excerpt,
        date: item.date,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
  }))
  return { fetchPosts };
}
const BlogsPage = ({ loaderData }: Route.ComponentProps) => {
  const [filterPost, getFilterPost] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { fetchPosts } = loaderData;
  console.log(fetchPosts);
  const getPosts = 
    // My initial algo for filtering posts (for future reference)
    // if(filterPost === ''){
    //   return post;
    // }
    // else{
    //   if (post.title.toLowerCase().includes(filterPost.toLowerCase())) {
    //     return post;
    //   }
    // }
    filterPost === '' ? [...fetchPosts] : fetchPosts.filter(post => post.title.toLowerCase().includes(filterPost.toLowerCase()));
    // Pagination logic
  const totalPosts = getPosts.length;
  const postsPerPage = 3;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = getPosts.slice(indexOfFirstPost, indexOfLastPost);
    return (
    <div className="bg-gray-900 p-6 max-w-4xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">
        📜 Blogs
      </h2>
      {/* Search Input */}
      <div>
        <input
          type="text"
          onChange={(e) => { getFilterPost(e.target.value)
                             setCurrentPage(1);
           }}
          placeholder="Search Posts..."
          className=" w-full bg-gray-800 p-2 rounded-lg transition-all outline-none focus:ring-2 focus:ring-blue-600 focus:bg-gray-900"
        />
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {currentPosts.map((post) => (
          <PostCard key={post.slug } postData={post} />
        ))}
      </div>
          {totalPages > 1 && <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default BlogsPage;
