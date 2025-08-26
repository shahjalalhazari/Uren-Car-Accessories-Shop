import { getProducts } from "@/lib/getProducts";
import DealOfTheDay from "./components/cards/DealOfTheDay";
import WeeklyFeaturedProducts from "./components/cards/WeeklyFeaturedProducts";
import MostViewedProducts from "./components/cards/MostViewedProducts";
import OnSaleProducts from "./components/cards/OnSaleProducts";

const FeaturedProducts = async () => {
  const products = await getProducts();

  return (
    <div className="featured-products">
      {/* 1st CARD - DEAL OF THE DAY */}
      <DealOfTheDay />

      {/* 2nd CARD - WEEKLY FEATURED PRODUCTS */}
      <WeeklyFeaturedProducts products={products} />

      {/* 3rd CARD - MOST VIEWED PRODUCTS */}
      <MostViewedProducts products={products} />

      {/* 4th CARD - ON SALE PRODUCTS */}
      <OnSaleProducts products={products} />
    </div>
  );
};

export default FeaturedProducts;
