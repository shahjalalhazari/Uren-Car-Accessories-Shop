"use client"
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <div className="testimonial">
      {/* Custom Navigation Buttons */}
      <button
        className="slider-nav-btn left-6 md:left-8"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaChevronLeft className="text-base md:text-xl" />
      </button>
      <button
        className="slider-nav-btn right-6 md:right-8"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaChevronRight className="text-base md:text-xl" />
      </button>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        modules={[Parallax, Navigation]}
        className=""
      >
        <div
          slot="container-start"
          className="testimonial-bg-img"
          data-swiper-parallax="-33%"
        ></div>

        {testimonials?.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-content">
              <div className="space-y-1 lg:space-y-3">
                <p className="text-primary text-sm lg:text-base">
                  What’s Client Says
                </p>
                <h2 className="testimonial-client-name">{testimonial.name}</h2>
              </div>
              <p className="testimonial-comment">“ {testimonial.comment} ”</p>
              <Image
                src={testimonial.image}
                width={110}
                height={110}
                alt={testimonial.name}
                className="mx-auto w-20 h-20 md:w-32 md:h-32"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/testimonial/user/1.png",
    comment:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/images/testimonial/user/2.png",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "/images/testimonial/user/3.png",
    comment:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];