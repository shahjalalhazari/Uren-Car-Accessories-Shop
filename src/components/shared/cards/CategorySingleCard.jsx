"use client"
import { useCategory } from "@/context/CategoryContext";
import Image from "next/image";
import Link from "next/link";

const CategorySingleCard = ({ categoryItem, isActive, categoryUrl }) => {
  const { name, image, quantity } = categoryItem;
  const {handleCategorySelect}= useCategory();

  const handleClick = (e) => {
    e.preventDefault();
    handleCategorySelect(name);
  }

  return (
    <div className={`
      category-item-card ${
        isActive ? 'active' : ''
    }`}>
      <Link 
        href={categoryUrl || `/shop/products?category=${name}`}
        onClick={handleClick}
      >
        <Image
          // TODO: REPLACE
          src={"/images/featured-categories/1.png"}
          width={100}
          height={100}
          alt={name}
          className="h-[250px] w-[200px] bg-cover"
        />
        <div className="category-card-content">
          <h2 className="category-card-title">{name}</h2>
          {/* TODO: REPLACE */}
          <p className="text-blue text-sm">&#40;11 products&#41;</p>
        </div>
      </Link>
    </div>
  );
};

export default CategorySingleCard;