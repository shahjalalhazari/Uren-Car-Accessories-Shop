"use client"
import { useRouter, useSearchParams } from "next/navigation";

const SortingDropdown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    const params = new URLSearchParams(searchParams);

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
        value={searchParams.get("sort") || "1"}
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