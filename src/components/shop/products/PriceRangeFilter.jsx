"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";


const PriceRangeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // INITIALIZE FROM URL PARAMS.
  useEffect(() => {
    const min = searchParams.get('min_price');
    const max = searchParams.get('max_price');
    
    if (min) setMinPrice(min);
    if (max) setMaxPrice(max);
  }, [searchParams]);

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

  // RESPONSE BEHAVIOR - COLLAPSE ON MOBILE.
  useEffect(() => {
    const updateDeviceType = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // CHECK ACTIVE FILTER.
  const isFilterActive = minPrice || maxPrice;

  return (
    <div className="sidebar-item-container">
      {/* HEADER WITH TOGGLE BUTTON. */}
      <div 
        className="item-collapse-btn"
        onClick={() => setIsOpen(!isOpen)}
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

      {/* HEADER FOR MEDIUM & LARGER DEVICES. */}
      <h5 className="item-heading hidden md:block">Price Range</h5>

      {/* DIVIDER */}
      <div className="relative mt-2 lg:mt-3">
        <div className="divider-1"></div>
        <div className="divider-2"></div>
      </div>

      {/* COLLAPSIBLE CONTENT. */}
      <div className={`list-items-container uren-transition
      ${isOpen ? "container-open" : "container-close"
        }`}
      >
        <form onSubmit={handleSubmit} className="form-layout">
          <div className="form-group">
            <label className="form-label" >Min Price</label>
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
      </div>
    </div>
  );
};

export default PriceRangeFilter;