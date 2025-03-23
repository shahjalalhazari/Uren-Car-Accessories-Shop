"use client";
import "animate.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Archives = () => {
  const [isOpen, setIsOpen] = useState(true); // Default open on medium & large screen

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // if screen is small then set isOpen "false"
      }
    };

    // Initial check
    updateDeviceType();

    // Add event listener to detect resize
    window.addEventListener("resize", updateDeviceType);

    // Cleanup listener
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  return (
    // <div>
    //   <h6 className="blog-aside-title"></h6>
    //   <hr />

    // </div>

    <div className="sidebar-item-container">
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Archives</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading text-center hidden md:block">Archives</h5>
      <hr className="sidebar-divider" />

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <ul className="archives-list">
          <li>
            <Link href={"/"}>February 2025</Link>
          </li>
          <li>
            <Link href={"/"}>January 2025</Link>
          </li>
          <li>
            <Link href={"/"}>December 2024</Link>
          </li>
          <li>
            <Link href={"/"}>November 2024</Link>
          </li>
          <li>
            <Link href={"/"}>October 2024</Link>
          </li>
          <li>
            <Link href={"/"}>September 2024</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Archives;
