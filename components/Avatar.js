
export default function Avatar(size){
    let width = 'w-16';
    if (size === 'lg') {
      width = 'w-36';
    }
    return(
        <div className={`${width} rounded-full overflow-auto block`}>
        
    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="?" className="w-full" />

        
        </div>
    );
}