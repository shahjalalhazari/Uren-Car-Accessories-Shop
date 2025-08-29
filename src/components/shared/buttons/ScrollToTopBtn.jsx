"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scrollUp"
      onClick={scrollToTop}
      className={`scroll-up-btn ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;