"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import PrimaryBtn from "@/components/shared/buttons/PrimaryBtn";

const CarouselBanner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        className=""
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div
              className="carousel-bg"
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0,0,0,0.5)), 
                  url(${banner.image})`,
              }}
            >
              <div className="carousel-content">
                <h5 className="carousel-sub-heading">{banner.subHeading}</h5>
                <h3 className="carousel-heading">{banner.heading}</h3>
                <div className="h-0.5 md:h-1 bg-secondary w-16 md:w-20 md:mx-auto rounded"></div>
                <p className="text-sm lg:text-base">{banner.description}</p>
                <PrimaryBtn text="READ MORE" path="/" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CarouselBanner;

const banners = [
  {
    id: 1,
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    image: "/images/slider/1.jpg",
  },
  {
    id: 2,
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    image: "/images/slider/2.jpg",
  },
  {
    id: 3,
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    image: "/images/slider/3.jpg",
  },
  {
    id: 4,
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    image: "/images/slider/4.jpg",
  },
  {
    id: 5,
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    image: "/images/slider/5.jpg",
  },
  {
    id: 6,
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    image: "/images/slider/6.jpg",
  },
];
