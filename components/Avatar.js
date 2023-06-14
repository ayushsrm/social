
export default function Avatar({size , url}){
    let width = 'w-16';
    if (size === 'big') {

        width= 'w-24';
    }
    
    return(
        <div className={`${width} rounded-full overflow-auto block`}>
        
    <img src={url} alt="" className="w-full" />

        
        </div>
    );
}