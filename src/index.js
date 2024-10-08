import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header'
import Body from './Components/Body'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'
import RestaurantMenu from './Components/RestaurantMenu'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import  Grocery from './Components/Grocery'
import './style.css'

const WebLayout = () => {
  return (
    <div className = "web">
      <Header/>
      <Outlet/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));;

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <WebLayout/>,
    children : [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element : <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: <Grocery/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement : <Error/>
  },
])
root.render(<RouterProvider router = {appRouter}/>);

