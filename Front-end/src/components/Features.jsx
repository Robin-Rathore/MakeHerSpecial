import React from "react";
import ProductCard from "../layouts/ProductCard";
import data from "./data";
const Features = () => {
  const firstTenItems = data.slice(10, 40);
  console.log("Feature");
  return (
    <div className=" min-h-screen flex flex-col justify-center pt-24">
      {/* heading section */}
      <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
        Exclusive Products
      </h1>

      {/* card section */}
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {firstTenItems.map((item) => (
          <div key={item.id} className=" md:w-2/4 lg:w-1/4">
            <ProductCard
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
              description={item.description}
              // onClick={handleProductClick}
              // setIsProductDetailsOpenedFeatures={setIsProductDetailsOpenedFeatures}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
