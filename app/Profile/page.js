import Layout from "@/components/layout"
import Card from "@/components/Card"
import Avatar from "@/components/Avatar"

export default function ProfilePage(){
return(
    <Layout>
        <Card noPadding={true}>
            <div className="h-36 overflow-hidden flex justify-center items-center">
            <img src="https://www.thoughtco.com/thmb/EXpjUAx2ZEgV64eKcsAsX7Ucl6w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg" alt="shiva"/>
            </div>
            <Avatar size={'lg'}/>
            <div className="p-2">
             john 
            </div>

        </Card>

    </Layout>
)
}