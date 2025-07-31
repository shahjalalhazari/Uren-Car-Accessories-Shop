"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "@/components/shared/headings/SectionHeading";
import FeaturedCategorySingleCard from "@/components/shared/cards/FeaturedCategorySingleCard";

const FeaturedCategories = ({ categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-layout mb-12 md:mb-16 lg:mb-20">
      {/* Section Heading */}
      <SectionHeading
        heading="Featured Categories"
        subHeading="Top Featured Collections"
      />

      {/* Featured Category List */}
      <div className="relative">
        <Swiper
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: { slidesPerView: 1 }, // Small screens
            768: { slidesPerView: 3 }, // Medium screens
            1024: { slidesPerView: 6 }, // Large screens
          }}
          className="slider-container uren-slider"
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedCategorySingleCard categoryItem={item} />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="slider-btns">
            <button ref={prevRef} className="left-6 md:left-8 slider-nav-btn">
              <FaChevronLeft className="text-xl" />
            </button>

            <button ref={nextRef} className="right-6 md:right-8 slider-nav-btn">
              <FaChevronRight className="text-xl" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCategories;


// const featuredCategories = [
//   {
//     name: "Brakes & Rotors",
//     quantity: 8,
//     image: "/images/featured-categories/1.png",
//   },
//   {
//     name: "Interior",
//     quantity: 15,
//     image: "/images/featured-categories/2.png",
//   },
//   {
//     name: "Lighting",
//     quantity: 10,
//     image: "/images/featured-categories/3.png",
//   },
//   {
//     name: "Performance",
//     quantity: 5,
//     image: "/images/featured-categories/4.png",
//   },
//   {
//     name: "Suspension Systems",
//     quantity: 18,
//     image: "/images/featured-categories/5.png",
//   },
//   {
//     name: "Wheels & Tires",
//     quantity: 26,
//     image: "/images/featured-categories/6.png",
//   },
//   {
//     name: "Brakes & Rotors",
//     quantity: 8,
//     image: "/images/featured-categories/4.png",
//   },
//   {
//     name: "Interior",
//     quantity: 15,
//     image: "/images/featured-categories/6.png",
//   },
//   {
//     name: "Lighting",
//     quantity: 10,
//     image: "/images/featured-categories/5.png",
//   },
//   {
//     name: "Performance",
//     quantity: 5,
//     image: "/images/featured-categories/1.png",
//   },
//   {
//     name: "Suspension Systems",
//     quantity: 18,
//     image: "/images/featured-categories/2.png",
//   },
//   {
//     name: "Wheels & Tires",
//     quantity: 26,
//     image: "/images/featured-categories/3.png",
//   },
// ];