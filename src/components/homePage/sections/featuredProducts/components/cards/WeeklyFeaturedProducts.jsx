import HorizontalProductCard from '@/components/shared/cards/HorizontalProductCard';
import CardTitle from '../CardTitle';

const WeeklyFeaturedProducts = ({products}) => {
  return (
    <div className="card-container">
      <CardTitle
        heading={"Featured Products"}
        subHeading={"Top Featured On This Week"}
      />

      <div className="card-height">
        {/* DISPLAY 1st 10 PRODUCTS */}
        {products.slice(0, 10)?.map((product) => (
          <HorizontalProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyFeaturedProducts;