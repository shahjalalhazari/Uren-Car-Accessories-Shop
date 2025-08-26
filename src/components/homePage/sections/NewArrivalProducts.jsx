"use client"
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "@/components/shared/headings/SectionHeading";
import SingleProductCard from "@/components/shared/cards/SingleProductCard";

const NewArrivalProducts = ({products}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-layout">
      {/* Section Heading */}
      <SectionHeading
        heading="New Arrivals Products"
        subHeading="Top New On This Week"
      />

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
          {products?.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <SingleProductCard
                singleProduct={item}
                key={index}
                borderStyle={"border-r"}
              />
            </SwiperSlide>
          ))}

          <div className="slider-btns">
            <button ref={prevRef} className="left-6 md:left-8 slider-nav-btn">
              <FaChevronLeft className="text-base md:text-xl" />
            </button>

            <button ref={nextRef} className="right-6 md:right-8 slider-nav-btn">
              <FaChevronRight className="text-base md:text-xl" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalProducts;
