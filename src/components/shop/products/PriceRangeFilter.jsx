"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const PriceRangeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false); // Start collapsed by default
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // INITIALIZE FROM URL PARAMS.
  useEffect(() => {
    const min = searchParams.get('min_price');
    const max = searchParams.get('max_price');
    
    if (min) setMinPrice(min);
    if (max) setMaxPrice(max);
    
    // If price filter is active, automatically expand on mobile
    if ((min || max) && isMobile) {
      setIsOpen(true);
    }
  }, [searchParams, isMobile]);

  // UPDATE URL WITH PRICE RANGE.
  const updateUrlParams = (min, max) => {
    const params = new URLSearchParams(searchParams.toString());
    
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
    
    const params = new URLSearchParams(searchParams.toString());
    params.delete('min_price');
    params.delete('max_price');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Detect mobile devices and set initial state
  useEffect(() => {
    const checkIsMobile = () => window.innerWidth < 768;
    const mobile = checkIsMobile();
    setIsMobile(mobile);
    
    // Set initial open state: collapsed on mobile, open on desktop
    setIsOpen(!mobile);
    
    const handleResize = () => {
      const newIsMobile = checkIsMobile();
      setIsMobile(newIsMobile);
      
      // Auto-open when switching to desktop, auto-close when switching to mobile
      if (newIsMobile !== isMobile) {
        setIsOpen(!newIsMobile);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle collapse state (only applicable on mobile)
  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
    // On desktop, do nothing (always open)
  };

  // CHECK ACTIVE FILTER.
  const isFilterActive = minPrice || maxPrice;

  // Determine if content should be shown
  const shouldShowContent = isOpen || !isMobile;

  return (
    <div className="sidebar-item-container">
      {/* HEADER WITH TOGGLE BUTTON - Only show on mobile */}
      {isMobile && (
        <div 
          className="item-collapse-btn cursor-pointer"
          onClick={handleToggle}
        >
          <h5 className="item-heading">Price Range</h5>
          <button
            className={`text-2xl uren-transition ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <BiChevronDown />
          </button>
        </div>
      )}

      {/* HEADER FOR MEDIUM & LARGER DEVICES (hidden on mobile) */}
      {!isMobile && (
        <h5 className="item-heading">Price Range</h5>
      )}

      {/* DIVIDER - Only show when content is visible */}
      <div className="relative mt-2 lg:mt-3">
          <div className="divider-1"></div>
          <div className="divider-2"></div>
        </div>

      {/* COLLAPSIBLE CONTENT */}
      <div className={`
        list-items-container uren-transition
        ${isMobile ? (isOpen ? "container-open" : "container-close") : "container-open"}
      `}>
        {shouldShowContent && (
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
                  // Prevent iOS zoom
                  onFocus={(e) => {
                    if (isMobile) {
                      e.target.style.fontSize = '16px';
                    }
                  }}
                  onBlur={(e) => {
                    if (isMobile) {
                      e.target.style.fontSize = '';
                    }
                  }}
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
                  // Prevent iOS zoom
                  onFocus={(e) => {
                    if (isMobile) {
                      e.target.style.fontSize = '16px';
                    }
                  }}
                  onBlur={(e) => {
                    if (isMobile) {
                      e.target.style.fontSize = '';
                    }
                  }}
                />
              </div>

              {/* ACTION BUTTONs */}
              <div className="col-span-2 flex gap-2">
                {/* FORM SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="form-button uren-transition"
                >
                  Apply Filter
                </button>
                
                {/* CLEAR FILTER BUTTON */}
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

            {/* FILTER INDICATOR */}
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