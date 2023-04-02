import { useState } from "react";
import ResturantCard from "./ResturantCard";
import { restaurantList } from "../utils/mockData";
const Body=()=>{
    const[RestaurantList,setRestaurantList]=useState(restaurantList)
    return (
        <div className='body'>
            <button className='rated_btn'
            onClick={()=>{
                console.log("clicked")
             const new_list=RestaurantList.filter((res)=>res.data.avgRating>4)
               setRestaurantList(new_list)
    }}>Top Rated Restaurant</button>
            <div className='res-container'>
                {
                    RestaurantList.map((res)=>(
                        <ResturantCard key={res.data.id}list={res}/>
                    ))
                }
            </div>
            

        </div>
    )
    }
 export default Body;   