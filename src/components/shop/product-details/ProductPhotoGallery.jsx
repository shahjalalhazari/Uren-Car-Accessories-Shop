"use client";
import { useZoomImageMove } from "@zoom-image/react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductPhotoGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0] || "");
  const imageMoveContainerRef = useRef(null);
  const { createZoomImage } = useZoomImageMove();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (imageMoveContainerRef.current && activeImage) {
      const container = imageMoveContainerRef.current;

      // Reset zoom effect before applying a new one
      container.innerHTML = `<img src="${activeImage}" class="h-full w-full object-cover"/>`;

      createZoomImage(container, {
        zoomImageSource: activeImage,
      });
    }
  }, [activeImage, createZoomImage]);


  return (
    <div className="product-details-photo-gallery">
      {/* Main Image with Zoom on Mouse Move */}
      <div ref={imageMoveContainerRef} className="details-active-img"></div>

      {/* Thumbnail Slider */}
      <Swiper
        spaceBetween={0}
        loop={true}
        modules={[Navigation, Thumbs]}
        className="images-slider"
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
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={`details-slider-image uren-transition ${
                activeImage === image ? "border-primary" : "border-[#ddd]"
              }`}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image}
                alt="Thumbnail"
                width={120}
                height={120}
                objectFit="cover"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="slider-btns">
          <button
            ref={prevRef}
            className="left-1 slider-nav-btn uren-transition"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <button
            ref={nextRef}
            className="right-1 slider-nav-btn uren-transition"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ProductPhotoGallery;
