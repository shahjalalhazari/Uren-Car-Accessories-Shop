import "./homePage.css"
import BigOfferBanners from "./sections/BigOfferBanners";
import Blogs from "./sections/Blogs";
import CarouselBanner from "./sections/CarouselBanner";
import FeaturedCategories from "./sections/FeaturedCategories";
import FeaturedProducts from "./sections/FeaturedProducts/FeaturedProducts";
import NewArrivalProducts from "./sections/NewArrivalProducts";
import OfferBanners from "./sections/OfferBanners";
import ShopByBrands from "./sections/ShopByBrands";
import ShoppingFacilities from "./sections/ShoppingFacilities";
import Testimonial from "./sections/Testimonial";

const HomePage = () => {
  return (
    <>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
      <FeaturedCategories />
      <FeaturedProducts />
      <BigOfferBanners />
      <NewArrivalProducts />
      <Testimonial />
      <ShopByBrands />
      <Blogs />
    </>
  );
};

export default HomePage;