import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";
import data from "./data";
const Shop = () => {
  const firstTenItems = data.slice(0, 10);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  

  return (
    <div className="flex flex-col justify-center lg:px-32 px-5 pt-24 pb-14">
      {/* heading section */}
      <div>
        <h1 className="font-semibold text-4xl text-center text-ExtraDarkColor">
          Best sellers
        </h1>
      </div>

      {/* carousel section */}
        <div className="mt-8">
          <Slider {...settings}>
            {firstTenItems.map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                discount={item.discount}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
    </div>
  );
};

export default Shop;
