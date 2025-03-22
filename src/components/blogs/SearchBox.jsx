"use client";
import "animate.css";
import { useEffect, useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(true); // Default open on medium & large screen
  const [smallDevice, setSmallDevice] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // if screen is small then set isOpen "false"
        setSmallDevice(true);
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
    <div className="sidebar-item-container">
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Search</h5>
        {smallDevice && (
          <button
            className={`text-2xl uren-transition ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <BiChevronDown />
          </button>
        )}
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading text-center hidden md:block">Search</h5>
      <hr className="sidebar-divider"/>

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <form className="blog-search-form">
          <input
            type="text"
            name="blogSearch"
            id="blogSearch"
            placeholder="Search Here"
          />
          <button className="uren-transition">
            <BiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
