import {LOGO_URL} from '../Utils/constants'
import useOnlineStatus from './useOnlineStatus'
import {useState} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  const [login,setLogin] = useState("Login");
  console.log("Rendered");
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className = "flex shadow-md"> 
      <div>
        <img className ="w-[100px]" src = {LOGO_URL}></img>
      </div>
      <div className = "navBar">
        <ul className = "flex mr-10">
          <li className = "m-8">Online Status : {onlineStatus ? "☑️" : "🔴"}</li>
          <li className = "m-8"><Link to = "/grocery">Groceries</Link></li>
          <li className = "m-8"><Link to = "/">Home</Link></li>
          <li className = "m-8"><Link to = "/about">About</Link></li>
          <li className = "m-8"><Link to = "/contact">Contact</Link></li>
          <button className = "loginBtn" onClick = {() => {
            login == "Login" ? setLogin("Logout") : setLogin("Login");
          }}>{login}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header;