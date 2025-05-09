"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OfferBanners = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-layout relative">
      <Swiper
        spaceBetween={30}
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
          768: { slidesPerView: 2 }, // Medium screens
          1025: { slidesPerView: 3 }, // Large screens
        }}
        className="slider-container"
      >
        {offerBannersList.map((offerBanner, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/shop/products?offer=${encodeURIComponent(
                offerBanner.offerName
              )}`}
            >
              <div className="shadow-lg rounded-none hover:opacity-75 transition-all ease-in-out duration-300">
                <Image
                  src={offerBanner.offerImg}
                  alt={offerBanner.offerName}
                  width={500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
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
  );
};

export default OfferBanners;

const offerBannersList = [
  {
    offerName: "10% off on everything",
    offerImg: "/images/offer-banners/ob-1.jpg",
  },
  {
    offerName: "20% off on everything",
    offerImg: "/images/offer-banners/ob-2.jpg",
  },
  {
    offerName: "30% off on everything",
    offerImg: "/images/offer-banners/ob-3.jpg",
  },
  {
    offerName: "40% off on everything",
    offerImg: "/images/offer-banners/ob-4.jpg",
  },
  {
    offerName: "50% off on everything",
    offerImg: "/images/offer-banners/ob-5.jpg",
  },
  {
    offerName: "60% off on everything",
    offerImg: "/images/offer-banners/ob-6.jpg",
  },
  {
    offerName: "70% off on everything",
    offerImg: "/images/offer-banners/ob-7.jpg",
  },
  {
    offerName: "80% off on everything",
    offerImg: "/images/offer-banners/ob-8.jpg",
  },
  {
    offerName: "90% off on everything",
    offerImg: "/images/offer-banners/ob-9.jpg",
  },
];