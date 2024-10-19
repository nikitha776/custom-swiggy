import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from './useRestaurantMenu'
import { CDN_URL, MENU_API } from '../Utils/constants'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItems,setShowItems] = useState(false); 
  const [showIndex,setShowIndex] = useState(null);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId, areaName } = resInfo?.data?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const categories = cards.filter((c) => (c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

  // return (
  //   <div className="menuContainer ml-[20px] mt-[20px]">
  //     <div className="ml-[300px] w-[800px] h-[200px] border border-gray-400 rounded-md flex p-4">
  //       <div>
  //         <h1 className="text-2xl font-bold">{name}</h1>
  //         <h4 className="text-lg font-medium">{cuisines.join(", ")} - {costForTwoMessage}</h4>
  //         <h4 className="text-lg">{avgRating} ⭐</h4>
  //         <h4 className="font-semibold">{areaName}</h4>
  //       </div>
  //       <img src={CDN_URL + cloudinaryImageId} className="h-[150px] w-[150px] ml-[400px]"></img>
  //     </div>
  //     <h2 className="mt-[20px] text-lg font-semibold">Menu :</h2>
  //     {cards.slice(1, cards.length - 2).map((card) => (
  //       <div key={card?.card?.card?.title}>
  //         <h3 className="font-bold ml-[20px]">{card?.card?.card?.title}</h3>
  //         {card?.card?.card?.itemCards ? (
  //           card?.card?.card?.itemCards.map((item) => (
  //             <li className="ml-[10px]" key={item?.card?.info?.id}>
  //               {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
  //             </li>
  //           ))
  //         ) : (
  //           card?.card?.card?.categories?.map((category) => (
  //             <div key={category?.title}>
  //               <h4 className="font-bold ml-[20px]">{category?.title}</h4>
  //               {category?.itemCards?.map((item) => (
  //                 <li className="ml-[10px]" key={item?.card?.info?.id}>
  //                   {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
  //                 </li>
  //               ))}
  //             </div>
  //           ))
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );

  return (
    <div className = "text-center">
      <div>
        <h1 className="text-2xl font-bold my-5">{name}</h1>
        <h4 className="text-lg font-medium">{cuisines.join(", ")} - {costForTwoMessage}</h4>
        <h4 className="text-lg">{avgRating} ⭐</h4>
        <h4 className="font-semibold">{areaName}</h4>
      </div>
      <div>
        {categories.map((category,index)=><RestaurantCategory 
          key = {category?.card?.card?.title} 
          data = {category?.card?.card} 
          showItems = {showIndex === index && true}
          setShowIndex = {() => setShowIndex(showIndex ===index ? null : index)}/>)}
      </div>
    </div>
  );
}


export default RestaurantMenu;



