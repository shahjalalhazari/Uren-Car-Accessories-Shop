"use client"
import { useRouter, useSearchParams } from "next/navigation";


const SortingDropdown = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	
	const handleSortChange = (event) => {
    const sortType = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (sortType === "1") {
      params.delete("sort"); // Remove sorting if "Default" is selected
    } else {
      params.set("sort", sortType);
    }

    router.push(`/shop/products?${params.toString()}`);
  };
  return (
    <div className="text-end space-x-5 mb-8">
      <label className="text-sm">Sort By:</label>
      <select
        className="select select-bordered select-sm rounded-none max-w-xs pl-8 text-sm"
        onChange={handleSortChange}
        value={searchParams.get("sort") || "1"}
      >
        <option value="1">Default</option>
        <option value="2">Name, A to Z</option>
        <option value="3">Name, Z to A</option>
        <option value="4">Price, low to high</option>
        <option value="5">Price, high to low</option>
        <option value="6">Rating (Highest)</option>
        <option value="7">Rating (Lowest)</option>
      </select>
    </div>
  );
};

export default SortingDropdown;
