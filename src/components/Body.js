import { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import { API_URL } from "../utils/constants";
import ShimmerEffect from "./ShimmerEffect";
const Body=()=>{
    const[RestaurantList,setRestaurantList]=useState([])
    const[filterRestaurantList,setFilterRestaurantList]=useState([])
    const[search,setSearch]=useState("")
    useEffect(()=>{
    AllData()
    },[])
    async function AllData(){
        const data=await fetch(API_URL)
        const json=await data.json()
        console.log(json?.data?.cards[2]?.data?.data?.cards)
        setFilterRestaurantList(json?.data?.cards[2]?.data?.data?.cards)
        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)

    }
    const FilterData=(search,list)=>{
      const searchResult=list.filter((value)=>
         value.data.name.toLowerCase().includes(search.toLowerCase())
      )
      return searchResult;
    }
    
    if(filterRestaurantList.length===0){
      return <h1>No Restaurant Found.....</h1>
    }
    return (
    <div className='body'>
            <button className='rated_btn'
            onClick={()=>{
             const new_list=RestaurantList.filter((res)=>res.data.avgRating>4)
               setFilterRestaurantList(new_list)
    }}>Top Rated Restaurant</button>
    <input name="search" value={search} onChange={(e)=>setSearch(e.target.value)}/><button onClick={()=>{const data=FilterData(search,RestaurantList);
  setFilterRestaurantList(data)}}>Search</button>
    {RestaurantList.length===0?<ShimmerEffect/>:
            <div className='res-container'>
                {
                    filterRestaurantList.map((res)=>(
                        <ResturantCard key={res.data.id}list={res}/>
                    ))
                }
            </div>
         }

        </div>
    )
    }
 export default Body;   