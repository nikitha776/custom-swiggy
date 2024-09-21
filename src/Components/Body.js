import Card from './Card'
import {useState, useEffect} from 'react'
import cardList from '../Utils/mockData'
import Shimmer from './Shimmer'
import useOnlineStatus from './useOnlineStatus'
import {Link} from 'react-router-dom'

const Body = () => {
  const [list,setList] = useState([]);
  const [filteredList,setFilteredList] = useState([]);
  const [searchText,setSearchText] = useState("");


  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-  enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(data);
    setList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus == false) {
    return <h1>Looks like you're offline!! Please check your online connection.</h1>
  }
  
  return list.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className = "filter flex items-center">
        
        <div className = "search m-4 p-4">
          <input type = "text" className = "search border border-solid m-4" value = {searchText} onChange = {(e) => {
            setSearchText(e.target.value);
          }}></input>
          
          <button className = "searchBtn px-2 py-1 bg-slate-200 rounded-md" onClick = {() => {
              const filteredList = list.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList);
            }}>Search</button>
        </div>
        
        <button 
        className ="bg-slate-200 h-[33px] rounded-md px-2"
          id = "filterBtn"
          onClick = {() => {
            const filteredList = list.filter(
              (card) => card.info.avgRating > 4.3
            );
            setFilteredList(filteredList);
          }}>Top Rated Restaurants
        </button>
        
      </div>
      
      <div className = "cardContainer flex flex-wrap">
        {
          filteredList.map((card) => (
            <Link key = {card.info.id} to={"/restaurant/"+card.info.id}><Card cardInfo = {card}/></Link>
          ))
        }
      </div>
    </div>
  );
}

export default Body;