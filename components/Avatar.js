
export default function Avatar(size){
    let width = 'w-12';
    if (size === 'lg') {
      width = 'w-36';
    }
    return(
        <div className={`${width} rounded-full overflow-auto block`}>
        
    <img src="https://images.prismic.io/ocean-agency-cms/10000df0-7409-496d-83ba-8ed6ed7d4815_Ocean-Decade-Exhibition---45-Credit-Aanish-Peshave.jpg?auto=compress,format&w=750" alt="?" className="w-full" />

        
        </div>
    );
}