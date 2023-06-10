import PostCard from "@/components/PostCard";

export default function SavedPosts(){
    return(
        <Layout>
            <h1>Your saved posts</h1>
            <PostCard/>
            <PostCard/>
        </Layout>
    )
}