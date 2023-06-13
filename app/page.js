
// import Card from '@/components/Card'
// import NavigationCard from '@/components/NavigationCard'
"use client";

import { useSession } from '@supabase/auth-helpers-react'; 
import PostFormCard from '@/components/PostFormCard'
import PostCard from '@/components/PostCard'
import Layout from '@/components/layout' 


import Login from './login/page'

export default function Home() {
  
  const session = useSession();
 
  if(!session){
    return <Login/>
  }

  return (
     <Layout>
          <PostFormCard/>
          <PostCard/>
          
          </Layout>
     
        
   
  )
}
