import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
function RestaurantMenu() {
    const {id}=useParams()
    useEffect(()=>{
        getMenu()
    },[])
    async function getMenu(){
        const data=await fetch("https://www.swiggy.com/restaurants/big-smokin-burgers-dilshad-gardens-karkardooma-delhi-440922");
        // const json=await data.json();
console.log(data)
    }
  return (
    <div>
      <h1>Food:{id}</h1>
    </div>
  )
}

export default RestaurantMenu
