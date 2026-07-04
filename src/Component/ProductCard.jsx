import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between p-4 shadow-sm hover:shadow-md transition">
  
      <div className="w-full h-40 bg-gray-50 rounded-xl overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-contain mix-blend-multiply"
        />
      </div>
      
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-base font-bold text-gray-800 line-clamp-1">{product.name}</h2>
          <p className="text-gray-900 font-extrabold text-sm mt-1">Rs {product.price}</p>
        </div>
        
        <button 
          onClick={() => dispatch(addToCart(product))} 
          className="mt-4 w-full bg-black text-white text-xs font-black italic py-3 rounded-xl hover:bg-zinc-800 transition tracking-wider"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;