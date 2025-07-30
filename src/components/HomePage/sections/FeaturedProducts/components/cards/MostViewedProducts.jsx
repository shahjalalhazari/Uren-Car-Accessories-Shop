import CardTitle from '../CardTitle';
import HorizontalProductCard from '@/components/shared/cards/HorizontalProductCard';

const MostViewedProducts = () => {
    return (
      <div className="card-container">
        <CardTitle
          heading={"Most View Products"}
          subHeading={"Most View On This Week"}
        />
        
        <div className="card-height">
          {/* REPLACE */}
          {[...Array(10)]?.map((_, index) => (
            <HorizontalProductCard key={index} />
          ))}
        </div>
      </div>
    );
};

export default MostViewedProducts;