import HorizontalProductCard from "@/components/shared/cards/HorizontalProductCard";
import CardTitle from "../CardTitle";


const OnSaleProducts = ({ products }) => {
  return (
    <div>
      <div className="card-container">
        <CardTitle
          heading={"Most View Products"}
          subHeading={"Most View On This Week"}
        />

        <div className="card-height">
          {/* REPLACE */}
          {products.slice(20, 30)?.map((product) => (
            <HorizontalProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnSaleProducts;