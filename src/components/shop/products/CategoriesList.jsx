"use client"
import Link from "next/link";
import "animate.css";
import { useEffect, useState } from "react";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import { useRouter, useSearchParams } from "next/navigation";
import { FaPlus } from "react-icons/fa";


const CategoriesList = ({categoriesList}) => {
  const [isOpen, setIsOpen] = useState(true); // DEFAULT OPEN ON MEDIUM & LARGE SCREEN.
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // IF SCREEN IS SMALL.
      }
    };

    // INITIAL CHECK
    updateDeviceType();

    // ADD EVENT LISTENER TO DETECT SCREEN SIZE CHANGE.
    window.addEventListener("resize", updateDeviceType);

    // CLEANUP EVENT LISTENER.
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // CLEARING CATEGORY FILTER.
  const handleCategoryClear = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('category');
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="sidebar-item-container">
      {/* MOBILE HEADER WITH TOGGLE BUTTON */}
      <div className="item-collapse-btn" onClick={() => setIsOpen(!isOpen)}>
        <h5 className="item-heading">Categories</h5>
        <button
          className={`text-2xl uren-transition ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <BiChevronDown />
        </button>
      </div>

      {/* Desktop Header (Always Visible) */}
      <h5 className="item-heading hidden md:block">Categories</h5>

      {/* Divider */}
      <div className="relative mt-2 lg:mt-3">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>

      <div
        className={`list-items-container uren-transition ${
          isOpen ? "container-open" : "container-close"
        }`}
      >
        <ul className="list-items">
          {categoriesList?.map((category, index) => (
            <Link href={`/shop/products?category=${encodeURIComponent(category.name)}`} key={index}>
              <li className={
                `list-item uren-transition 
                ${selectedCategory === category.name ? "active-list-item" :""}`
                }>
                <span>{category.name}</span>
                {selectedCategory === category.name && 
                  <button 
                  className="cross-btn uren-transition" 
                  onClick={handleCategoryClear}
                  >
                    <BiPlus />
                  </button>
                }
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;