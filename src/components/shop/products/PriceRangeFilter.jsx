"use client"
import { useUrlParams } from "@/hooks/useUrlParams";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const PriceRangeFilter = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const {params, isClient} = useUrlParams();

  // GET URL PARAMS FROM WINDOW.
  const getUrlParams = () => {
    if (typeof window === "undefined") return new URLSearchParams();
    return new URLSearchParams(window.location.search);
  }

  // INITIALIZE FROM URL PARAMS.
  useEffect(() => {
    if (isClient) {
      setMinPrice(params.get('min_price') || "");
      setMaxPrice(params.get('max_price') || "");
    }
  }, [isClient, params]);

  // UPDATE URL WITH PRICE RANGE.
  const updateUrlParams = (min, max) => {
    const params = getUrlParams();
    
    if (min && max) {
      params.set('min_price', min);
      params.set('max_price', max);
    } else {
      params.delete('min_price');
      params.delete('max_price');
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // HANDLE FORM SUBMISSION.
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUrlParams(minPrice, maxPrice);
  };

  // CLEAR FILTER.
  const clearFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    
    const params = getUrlParams();
    params.delete('min_price');
    params.delete('max_price');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // FIXED: Set initial mobile state without auto-collapse behavior
  useEffect(() => {
    // Only set initial mobile detection, no auto-collapse
    const checkIsMobile = () => window.innerWidth < 768;
    setIsMobile(checkIsMobile());
    
    // REMOVED: No resize event listener for auto-collapse
  }, []);

  // Simple toggle function - no mobile checks
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // CHECK ACTIVE FILTER.
  const isFilterActive = minPrice || maxPrice;


  return (
    <div className="sidebar-item-container">
      {/* MOBILE HEADER WITH TOGGLE BUTTON */}
      {isMobile && (
        <div 
          className="item-collapse-btn"
          onClick={handleToggle}
        >
          <h5 className="item-heading">Price Range</h5>
          <button
            className={`heading-arrow uren-transition ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <BiChevronDown />
          </button>
        </div>
      )}

      {/* DESKTOP HEADER (always visible) */}
      {!isMobile && (
        <h5 className="item-heading">Price Range</h5>
      )}

      {/* DIVIDER */}
      <div className="divider-group">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>

      {/* CONTENT - Different behavior for mobile/desktop */}
      <div className={`
        list-items-container uren-transition px-6
        ${isMobile ? (isOpen ? 
          "container-open" : "container-close") : 
          "container-open"
        }
      `}>
        {/* Always show content on desktop, conditionally on mobile */}
        {(!isMobile || isOpen) && (
          <>
            <form onSubmit={handleSubmit} className="form-layout">
              <div className="form-group">
                <label className="form-label">Min Price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="0"
                  min="0"
                  className="from-input"
                  name="min_price"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Max Price</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="10000"
                  max="10000"
                  className="from-input"
                  name="max_price"
                />
              </div>

              {/* ACTION BUTTONs */}
              <div className="col-span-2 flex gap-2">
                <button
                  type="submit"
                  className="form-button uren-transition"
                >
                  Apply Filter
                </button>
                
                {isFilterActive && (
                  <button
                    type="button"
                    onClick={clearFilter}
                    className="clear-filter-button uren-transition"
                  >
                    Clear
                  </button>
                )}
              </div>
            </form>

            {isFilterActive && (
              <div className="mt-4 bg-blue/10 p-3 border border-blue/50">
                <p className="indicator-text">
                  Showing Items from:{" "}
                  {minPrice && `${minPrice}`}
                  {minPrice && maxPrice && " to "}
                  {maxPrice && `${maxPrice}`} AED
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PriceRangeFilter;