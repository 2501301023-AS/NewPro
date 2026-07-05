import React from 'react';
import products from '../data/products';
import ProductCard from './Productcard';

const Productlist = () => {
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productlist;