"use client";
import "animate.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import HorizontalBlogCard from "../shared/cards/HorizontalBlogCard";

const RecentBlogs = ({ blogs }) => {
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
    <div className="sidebar-item-container hidden md:block">
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Recent Blogs</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading text-center hidden md:block">Recent Blogs</h5>
      <hr className="sidebar-divider" />

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        {/* map last 6 blogs in descending order */}
        <div className="recent-blogs-list">
          {blogs
            .slice(-6)
            .reverse()
            .map((blog, index) => (
              <HorizontalBlogCard singleBlog={blog} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
