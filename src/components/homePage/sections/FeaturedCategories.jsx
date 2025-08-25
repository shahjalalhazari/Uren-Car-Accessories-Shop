"use client"
import CategorySingleCard from "@/components/shared/cards/CategorySingleCard";
import SectionHeading from "@/components/shared/headings/SectionHeading";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const FeaturedCategories = ({ categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-layout">
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
          autoplay={{ delay: 5000 }}
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
              <CategorySingleCard categoryItem={item} />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="slider-btns">
            <button ref={prevRef} className="slider-nav-btn left-btn">
              <FaChevronLeft className="text-base lg:text-xl" />
            </button>

            <button ref={nextRef} className="slider-nav-btn right-btn">
              <FaChevronRight className="text-base lg:text-xl" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedCategories;