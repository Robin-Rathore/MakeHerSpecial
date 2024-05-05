import React from "react";
import truck from "../assets/img/truck.png";
import retur from "../assets/img/return.png";
import tailor from "../assets/img/tailor.png"
import delivery from "../assets/img/delivery.png"
import "./Collections.scss";
const Collections = () => {
  return (
    <div className="containers">
      <div className="wrapper">
        <div className="item">
          <button>
            <img src={truck} alt="" />
            <p>24-hour Dispatch</p>
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="item">
          <button>
            <img src={retur} alt="" />
            <p>Easy Returns</p>
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="item">
          <button>
            <img src={tailor} alt="" />
            <p>Custom Tailoring</p>
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="item">
          <button>
            <img src={delivery} alt="" />
            <p>Free Delivery within India</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;




