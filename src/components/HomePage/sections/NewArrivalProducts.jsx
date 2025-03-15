"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "@/components/shared/SectionHeading";
import SingleProductCard from "@/components/shared/cards/SingleProductCard";

const NewArrivalProducts = () => {
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
          className="slider-container"
        >
          {newArrivalProducts.map((item, index) => (
            <SwiperSlide key={index}>
              <SingleProductCard
                singleProduct={item}
                key={index}
                borderStyle={"border-r"}
              />
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="slider-btns">
            <button ref={prevRef} className="left-6 md:left-8 offer-nav-btn">
              <FaChevronLeft className="text-base md:text-xl" />
            </button>

            <button ref={nextRef} className="right-6 md:right-8 offer-nav-btn">
              <FaChevronRight className="text-base md:text-xl" />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivalProducts;

const newArrivalProducts = [
  {
    name: "Lorem Ipsum is simply",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/1.png",
    rating: 3.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Veniam offic iis voluptates",
    price: 750.0,
    oldPrice: 0.0,
    image: "/images/product/medium-size/2.png",
    rating: 3,
    isNew: false,
    discountOf: 55,
  },
  {
    name: "Veniam officiis voluptates",
    price: 89.99,
    oldPrice: 150.0,
    image: "/images/product/medium-size/3.png",
    rating: 3.5,
    isNew: true,
    discountOf: 0,
  },
  {
    name: "Veniam officiis voluptates",
    price: 250.5,
    oldPrice: 175.99,
    image: "/images/product/medium-size/4.png",
    rating: 5,
    isNew: false,
    discountOf: 33,
  },
  {
    name: "Veniam offi ciis voluptates",
    price: 550.75,
    oldPrice: 440.65,
    image: "/images/product/medium-size/5.png",
    rating: 4,
    isNew: false,
    discountOf: 74,
  },
  {
    name: "Veniam officiis voluptates",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/6.png",
    rating: 2,
    isNew: false,
    discountOf: 60,
  },
  {
    name: "Ven iam officiis voluptates",
    price: 135.0,
    oldPrice: 0.0,
    image: "/images/product/medium-size/7.png",
    rating: 2.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Veniam officiis voluptates",
    price: 999.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/8.png",
    rating: 1,
    isNew: true,
    discountOf: 44,
  },
  {
    name: "Veniam officiis voluptates",
    price: 89.99,
    oldPrice: 120.99,
    image: "/images/product/medium-size/9.png",
    rating: 3,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Veniam officiis voluptates",
    price: 345.99,
    oldPrice: 300.0,
    image: "/images/product/medium-size/10.png",
    rating: 3.5,
    isNew: false,
    discountOf: 19,
  },
  {
    name: "Veniam officiis voluptates",
    price: 240.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/11.png",
    rating: 5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Veniam officiis voluptates",
    price: 89.99,
    oldPrice: 110.0,
    image: "/images/product/medium-size/12.png",
    rating: 4,
    isNew: true,
    discountOf: 42,
  },
  {
    name: "Veniam officiis voluptates",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/13.png",
    rating: 3,
    isNew: false,
    discountOf: 25,
  },
  {
    name: "Veniam officiis voluptates",
    price: 110.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/14.png",
    rating: 2.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Veniam officiis voluptates",
    price: 189.99,
    oldPrice: 220.0,
    image: "/images/product/medium-size/15.png",
    rating: 3,
    isNew: true,
    discountOf: 66,
  },
];
