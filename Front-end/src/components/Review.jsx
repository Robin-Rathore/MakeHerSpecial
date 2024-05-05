import React from "react";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5">

      {/* heading section */}
      <h1 className=" font-semibold text-center text-ExtraDarkColor text-4xl lg:mt-14 mt-24 ">
        Feedback Corner
      </h1>

      {/* review card section */}
      <div className=" flex flex-col items-center xl:flex-row gap-10 justify-center py-4 my-8">
        <ReviewCard name="Preeti Saklani " />
        <ReviewCard name="Aliya Khan" />
        <ReviewCard name="Nishu Rohilla" />
      </div>
      <div className=" flex flex-col items-center xl:flex-row gap-10 justify-center py-0 my-10">
        <ReviewCard name="Divyani Rana" />
        <ReviewCard name="Himani Chandel" />
        <ReviewCard name="Mayank Rathore" />
      </div>
    </div>
  );
};

export default Review;
