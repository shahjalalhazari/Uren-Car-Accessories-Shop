import Image from "next/image";
import Link from "next/link";

const FeaturedCategorySingleCard = ({ categoryItem }) => {
  const { name, image, quantity } = categoryItem;

  return (
    <div className="category-item-card">
      <Link
        href={`/shop/products/category?${encodeURIComponent(
          name
        )}`}
      >
        <Image
          src={image}
          width={200}
          height={220}
          alt={name}
          className=""
        />
        <h2 className="category-card-title">{name}</h2>
        <p className="text-blue">&#40;{quantity} products&#41;</p>
      </Link>
    </div>
  );
};

export default FeaturedCategorySingleCard;
