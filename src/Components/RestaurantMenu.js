import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from './useRestaurantMenu'
import {MENU_API} from '../Utils/constants'

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resId);
  //   const json = await data.json();
    
  //   console.log(json);
  //   setResInfo(json);
  // };

  // useEffect(() => {
  //   fetchMenu();
  // },[]); 

  if(resInfo == null) return <Shimmer/>;

  const {name,cuisines,costForTwoMessage,avgRating} = resInfo?.data?.cards[2]?.card?.card?.info;

  const {cards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log({cards});
  
  return(
    <div className = "menuContainer">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
      <h4>{avgRating}</h4>
      <h2>Menu :</h2>
      
      {cards.slice(1, cards.length - 2).map((card) => (
        <div key={card?.card?.card?.title}>
          <h3 className = "font-bold ml-[20px]">{card?.card?.card?.title}</h3>
          {card?.card?.card?.itemCards ? (
            card?.card?.card?.itemCards.map((item) => (
              <li className = "ml-[10px]" key={item?.card?.info?.id}>
                {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
              </li>
            ))
          ) : (
            card?.card?.card?.categories?.map((category) => (
              <div key={category?.title}>
                <h4>{category?.title}</h4>
                {category?.itemCards?.map((item) => (
                  <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                  </li>
                ))}
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
