import "./home-page.css"
import CarouselBanner from "./sections/CarouselBanner";
import FeaturedCategories from "./sections/FeaturedCategories";
import FeaturedProducts from "./sections/featuredProducts/FeaturedProducts";
import OfferBanners from "./sections/OfferBanners";
import ShoppingFacilities from "./sections/ShoppingFacilities";

const HomePage = () => {
  return (
    <>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
      <FeaturedCategories />
      <FeaturedProducts />
    </>
  );
};

export default HomePage;