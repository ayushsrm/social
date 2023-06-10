import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Image from "next/image";
export default function PostCard(){
    return(
        <Card> 
  
   <div className="flex gap-3">
 <div>
  <Avatar/>

 </div>
 <div>
   <p>
     <a className="font-semibold">Amrit Anand </a>shared a <a className="text-socialBlue">post</a>
     </p>
   <p className="text-gray-500 text-sm">
    Few seconds ago
    </p>
 </div>
 <div>
    <p className="my-2 text-sm">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil debitis deleniti. Impedit, eligendi. Dicta ipsam ducimus neque quasi? Natus aliquam non obcaecati dolorem vel nihil fugiat dolore alias. Repudiandae ex laborum cupiditate officiis.
    </p>
    <img src="/shiva.jpeg" alt="shiva"/>


 </div>
   </div>
</Card>

    );
}