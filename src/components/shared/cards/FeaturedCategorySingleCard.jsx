import Image from "next/image";
import Link from "next/link";


const FeaturedCategorySingleCard = ({ categoryItem }) => {
  return (
    <div className="category-item-card">
      <Link href={`/categories/${encodeURIComponent(categoryItem.name)}`}>
        <Image
          src={categoryItem.image}
          width={200}
          height={220}
          alt={categoryItem.name}
          className=""
        />
      </Link>
      {/* REPLACE */}
      <Link href={`/categories/${encodeURIComponent(categoryItem.name)}`}>
        <h2 className="category-item-card-title">{categoryItem.name}</h2>
      </Link>
      <p className="text-blue">
        &#40;{categoryItem.quantity} products&#41;
      </p>
    </div>
  );
};

export default FeaturedCategorySingleCard;