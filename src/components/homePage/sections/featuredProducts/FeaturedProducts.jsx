import { getProducts } from "@/lib/getProducts";
import DealOfTheDay from "./components/cards/DealOfTheDay";
import WeeklyFeaturedProducts from "./components/cards/WeeklyFeaturedProducts";

const FeaturedProducts = async () => {
  const products = await getProducts();

  return (
    <div className="featured-products">
      {/* 1st CARD - DEAL OF THE DAY */}
      <DealOfTheDay />
      {/* 2nd CARD - WEEKLY FEATURED PRODUCTS */}
      <WeeklyFeaturedProducts products={products} />
    </div>
  );
};

export default FeaturedProducts;
