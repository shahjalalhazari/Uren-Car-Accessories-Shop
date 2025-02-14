"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OfferBanners = () => {
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
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="mx-4 p-0 my-20">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={deviceType !== "mobile"}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="ease-in-out .5"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        itemClass="px-5 z-[100]"
      >
        {offerBannersList.map((offerBanner, index) => (
          <Link
            key={index}
            href={`/offers/${encodeURIComponent(offerBanner.offerName)}`}
          >
            <Image
              src={offerBanner.offerImg}
              alt={offerBanner.offerName}
              width={500}
              height={300}
              className="shadow-md"
            />
          </Link>
        ))}
      </Carousel>
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