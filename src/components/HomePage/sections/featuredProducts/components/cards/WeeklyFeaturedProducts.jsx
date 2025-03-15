import React from 'react';
import CardTitle from "../CardTitle";
import FeaturedSingleProductCard from "@/components/shared/cards/FeaturedSingleProductCard";

const WeeklyFeaturedProducts = () => {
  return (
    <div className="card-container">
      {/* Card Heading */}
      <CardTitle
        heading={"Featured Products"}
        subHeading={"Top Featured On This Week"}
      />

      {/* All Weekly Featured Products List */}
      <div className="h-[50vh] md:h-[37vh] lg:h-[66vh] overflow-y-auto mt-4">
        {/* REPLACE */}
        {[...Array(10)].map((_, index) => (
          <FeaturedSingleProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyFeaturedProducts;