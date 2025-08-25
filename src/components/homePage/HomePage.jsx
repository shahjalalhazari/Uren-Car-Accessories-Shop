import { getCategories } from "@/lib/getCategories";
import "./home-page.css";
import CarouselBanner from "./sections/CarouselBanner";
import FeaturedCategories from "./sections/FeaturedCategories";
import OfferBanners from "./sections/OfferBanners";
import ShoppingFacilities from "./sections/ShoppingFacilities";
import FeaturedProducts from "./sections/featuredProducts/FeaturedProducts";

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
      <FeaturedCategories categories={categories} />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;
