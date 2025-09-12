"use client"
import { useCategory } from "@/context/CategoryContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CategorySingleCard = ({ categoryItem, isActive, categoryUrl, isLoading=false }) => {
  const { name, image } = categoryItem;
  const {handleCategorySelect}= useCategory();
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    handleCategorySelect(name);
    router.push(categoryUrl);
  }

  if (isLoading) {
    return (
      <div className="category-item-card animate-pulse">
        <div className="h-[250px] w-[200px] bg-gray-200 rounded"></div>
        <div className="category-card-content">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`
      category-item-card ${
        isActive ? 'active-category-card' : ''
    }`}>
      <Link 
        href={categoryUrl}
        onClick={handleClick}
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