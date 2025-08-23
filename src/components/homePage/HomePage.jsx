import { getCategories } from "@/lib/getCategories";
import "./home-page.css";
import CarouselBanner from "./sections/CarouselBanner";
import FeaturedCategories from "./sections/FeaturedCategories";
import OfferBanners from "./sections/OfferBanners";
import ShoppingFacilities from "./sections/ShoppingFacilities";

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
      <FeaturedCategories categories={categories} />
    </>
  );
};

export default HomePage;
