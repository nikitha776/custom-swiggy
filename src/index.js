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
import {useState, useEffect, useContext} from 'react'
import UserContext from './Utils/UserContext'
import Cart from './Components/Cart'
import appStore from './Utils/appStore'
import {Provider} from 'react-redux'

const WebLayout = () => {

  const [userName,setUserName] = useState("");

  useEffect(() => {
    const data = {
      user : "Nikitha"
    }
    setUserName(data.user);
  },[])

  return (
    <Provider store = {appStore}>
      <UserContext.Provider value = {{loggedInUser : userName, setUserName}}>
        <div className = "web">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart/>
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

