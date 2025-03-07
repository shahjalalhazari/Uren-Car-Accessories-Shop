"use client"
import { useEffect, useState } from "react";
import PrimaryBtn from "@/components/shared/buttons/PrimaryBtn";


const CarouselBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to manually change slides
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full relative overflow-hidden mobile-screen">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {banners.map((banner, index) => {
          const animationStyle =
            index % 2 === 0 ? "animation-style-02" : "animation-style-01";
          return (
            <div
              key={index}
              className={`carousel-bg lg:min-w-full ${
                index === activeIndex ? `slick-active ${animationStyle}` : ""
              }`}
              style={{
                backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0,0,0,0.3)), 
                url(/images/slider/${index + 1}.jpg)`,
                backgroundPosition: "bottom",
              }}
            >
              <div className="carousel-content">
                <div className="carousel-text space-y-3 lg:space-y-5">
                  <h5 className="carousel-sub-heading">{banner.subHeading}</h5>
                  <h2 className="carousel-heading">{banner.heading}</h2>
                  <div className="h-0.5 lg:h-1 bg-secondary w-14 lg:w-20 lg:mx-auto rounded"></div>
                  <p className="w-[360px] lg:w-full text-sm lg:text-base pb-2">
                    {banner.description}
                  </p>
                  <PrimaryBtn text="READ MORE" path="/" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="carousel-btns">
        <button
          className="carousel-left-btn"
          onClick={() =>
            handleSlideChange(
              (activeIndex - 1 + banners.length) % banners.length
            )
          }
        >
          ❮
        </button>
        <button
          className="carousel-right-btn"
          onClick={() => handleSlideChange((activeIndex + 1) % banners.length)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default CarouselBanner;


const banners = [
  {
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide2",
    prevSlide: "#slide6",
  },
  {
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide3",
    prevSlide: "#slide1",
  },
  {
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide4",
    prevSlide: "#slide2",
  },
  {
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide5",
    prevSlide: "#slide3",
  },
  {
    heading: "Wheels & Tires",
    subHeading: "Save $120 when you buy",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide6",
    prevSlide: "#slide4",
  },
  {
    heading: "20% off Auto part",
    subHeading: "We have the part you need",
    description:
      "Explore and immerse in exciting 360 content with Full dive’s all-in-one virtual reality platform",
    nextSlide: "#slide1",
    prevSlide: "#slide5",
  },
];