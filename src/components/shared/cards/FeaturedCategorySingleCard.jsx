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
        <h2 className="category-card-title">{categoryItem.name}</h2>
        <p className="text-blue">&#40;{categoryItem.quantity} products&#41;</p>
      </Link>
    </div>
  );
};

export default FeaturedCategorySingleCard;