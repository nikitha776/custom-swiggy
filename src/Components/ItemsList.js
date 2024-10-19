import { addItem } from "../Utils/cartSlice";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";

const ItemsList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {items.map((item) => (<div className="border-b-2 m-2 text-left flex justify-between" key={item?.card?.info?.id}>
                <div className="w-9/12">
                    <div className="p-2">
                        <span className="font-semibold">{item?.card?.info?.name} - </span>
                        <span>₹{item?.card?.info?.price / 100}</span>
                    </div>
                    <p className="text-sm p-2">{item?.card?.info?.description}</p>
                </div>
                <div className="w-2/12 m-2">
                    <div className = "absolute ">
                        <button className="text-green-600 border border-gray-400 bg-white font-semibold shadow-lg m-auto rounded-lg p-1 mx-4" onClick = {() => handleAddItems(item)}>Add +</button>
                    </div>
                    {item?.card?.info?.imageId ? <img src={CDN_URL + item?.card?.info?.imageId} className="w-full"></img> : ""}
                </div>
            </div>
            ))}
        </div>
    );
}

export default ItemsList;