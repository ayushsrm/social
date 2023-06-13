import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Layout from "@/components/layout";
import Link from "next/link";

export default function Notification(){
    return(
        <Layout>
            <h1 className ='text-6xl mb-4 text-gray-300'>Notifications</h1>
            <Card noPadding={true}>
                <div className = ''>
                <div className = 'flex gap-2 items-center border-b border-b-gray-100 p-4'>
                    <Link href={'/Profile'}>
                    <Avatar/>
                    </Link>
                    <div>
                        <Link href={'/Profile'} className={"font-semibold mr-1 hover:underline"}>Amrit Anand</Link>
                         liked
                        <Link href={'/Profile'} className={'ml-1 text-socialBlue hover:underline'}>your photo</Link>
                    </div>
                </div>
                <div className = 'flex gap-2 items-center border-b border-b-gray-100 p-4'>
                    <Avatar/>
                    <div>
                    <Link href={'/Profile'} className={"font-semibold mr-1 hover:underline"}>Ayush Srivastava</Link>
                     liked 
                     <Link href={'/Profile'} className={'ml-1 text-socialBlue hover:underline'}>your photo</Link>
                    </div>
                </div>
                <div className = 'flex gap-2 items-center border-b border-b-gray-100 p-4'>
                    <Avatar/>
                    <div>
                    <Link href={'/Profile'} className={"font-semibold mr-1 hover:underline"}>Jay Prakash</Link>
                     liked 
                     <Link href={'/Profile'} className={'ml-1 text-socialBlue hover:underline'}>your photo</Link>
                    </div>
                </div>
                </div>
                
            </Card>
        </Layout>
    )
}