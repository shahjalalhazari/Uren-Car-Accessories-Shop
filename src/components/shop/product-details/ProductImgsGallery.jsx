"use client"
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const ProductImgsGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="photo-gallery-layout">
      {/* Active Zoom Image */}
      <div className="details-active-img">
        <InnerImageZoom
          src={activeImage}
          zoomSrc={activeImage}
          zoomType="hover"
        />
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={8}
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
          0: { slidesPerView: 3 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        loop={true}
        autoplay={{ delay: 15000 }}
        className="details-photo-gallery"
        onSlideChange={(swiper) => setActiveImage(images[swiper.realIndex])}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`uren-transition details-slider-image ${
                activeImage === img
                  ? "border-blue opacity-100"
                  : "border-[#ddd] opacity-70"
              }`}
              onClick={() => setActiveImage(img)}
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="slider-btns">
          <button
            ref={prevRef}
            className="left-0 md:left-2 lg:left-4 slider-nav-btn"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          <button
            ref={nextRef}
            className="right-0 md:right-2 lg:right-4 slider-nav-btn"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
      </Swiper>
    </div>
  );};

export default ProductImgsGallery;