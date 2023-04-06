const ShimmerEffect=()=> {
    return (
      <div className='res-container'>
        {Array(15).fill("").map((e,index)=>(
          <div 
          key={index} 
          className='card-shimmer'>
            </div> 
        ))}
        
        </div>
           )
  }

 
export default ShimmerEffect;
 