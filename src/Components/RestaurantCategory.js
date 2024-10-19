import ItemsList from './ItemsList'
import {useState} from 'react'

const RestaurantCategory = ({ data , showItems , setShowIndex}) => {
    
    const handleClick = () => {
        setShowIndex();
    }

    if (!data || !data.itemCards) return null;
    return (
        <div>
            <div className = "w-6/12 bg-gray-100 p-4 my-4 m-auto shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick = {handleClick}>
                    <span className="font-bold">{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemsList items={data?.itemCards} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;