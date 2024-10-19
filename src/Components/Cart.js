import React from "react";
import ItemsList from './ItemsList'
import { useSelector } from "react-redux";
import { clearCart } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearItems = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-8">
      <h1 className="font-bold text-2xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <button className = "m-4 border border-gray-700 p-1 px-4 rounded-md bg-slate-100" onClick = {handleClearItems}>Clear</button>
        {cartItems.length == 0 && <h1 className = "font-bold text-xl m-10">Looks like your cart is empty.</h1>}
        <ItemsList items={cartItems}></ItemsList>
      </div>
    </div>
  );
}

export default Cart;