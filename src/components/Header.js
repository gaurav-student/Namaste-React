import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    return (
    <div className="header">  
       <div className="logo-container">
       <Link to={'/'}>
   <img className='logo' src={LOGO_URL}/>
       </Link>
       </div>
    <div className='nav-items'>
       <ul>
           <li><Link to={"/"}>Home</Link></li>
           <li><Link to={"/about"}>About Us</Link></li>
           <li><Link to={"/merch"}>Merch</Link></li>
           <li>Cart</li>
           {isLoggedIn?
   <button onClick={()=>setIsLoggedIn(false)}>Login</button>
   :<button onClick={()=>setIsLoggedIn(true)}>Logout</button>
   }
       </ul>
   
    </div>
    </div>
   )
   }
   export default Header;