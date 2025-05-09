import React from 'react';
import DealOfTheDay from './components/cards/DealOfTheDay';
import WeeklyFeaturedProducts from './components/cards/WeeklyFeaturedProducts';
import MostViewedProducts from './components/cards/MostViewedProducts';
import OnSaleProducts from './components/cards/OnSaleProducts';

const FeaturedProducts = () => {
    return (
      <div className="featured-products">
        {/* 1st Card - Deal of the day */}
        <DealOfTheDay />
        {/* 2nd Card - Weekly Featured Products List */}
        <WeeklyFeaturedProducts />
        {/* 3rd Card - Most Viewed Products List */}
        <MostViewedProducts />
        {/* 4th Card - On Sale Products List */}
        <OnSaleProducts />
      </div>
    );
};

export default FeaturedProducts;