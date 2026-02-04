import PostCard from "../PostCard";
import type { Posts } from "~/types";
type featuredPostsProps = {
    posts: Posts[],
    count: number
}
const PostsPreview = ({posts, count}: featuredPostsProps) => {
    const featuredPosts = posts.slice(0,count);
    return ( 
        <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-200 text-center sm:text-left">🆕 Latest Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 justify-between items-center">
                                {featuredPosts.map((post) => (
                                    <PostCard key={post.id} postData={post}/>
                                ))}
                            </div>
        </div>
     );
}
 
export default PostsPreview;