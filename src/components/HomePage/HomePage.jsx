import "./homePage.css"
import BigOfferBanners from "./sections/BigOfferBanners";
import CarouselBanner from "./sections/CarouselBanner";
import FeaturedCategories from "./sections/FeaturedCategories";
import FeaturedProducts from "./sections/FeaturedProducts/FeaturedProducts";
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
      <BigOfferBanners />
    </>
  );
};

export default HomePage;