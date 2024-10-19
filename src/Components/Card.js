import {CDN_URL} from '../Utils/constants'
import UserContext from '../Utils/UserContext';
import {useContext} from 'react'

const Card = ({cardInfo}) => {
  const {name, cuisines, costForTwo, avgRating, cloudinaryImageId} = cardInfo?.info;
  const {loggedInUser} = useContext(UserContext);
  return (
    <div className = "card p-4 m-4 w-[200px] border border-gray-400 rounded-md bg-slate-50 h-[400px] hover:border-slate-950 border-solid">
      <img src ={CDN_URL+cardInfo.info.cloudinaryImageId} className="h-[125px] w-[200px] rounded-sm"></img>
      <h3 className="font-bold pt-[15px]">{cardInfo.info.name}</h3>
      <h4 className="py-2">{cardInfo.info.cuisines.join(", ")}</h4>
      <h4 className="py-1">{cardInfo.info.avgRating}</h4>
      <h4 className="py-1">{cardInfo.info.costForTwo}</h4>
      <h4 className="py-1">{cardInfo.info.sla.slaString}</h4>
      <h4 className="py-1">User : {loggedInUser}</h4>
      {/* <h3>{props.cardInfo.info.name}</h3>
      <h4>{props.cardInfo.info.cuisines.join(", ")}</h4>
      <h4>{props.cardInfo.info.avgRating}</h4>
      <h4>{props.cardInfo.info.sla.slaString}</h4> */}
    </div>
  );
}

export const withStatus = (Card) => {
  return (props) => {
    return(
      <div>
        <label className = "absolute bg-green-500 text-white m-2 p-1 rounded-md">Open</label>
        <Card {...props}/>
      </div>
    );
  }
}

export default Card;