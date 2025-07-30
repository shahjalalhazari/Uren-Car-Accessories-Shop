import CardTitle from '../CardTitle';
import HorizontalProductCard from '@/components/shared/cards/HorizontalProductCard';

const OnSaleProducts = () => {
    return (
      <div className="card-container">
        <CardTitle
          heading={"On-Sale Products"}
          subHeading={"On-Sale On This Week"}
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

export default OnSaleProducts;