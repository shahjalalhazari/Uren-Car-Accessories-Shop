import "./homePage.css"
import CarouselBanner from "./sections/CarouselBanner";
import OfferBanners from "./sections/OfferBanners";

const HomePage = () => {
  return (
    <>
      <CarouselBanner />
      <OfferBanners />
    </>
  );
};

export default HomePage;