import PostCard from "@/components/PostCard";
import Layout from "@/components/layout";

export default function SavedPosts(){
    return(
        <Layout>
            <h1 className ='text-6xl mb-4 text-gray-300 '>Saved posts</h1>
            <PostCard/>
            <PostCard/>
        </Layout>
    )
}