import "./home-page.css";
import CarouselBanner from './sections/CarouselBanner';
import OfferBanners from "./sections/OfferBanners";

const HomePage = () => {
  return (
    <>
      <CarouselBanner /> {/* CAROUSEL BANNER SECTION */}
      <OfferBanners /> {/* OFFER BANNERS SECTION */}
    </>
  );
};

export default HomePage;