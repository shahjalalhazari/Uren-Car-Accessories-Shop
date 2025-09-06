"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiChevronDown, BiX } from "react-icons/bi";
import { useRouter } from "next/navigation";


const CategoriesList = ({categoriesList, initialCategory}) => {
  const [isOpen, setIsOpen] = useState(true); // DEFAULT OPEN ON MEDIUM & LARGE SCREEN.
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const updateCategoryFromUrl = () => {
      if(typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        setSelectedCategory(params.get("category") || "");
      }
    };

    updateCategoryFromUrl();

    // LISTEN FOR URL CHANGE.
    const handleUrlChange = () => {
      updateCategoryFromUrl();
    }

    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  },[])


  // IDENTIFY DEVICE SIZE.
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

    if (!isClient) return;

    const params = new URLSearchParams(window.location.search);
    params.delete('category');
    router.push(`/shop/products?${params.toString()}`, { scroll: false });
    setSelectedCategory("");
  }

  // HANDLE CATEGORY CLICK
  const handleCategoryClick = (e, category) => {
    if (!isClient) return;

    if (selectedCategory === category) {
      e.preventDefault();
      handleCategoryClear(e);
    } else {
      setSelectedCategory(category);
    }
  }

  // GET URL FOR CATEGORY WITH ALL EXISTING SEARCH PARAMS.
  const getCategoryUrl = (category) => {
    if (!isClient) return `/shop/products?category=${category}`;

    const newParams = new URLSearchParams(window.location.search);

    if (selectedCategory === category) {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    return `/shop/products?${newParams.toString()}`;
  }

  // SHOW LOADING STATE DURING SSR.
  if (!isClient) {
    return (
      <div className="sidebar-item-container">
        <div className="item-collapse-btn">
          <h5 className="item-heading">Categories</h5>
          <button className="text-2xl">
            <BiChevronDown />
          </button>
        </div>
        <h5 className="item-heading hidden md:block">Categories</h5>
        <div className="relative mt-2 lg:mt-3">
          <div className="divider-1"></div>
          <div className="divider-2"></div>
        </div>
        <div className="list-items-container">
          <ul className="list-items">
            {categoriesList?.map((category, index) => (
              <li key={index} className="list-item animate-pulse">
                <span className="h-4 bg-gray-200 rounded w-20"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="sidebar-item-container">
      {/* MOBILE HEADER WITH TOGGLE BUTTON */}
      <div 
        className="item-collapse-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
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
              onClick={(e) => handleCategoryClick(e, category.name)}
            >
              <li className={
                `list-item uren-transition ${
                  selectedCategory === category.name ? "active-list-item" :""
                }`}
              >
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