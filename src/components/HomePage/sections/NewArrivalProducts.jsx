"use client";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import SectionHeading from "@/components/shared/SectionHeading";
import OfferBadge from "@/components/shared/badges/OfferBadge";
import NewItemBadge from "@/components/shared/badges/NewItemBadge";
import ProductRating from "@/components/shared/ProductRating";
import OutlineBtn from "@/components/shared/buttons/OutlineBtn";


const NewArrivalProducts = () => {
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
      items: 7,
      slidesToSlide: 7,
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
    <div className="ml-8 mr-10 py-0 my-20">
      {/* Section Heading */}
      <SectionHeading
        heading="New Arrivals Products"
        subHeading="Top New On This Week"
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
        itemClass="new-arrival-slider"
      >
        {newArrivalProducts.map((item, index) => (
          <div key={index} className="new-arrival-slider-card">
            <div className="relative">
              <Image
                src={item.image}
                width={150}
                height={150}
                alt={item.name}
                className="mx-auto p-0 m-0"
              />
              <div className="absolute top-3 left-3 text-center space-y-2">
                {item.discountOf > 0 && (
                  <OfferBadge discountOf={item.discountOf} />
                )}
                {item.isNew && <NewItemBadge />}
              </div>
            </div>
            {/* Default Product Content */}
            <div className="new-arrival-item-content">
              <ProductRating rating={item.rating} />
              <h2 className="text-sm text-[#999]">{item.name}</h2>
              <p className="new-arrival-item-price">
                <span className="text-blue">${item.price.toFixed(2)}</span>
                {item.oldPrice > 0 && (
                  <span className="text-sm line-through">
                    ${item.oldPrice.toFixed(2)}
                  </span>
                )}
              </p>
              <div className="flex gap-4">
                {/* ADD TO CART BUTTON */}
                {/* REPLACE */}
                <Link href={"/"}>
                  <OutlineBtn
                    btnIcon={<BiShoppingBag />}
                    btnTitle={"Add To Cart"}
                  />
                </Link>
                {/* ADD TO WISHLIST BUTTON */}
                <OutlineBtn
                  btnIcon={<BiHeart />}
                  btnTitle={"Add To Wishlist"}
                />
                {/* QUICK VIEW BUTTON */}
                <OutlineBtn
                  btnIcon={<FaRegShareSquare />}
                  btnTitle={"Quick View"}
                />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default NewArrivalProducts;

const newArrivalProducts = [
  {
    name: "Veni am offi ciis volup tates",
    price: 89.99,
    oldPrice: 0.0,
    image: "/images/product/medium-size/1.png",
    rating: 3.5,
    isNew: true,
    discountOf: 24,
  },
  {
    name: "Veniam offic iis volu ptates",
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
