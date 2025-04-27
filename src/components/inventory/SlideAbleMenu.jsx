"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideAbleMenu = () => {
  const swiperRef = useRef(null);
  const menuBtnRef = useRef(null);

  const openMenu = () => {
    swiperRef.current?.slidePrev();
  };

  useEffect(() => {
    const swiper = swiperRef.current;
    const menuBtn = menuBtnRef.current;

    const handleSlideChangeStart = () => {
      if (swiper.activeIndex === 0) {
        menuBtn.classList.add("cross");
        menuBtn.removeEventListener("click", openMenu, true);
      } else {
        menuBtn.classList.remove("cross");
      }
    };

    const handleSlideChangeEnd = () => {
      if (swiper.activeIndex === 1) {
        menuBtn.addEventListener("click", openMenu, true);
      }
    };

    swiper.on("slideChangeTransitionStart", handleSlideChangeStart);
    swiper.on("slideChangeTransitionEnd", handleSlideChangeEnd);

    return () => {
      swiper.off("slideChangeTransitionStart", handleSlideChangeStart);
      swiper.off("slideChangeTransitionEnd", handleSlideChangeEnd);
    };
  }, []);

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={"auto"}
      initialSlide={1}
      resistanceRatio={0}
      slideToClickedSlide={true}
      className="w-full h-screen"
    >
      <SwiperSlide className="min-w-[70%] max-w-[320px] h-full bg-blue-600 text-white flex items-center justify-center text-lg">
        Menu Slide
      </SwiperSlide>

      <SwiperSlide className="w-full h-full flex items-center justify-center relative bg-white text-black text-lg">
        <div
          ref={menuBtnRef}
          className="menu-button absolute top-4 left-4 bg-blue-600 p-3 cursor-pointer transition-all"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        Content Slide
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideAbleMenu;

const menuItems = [
  "Home",
  "Shop",
  "About",
  "Contact",
  "Blog",
  "Categories",
  "Support",
  "FAQ",
  "Login",
];
