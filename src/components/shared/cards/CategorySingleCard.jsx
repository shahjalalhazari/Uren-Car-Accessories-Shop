"use client"
import { useCategory } from "@/context/CategoryContext";
import Image from "next/image";
import Link from "next/link";
import UrenLoading from "../UrenLoading";

const CategorySingleCard = ({ categoryItem, isActive, categoryUrl, isLoading=false }) => {
  const { name, image } = categoryItem;
  const {handleCategorySelect}= useCategory();

  const handleCategoryClick = (e) => {
    e.preventDefault();
    handleCategorySelect(categoryItem);
  }

  if (isLoading) {
    return (
      <UrenLoading/>
    );
  }

  return (
    <div className={`category-item-card ${
      isActive ? 'active-category-card' : ''
    }`}>
      <Link 
        href={categoryUrl}
        onClick={handleCategoryClick}
        passHref
      >
        <Image
          // TODO: REPLACE
          src={image || "/images/featured-categories/1.png"}
          width={100}
          height={100}
          alt={name}
          className="h-[250px] w-[200px] bg-cover"
        />
        <div className="category-card-content">
          <h2 className="category-card-title">{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default CategorySingleCard;