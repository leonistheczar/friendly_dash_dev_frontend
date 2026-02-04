import type { Route } from "./+types/index";
import type { Project, Posts, StrapiProject, StrapiPost, StrapiResponse } from "~/types";
import Hero from "~/components/Hero";
import FeaturedProjects from "~/components/Home/FeaturedProjects";
import AboutPreview from "~/components/Home/AboutPreview";
import PostsPreview from "~/components/Home/PostsPreview";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Freindly Dash Developer | Welcome 👋" },
    { name: "description", content: "Custom React Router-based website, focuses on Portfolio and Blogs!!" },
  ];
}
// Project Loader & Blog Posts loader
export async function loader({request}: Route.LoaderArgs){
    const res = await Promise.all([
      fetch(`${import.meta.env.VITE_API_URL_KEY}/projects?populate=*&featured=true`),
      fetch(`${import.meta.env.VITE_API_URL_KEY}/blog-posts?populate=*&_sort=date:desc`)
    ])
    if(!res[0].ok) throw new Error("Failed to fetch featured projects");
    if(!res[1].ok) throw new Error("Failed to fetch featured posts");
    // Featured Projects
    const dataProjects: StrapiResponse<StrapiProject> = await res[0].json();
    const projects = dataProjects.data.map((item) => ({
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,  
    image: item.image?.url ? `${item.image.url}`: '/images/no-image.png',
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured
    }));
    // Latest Blog Posts
    const dataPosts: StrapiResponse<StrapiPost> = await res[1].json();
    const posts = dataPosts.data.map((item) => ({
        id: item.id,
        documentId: item.documentId,
        title: item.title,
        image: item.image?.url ? `${item.image.url}` : '/images/no-image.png',
        date: item.date,
        slug: item.slug,
        post: item.post
    }))
    return {projects: projects, posts};
}
type HomeFeaturedData = {
  loaderData: {
    projects: Project[],
    posts: Posts[],
  }
}
export default function Home({loaderData}: HomeFeaturedData) {
  const { projects, posts } = loaderData;
  return <>
          <Hero name="Muhammad Ali" />
          <section 
            id="featured-sections"
            className="py-8 px-14 flex flex-col gap-10">
          <FeaturedProjects projects={projects} count={2} />
          <AboutPreview />
          <PostsPreview posts={posts} count={2}/>
            </section>
        </>
}
