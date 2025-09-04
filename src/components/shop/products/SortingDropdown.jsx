"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SortingDropdown = ({initialSort}) => {
  const router = useRouter();
  const [currentSort, setCurrentSort] = useState(initialSort || "default");

  // GET URL PARAMS FROM WINDOW.
  const getUrlParams = () => {
    if (typeof window === "undefined") return new URLSearchParams();
    return new URLSearchParams(window.location.search);
  }

  useEffect(() => {
    const params = getUrlParams();
    const sortParams = params.get("sort");

    if (sortParams) {
      setCurrentSort(sortParams);
    } else {
      setCurrentSort("default");
    }
  },[])

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    setCurrentSort(sortType);
    const params = getUrlParams();

    if (sortType === "default") {
      params.delete("sort"); // Remove sorting if "Default" is selected
    } else {
      params.set("sort", sortType);
    }

    router.replace(`/shop/products?${params.toString()}`, { scroll: false });
  };
  
  return (
    <div className="uren-sorting">
      <label>Sort By:</label>
      <select
        className="sorting-dropdown"
        onChange={handleSortChange}
        value={currentSort}
      >
        <option value="default">Default</option>
        <option value="a-z">Name, A to Z</option>
        <option value="z-a">Name, Z to A</option>
        <option value="low-high">Price, low to high</option>
        <option value="high-low">Price, high to low</option>
        <option value="highest">Rating (Highest)</option>
        <option value="lowest">Rating (Lowest)</option>
      </select>
    </div>
  );
};

export default SortingDropdown;