'use client'

import Layout from "@/components/layout"
import Card from "@/components/Card"
import Avatar from "@/components/Avatar"
import Link from "next/link"
import PostCard from "@/components/PostCard"
import { usePathname } from "next/navigation"
import FriendInfo from "@/components/FriendInfo"

export default function ProfilePage() {
  const pathname = usePathname()
  const isPost = pathname.includes('Post') || pathname === '/Profile'
  const isAbout = pathname.includes('About')
  const isFriends = pathname.includes('Friends')
  const isPhots = pathname.includes('Photos')

  const tabclasses = "flex gap-1 px-4 py-1 item-center border-b-4"
  const activetabclasses = 'flex gap-1 px-4 py-1 item-center border-b-5 border-blue-500 rounded-full hover:bg-blue-500'

  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-md" >
          <div className="h-36 overflow-hidden flex justify-center items-center">
            <img src="https://www.thoughtco.com/thmb/EXpjUAx2ZEgV64eKcsAsX7Ucl6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg" alt="shiva" />
          </div>
          <div className=" absolute top-24 left-2">
            <Avatar size={'lg'} />
          </div>
          <div className="p-4  pt-0 md:pt-4 pb-0">
            <div className=" ml-24 md:ml-40">
              <h1 className="text-3xl font-bold">Ayush Srivastava </h1>
              <div className="text-gray-500">Delhi, India</div>

            </div>
            <div className="mt-4 md:mt-10 flex gap-0" >

              <Link href={'/Post'} className={isPost ? activetabclasses : tabclasses} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>

                <span className="hidden sm:block">Posts</span>

              </Link>
              <Link href={'/About'} className={isAbout ? activetabclasses : tabclasses}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>

                <span className="hidden sm:block">About</span>

              </Link>
              <Link href={'/Friends'} className={isFriends ? activetabclasses : tabclasses}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>

                <span className="hidden sm:block">Friends</span>

              </Link>
              <Link href={'/Photos'} className={isPhots ? activetabclasses : tabclasses}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>

                <span className="hidden sm:block"> Photos</span>

              </Link>


            </div>
          </div>
        </div>
      </Card>
{isPost && (
      <div>
        <PostCard />
        </div>
        )
        }
        {isAbout && (
      <div>
        <Card>
          <h2 className="text-3xl mb-2">About Me</h2>
          <p className="mb-4 text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit autem quo porro exercitationem architecto nobis, necessitatibus sapiente aut beatae obcaecati itaque aliquam, incidunt explicabo blanditiis odit et libero quam omnis assumenda ratione? Nostrum provident, possimus veniam incidunt accusantium amet, eum esse labore ex totam voluptate rem consectetur recusandae autem aut delectus sunt culpa nobis quis sed. Ullam dolor nemo nihil dicta, veniam exercitationem dolores consequatur! Laboriosam omnis ullam accusamus similique doloribus deleniti quis autem consequuntur minima repudiandae delectus doloremque amet dicta ipsa voluptatem nihil, impedit fugiat aliquam, accusantium, dolores tenetur! Esse dignissimos distinctio neque exercitationem, quas sint mollitia animi soluta rem omnis tenetur, alias quaerat. Laboriosam atque distinctio quos eos? Necessitatibus ut qui maiores, cupiditate placeat facilis? Quae unde voluptates possimus quaerat aliquid, atque rerum corporis accusantium beatae eaque. Minus quia, soluta officiis nihil dignissimos, consequuntur, quod esse et laboriosam distinctio maxime debitis qui repellat recusandae placeat sunt aliquid! Nam, unde! Nihil sit dicta nulla iste, iusto amet labore nostrum enim nisi necessitatibus quod ut quis laboriosam debitis earum deserunt commodi incidunt, consequuntur dolor. Saepe culpa consequuntur incidunt harum reprehenderit temporibus quo, necessitatibus asperiores dicta expedita quidem qui mollitia nesciunt amet impedit illum aut, pariatur, fugiat quam sed hic placeat. Repellat odio ratione architecto pariatur deserunt quibusdam ullam, illo nostrum doloribus hic aspernatur culpa. Magni tempore placeat accusantium dolor consequuntur cupiditate aliquid, similique exercitationem dignissimos ut animi vero magnam ullam officia dolorem officiis a. Optio, veniam! Atque dolorem eaque possimus maiores est porro iure perferendis id sint! Fugit recusandae beatae architecto molestiae pariatur eos, ipsa quas hic a. Facilis nihil adipisci ab. Iusto, maiores libero laudantium, repudiandae error facere ut suscipit ratione quia animi saepe molestias quisquam odit? Vero libero ea, assumenda fugiat possimus quod voluptate fuga repellendus accusantium officia delectus distinctio vitae impedit, consequuntur culpa. Vero ab consequuntur optio quisquam incidunt, doloribus excepturi minus ad fugit nam quibusdam temporibus odio suscipit. Cum necessitatibus ut amet, accusamus inventore libero, voluptatum, temporibus molestiae nesciunt laudantium excepturi modi delectus cumque dolores! Qui totam ab in odit porro doloribus dolor molestiae deserunt nam sint?
         </p>
          <p className="mb-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit autem quo porro exercitationem architecto nobis, necessitatibus sapiente aut beatae obcaecati itaque aliquam, incidunt explicabo blanditiis odit et libero quam omnis assumenda ratione? Nostrum provident, possimus veniam incidunt accusantium amet, eum esse labore ex totam voluptate rem consectetur recusandae autem aut delectus sunt culpa nobis quis sed. Ullam dolor nemo nihil dicta, veniam exercitationem dolores consequatur! Laboriosam omnis ullam accusamus similique doloribus deleniti quis autem consequuntur minima repudiandae delectus doloremque amet dicta ipsa voluptatem nihil, impedit fugiat aliquam, accusantium, dolores tenetur! Esse dignissimos distinctio neque exercitationem, quas sint mollitia animi soluta rem omnis tenetur, alias quaerat. Laboriosam atque distinctio quos eos? Necessitatibus ut qui maiores, cupiditate placeat facilis? Quae unde voluptates possimus quaerat aliquid, atque rerum corporis accusantium beatae eaque. Minus quia, soluta officiis nihil dignissimos, consequuntur, quod esse et laboriosam distinctio maxime debitis qui repellat recusandae placeat sunt aliquid! Nam, unde! Nihil sit dicta nulla iste, iusto amet labore nostrum enim nisi necessitatibus quod ut quis laboriosam debitis earum deserunt commodi incidunt, consequuntur dolor. Saepe culpa consequuntur incidunt harum reprehenderit temporibus quo, necessitatibus asperiores dicta expedita quidem qui mollitia nesciunt amet impedit illum aut, pariatur, fugiat quam sed hic placeat. Repellat odio ratione architecto pariatur deserunt quibusdam ullam, illo nostrum doloribus hic aspernatur culpa. Magni tempore placeat accusantium dolor consequuntur cupiditate aliquid, similique exercitationem dignissimos ut animi vero magnam ullam officia dolorem officiis a. Optio, veniam! Atque dolorem eaque possimus maiores est porro iure perferendis id sint! Fugit recusandae beatae architecto molestiae pariatur eos, ipsa quas hic a. Facilis nihil adipisci ab. Iusto, maiores libero laudantium, repudiandae error facere ut suscipit ratione quia animi saepe molestias quisquam odit? Vero libero ea, assumenda fugiat possimus quod voluptate fuga repellendus accusantium officia delectus distinctio vitae impedit, consequuntur culpa. Vero ab consequuntur optio quisquam incidunt, doloribus excepturi minus ad fugit nam quibusdam temporibus odio suscipit. Cum necessitatibus ut amet, accusamus inventore libero, voluptatum, temporibus molestiae nesciunt laudantium excepturi modi delectus cumque dolores! Qui totam ab in odit porro doloribus dolor molestiae deserunt nam sint?
         </p>
        </Card>
        </div>
        )
        }
        {isFriends &&(
          <div>
            <Card>
            <h2 className="text-3xl mb-2">Friends</h2>
       <div>
        <div className="">
         <div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div>
         <div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div><div className="border-b border-b-gray-100 p-4 -mx-4">
         <FriendInfo/>
         </div>

      </div>

            </div>

            </Card>
          </div>
        )
        }

{isPhots &&
(
  <div>
    <Card>
      <div className="grid grid-cols-2 gap-4">
<div  className="rounded-md overflow-hidden h-48 flex items-center shadow-md " >
  <img src="https://images.unsplash.com/photo-1668325306052-1e501718ffd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="?"/>
</div>
<div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
  <img src="https://images.unsplash.com/photo-1668325306052-1e501718ffd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="?"/>
</div>
<div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
  <img src="https://images.unsplash.com/photo-1668325306052-1e501718ffd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="?"/>
</div>
<div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
  <img src="https://images.unsplash.com/photo-1668325306052-1e501718ffd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="?"/>
</div>
<div className="rounded-md overflow-hidden h-48 flex items-center shadow-md ">
  <img src="https://images.unsplash.com/photo-1668325306052-1e501718ffd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="?"/>
</div>
</div>
    </Card>
  </div>
)}
    </Layout>
  )
}