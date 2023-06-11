
export default function Avatar({size}){
    let width = 'w-16';
    if (size === 'big') {

        width= 'w-28';
    }
    
    return(
        <div className={`${width} rounded-full overflow-auto block`}>
        
    <img src="https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=561&q=80"alt="?" className="w-full" />

        
        </div>
    );
}