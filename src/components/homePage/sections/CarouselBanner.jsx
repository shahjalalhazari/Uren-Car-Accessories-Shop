"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import PrimaryBtn from "@/components/shared/buttons/PrimaryBtn";

const CarouselBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update activeIndex when slider change
    >
      {carouselBanners?.map((banner, index) => {
        const animationStyle =
          index % 2 === 0 ? "animation-style-02" : "animation-style-01";
        return (
          <SwiperSlide key={banner.id}>
            <div
              className={`carousel-bg ${
                index === activeIndex ? `slick-active ${animationStyle}` : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 1), rgba(0,0,0,0.5)), 
                  url(${banner.image})`,
              }}
            >
              <div className="carousel-content">
                <div className="carousel-text">
                  <h5 className="carousel-sub-heading">{banner.subHeading}</h5>
                  <h2 className="carousel-heading">{banner.heading}</h2>
                  <div className="carousel-content-divider"></div>
                  <p className="carousel-description">{banner.description}</p>
                  <PrimaryBtn text="READ MORE" path="/" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselBanner;


const carouselBanners = [
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