import "./homePage.css"
import CarouselBanner from "./sections/CarouselBanner";
import OfferBanners from "./sections/OfferBanners";
import ShoppingFacilities from "./sections/ShoppingFacilities";

const HomePage = () => {
  return (
    <>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
    </>
  );
};

export default HomePage;