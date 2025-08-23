import Image from "next/image";
import Link from "next/link";

const CategorySingleCard = ({ categoryItem }) => {
  const { name, image, quantity } = categoryItem;

  return (
    <div className="category-item-card">
      <Link href={`/shop/products/category?${encodeURIComponent(name)}`}>
        <Image
          // TODO: REPLACE
          src={"/images/featured-categories/1.png"}
          width={100}
          height={100}
          alt={name}
          className="h-[250px] w-[200px] bg-cover"
        />
        <h2 className="category-card-title">{name}</h2>
        {/* TODO: REPLACE */}
        <p className="text-blue text-sm">&#40;11 products&#41;</p>
      </Link>
    </div>
  );
};

export default CategorySingleCard;