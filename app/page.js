
// import Card from '@/components/Card'
// import NavigationCard from '@/components/NavigationCard'
"use client";

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'; 
import PostFormCard from '@/components/PostFormCard'
import PostCard from '@/components/PostCard'
import Layout from '@/components/layout' 
import Login from './login/page'
import { useEffect, useState } from 'react';
import { UserContext } from '@/components/context/UserContext';


export default function Home() {
const supabase =useSupabaseClient();
const [posts,setPosts]= useState([]);
const [profile, setProfile] = useState(!null);
const session = useSession();

useEffect(()=>{
  fetchposts();
 },[]);
useEffect(()=>{

 if(!session?.user?.id){
  return;
 }
 supabase.from('profile').select().eq('id',session.user.id).then(result => {
  if(result.data.length){
    setProfile(result.data[0]);
  }
})
},[session?.user?.id])
  
function fetchposts(){
  supabase.from('posts').select('id,content,created_at, photos ,profile(id,avatar,name)').order('created_at',{ascending:false }).then(result =>{
    setPosts(result.data);
  })
}

 
 
  if(!session){
    return <Login/>
  }

  return (
     <Layout>
      <UserContext.Provider value={profile}>
          <PostFormCard onPost={fetchposts}/>
          {posts?.length >0 && posts.map(post =>(
            <PostCard key={post.created_at}{...post}/>
          ))}
          </UserContext.Provider>
          
          </Layout>
     
        
   
  )
}
