import "./home-page.css";
import CarouselBanner from './sections/CarouselBanner';
import OfferBanners from "./sections/OfferBanners";
import ShoppingFacilities from "./sections/ShoppingFacilities";

const HomePage = () => {
  return (
    <>
      <CarouselBanner /> {/* CAROUSEL BANNER SECTION */}
      <OfferBanners /> {/* OFFER BANNERS SECTION */}
      <ShoppingFacilities /> {/* SHOPPING FACILITIES SECTION */}
    </>
  );
};

export default HomePage;