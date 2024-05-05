import React, { useState } from 'react';
import ProductCard from "../layouts/ProductCard";
import PaymentPage from './PaymentPage';
import Shop from './Shop';
import data from './data';

const Products = () => {
  const firstTenItems = data.slice(10, 40);
  console.log("Products components");
  return (
    <div className={`min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 'details-open' }`}>
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          New Arrivals
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-5 pt-8">
        {firstTenItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            img= {item.img}
            name={item.name}
            price={item.price}
            discount={item.discount}
            description = {item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
