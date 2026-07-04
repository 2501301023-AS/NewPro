import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increment, decrement } from "../Features/cartSlice";

const Cartitems = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-gray-100 last:border-0">
      
      <div className="flex items-center gap-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-14 h-14 object-contain bg-gray-50 rounded-lg border border-gray-100 shrink-0"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-800 line-clamp-1">{item.name}</h3>
          <p className="text-gray-900 font-extrabold text-xs mt-0.5">Rs {item.price}</p>
        </div>
      </div>
      
    
      <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto"> 
        <div className="flex items-center bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
          <button 
            onClick={() => dispatch(decrement(item.id))}
            className="px-2.5 py-1 hover:bg-gray-200 text-gray-700 font-black transition text-sm"
          >
            -
          </button>
          <span className="px-2 font-bold text-gray-900 text-xs w-6 text-center">{item.quantity || 1}</span>
          <button 
            onClick={() => dispatch(increment(item.id))}
            className="px-2.5 py-1 hover:bg-gray-200 text-gray-700 font-black transition text-sm"
          >
            +
          </button>
        </div>

        <button 
          onClick={() => dispatch(removeFromCart(item.id))} 
          className="text-red-500 font-bold text-xs hover:text-red-700 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cartitems;