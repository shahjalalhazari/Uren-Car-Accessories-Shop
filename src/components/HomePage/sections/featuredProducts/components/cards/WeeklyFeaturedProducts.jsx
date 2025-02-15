import React from 'react';
import CardTitle from "../CardTitle";
import FeaturedSingleProductCard from "@/components/shared/cards/FeaturedSingleProductCard";

const WeeklyFeaturedProducts = () => {
  return (
    <div className="card-container max-h-[95vh]">
      {/* Card Heading */}
      <CardTitle
        heading={"Featured Products"}
        subHeading={"Top Featured On This Week"}
      />

      {/* All Weekly Featured Products List */}
      <div className="h-[76vh] overflow-y-auto mt-4">
        {/* REPLACE */}
        {[...Array(10)].map((_, index) => (
          <FeaturedSingleProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyFeaturedProducts;