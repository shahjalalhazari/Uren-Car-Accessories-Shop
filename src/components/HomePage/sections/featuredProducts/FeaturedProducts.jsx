import DealOfTheDay from './components/cards/DealOfTheDay';
import MostViewedProducts from './components/cards/MostViewedProducts';
import OnSaleProducts from './components/cards/OnSaleProducts';
import WeeklyFeaturedProducts from './components/cards/WeeklyFeaturedProducts';

const FeaturedProducts = () => {
    return (
      <div className="px-8 py-20 bg-[#eee] grid grid-cols-4 gap-x-8">
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