import CardTitle from '../CardTitle';
import HorizontalProductCard from '@/components/shared/cards/HorizontalProductCard';

const WeeklyFeaturedProducts = () => {
  return (
    <div className="card-container">
      <CardTitle
        heading={"Featured Products"}
        subHeading={"Top Featured On This Week"}
      />

      <div className="card-height">
        {/* REPLACE */}
        {[...Array(10)].map((_, index) => (
          <HorizontalProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyFeaturedProducts;