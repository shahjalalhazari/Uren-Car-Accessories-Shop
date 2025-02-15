"use client";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedCategorySingleCard from "@/components/shared/cards/FeaturedCategorySingleCard";
import SectionHeading from "@/components/shared/SectionHeading";

const FeaturedCategories = () => {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 464) {
        setDeviceType("mobile");
      } else if (window.innerWidth < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    // Initial check
    updateDeviceType();

    // Add event listener to detect resize
    window.addEventListener("resize", updateDeviceType);

    // Cleanup listener
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  return (
    <div className="ml-8 mr-10 py-0 mb-20">
      {/* Section Heading */}
      <SectionHeading
        heading="Featured Categories"
        subHeading="Top Featured Collections"
      />

      {/* Category List */}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="ease-in-out .5"
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        itemClass="mt-12 border-y border-l"
      >
        {featuredCategories.map((item, index) => (
          <FeaturedCategorySingleCard key={index} categoryItem={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedCategories;

const featuredCategories = [
  {
    name: "Brakes & Rotors",
    quantity: 8,
    image: "/images/featured-categories/1.png",
  },
  {
    name: "Interior",
    quantity: 15,
    image: "/images/featured-categories/2.png",
  },
  {
    name: "Lighting",
    quantity: 10,
    image: "/images/featured-categories/3.png",
  },
  {
    name: "Performance",
    quantity: 5,
    image: "/images/featured-categories/4.png",
  },
  {
    name: "Suspension Systems",
    quantity: 18,
    image: "/images/featured-categories/5.png",
  },
  {
    name: "Wheels & Tires",
    quantity: 26,
    image: "/images/featured-categories/6.png",
  },
  {
    name: "Brakes & Rotors",
    quantity: 8,
    image: "/images/featured-categories/4.png",
  },
  {
    name: "Interior",
    quantity: 15,
    image: "/images/featured-categories/6.png",
  },
  {
    name: "Lighting",
    quantity: 10,
    image: "/images/featured-categories/5.png",
  },
  {
    name: "Performance",
    quantity: 5,
    image: "/images/featured-categories/1.png",
  },
  {
    name: "Suspension Systems",
    quantity: 18,
    image: "/images/featured-categories/2.png",
  },
  {
    name: "Wheels & Tires",
    quantity: 26,
    image: "/images/featured-categories/3.png",
  },
];
