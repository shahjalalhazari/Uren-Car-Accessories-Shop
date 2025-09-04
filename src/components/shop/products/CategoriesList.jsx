"use client"
import Link from "next/link";
import "animate.css";
import { useEffect, useState } from "react";
import { BiChevronDown, BiX } from "react-icons/bi";
import { useRouter } from "next/navigation";


const CategoriesList = ({categoriesList, searchParams}) => {
  const [isOpen, setIsOpen] = useState(true); // DEFAULT OPEN ON MEDIUM & LARGE SCREEN.
  const router = useRouter();
  const {category: selectedCategory} = searchParams;

  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 769) {
        setIsOpen(false); // IF SCREEN IS SMALL.
      }else {
        setIsOpen(true);
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // CLEARING CATEGORY FILTER.
  const handleCategoryClear = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // CREATE A NEW URLSearchParams FROM CURRENT URL.
    const params = new URLSearchParams(window.location.search);
    params.delete('category');
    router.push(`/shop/products?${params.toString()}`, { scroll: false });
  }

  // GET URL FOR CATEGORY WITH ALL EXISTING SEARCH PARAMS.
  const getCategoryUrl = (currentCategory) => {
    const params = new URLSearchParams(window.location.search);

    if (selectedCategory === currentCategory) {
      params.delete('category');
    } else {
      params.set('category', currentCategory);
    }
    return `/shop/products?${params.toString()}`;
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

      {/* DESKTOP HEADER (ALWAYS VISIBLE) */}
      <h5 className="item-heading hidden md:block">Categories</h5>

      {/* DIVIDER */}
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
            <Link 
              href={getCategoryUrl(category.name)} 
              key={index}
              onClick={(e) => {
                if (selectedCategory === category.name) {
                  e.preventDefault();
                  handleCategoryClear(e);
                }
              }}
            >
              <li className={
                `list-item uren-transition ${
                  selectedCategory === category.name ? "active-list-item" :""
                }`}>
                <span>{category.name}</span>
                {selectedCategory === category.name && 
                  <button 
                  className="cross-btn uren-transition"
                  onClick={handleCategoryClear}
                  >
                    <BiX className="transform rotate-45" />
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