import { getCategories } from "@/lib/getCategories";
import "./home-page.css";
import CarouselBanner from "./sections/CarouselBanner";
import FeaturedCategories from "./sections/FeaturedCategories";
import OfferBanners from "./sections/OfferBanners";
import ShoppingFacilities from "./sections/ShoppingFacilities";
import FeaturedProducts from "./sections/featuredProducts/FeaturedProducts";
import BigOfferBanners from "./sections/BigOfferBanners";
import NewArrivalProducts from "./sections/NewArrivalProducts";
import { getProducts } from "@/lib/getProducts";
import Testimonial from "./sections/Testimonial";
import ShopByBrands from "./sections/ShopByBrands";

const HomePage = async () => {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <CarouselBanner />
      <OfferBanners />
      <ShoppingFacilities />
      <FeaturedCategories categories={categories} />
      <FeaturedProducts />
      <BigOfferBanners />
      <NewArrivalProducts products={products} />
      <Testimonial />
      <ShopByBrands />
    </>
  );
};

export default HomePage;
