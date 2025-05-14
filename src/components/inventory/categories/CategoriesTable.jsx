"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const CategoriesTable = ({ categories }) => {
  const [sortType, setSortType] = useState("default");
  const [sortedCategories, setSortedCategories] = useState(categories);

  useEffect(() => {
    let sorted;

    switch (sortType) {
      case "name-asc":
        sorted = [...categories].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted = [...categories].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "items-asc":
        sorted = [...categories].sort((a, b) => a.items - b.items);
        break;
      case "items-desc":
        sorted = [...categories].sort((a, b) => b.items - a.items);
        break;
      default:
        sorted = categories;
        break;
    }

    setSortedCategories(sorted);
  }, [sortType]);

  return (
    <>
      {/* CATEGORIES SORTING */}
      <div className="sorting-dropdown">
        <label htmlFor="">Sort By:</label>
        <select
          className="dropdown-items-list"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="name-asc">Name (A - Z)</option>
          <option value="name-desc">Name (Z - A)</option>
          <option value="items-asc">Items (Low to High)</option>
          <option value="items-desc">Items (High to Low)</option>
        </select>
      </div>

      {/* TABLE */}
      <table className="categories-table">
        <thead className="table-head">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Number of Items</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {sortedCategories.map((category) => (
            <tr key={category.id} className="">
              <td className="flex items-center justify-center">
                <Image
                  src={category.img}
                  width={70}
                  height={70}
                  alt={category.name}
                />
              </td>
              <td>{category.name}</td>
              <td>{category.items} Products</td>
              <td className="table-btns">
                <button
                  className="btn-warning table-btn"
                  title="Edit Category Info"
                >
                  <FaEdit />
                </button>
                <button
                  className="btn-secondary table-btn"
                  title="Delete Category"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoriesTable;
