import React from 'react';
import ReactDOM  from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Merch from './components/Merch';
import Footer from './components/Footer';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


const AppLayout=()=>{
return (
    <div className='app'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
)
}
const appRoute=createBrowserRouter([
 {  path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
        {  path:"/",
        element:<Body/>,
     },
        {  path:"/about",
        element:<About/>,
     },
     {  path:"/merch",
        element:<Merch/>
     },
     {  path:"/menu/:id",
        element:<RestaurantMenu/>
     }

    ]
 },

 
 

])
const root = ReactDOM.createRoot(document.getElementById("app"))
root.render(<RouterProvider router={appRoute} />)