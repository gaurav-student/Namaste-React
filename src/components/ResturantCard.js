import { IMAGE_URL } from "../utils/constants"

const ResturantCard=(props)=>{
    const{list}=props
    const{
        name,
        cuisines,
        avgRating,
        cloudinaryImageId
    }=list?.data

        return (
            <div className='card'>
                <img className='photo' src={IMAGE_URL+cloudinaryImageId}></img>
            <h4>{name}</h4>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} Stars</h5>
            </div>
    
        )
    }
export default ResturantCard;    