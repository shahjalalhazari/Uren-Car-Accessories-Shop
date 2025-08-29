import Image from "next/image";
import Link from "next/link";
import OfferBadge from "../badges/OfferBadge";
import NewItemBadge from "../badges/NewItemBadge";
import OutlineBtn from "../buttons/OutlineBtn";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import ProductRating from "../ProductRating";
import { calculatePrice } from "@/utils/priceCalculator";


const SingleProductCard = ({ singleProduct, borderStyle }) => {
  const {
    thumbnail,
    discountPercentage,
    title,
    price,
    rating,
    id,
  } = singleProduct;
  const isNew = true;

  // PRICE CALCULATOR
  const priceData = calculatePrice(price, discountPercentage);
  
  return (
    <div className={`${borderStyle} single-product-card`}>
      <div className="relative">
        <Link href={`/shop/products/${id}`}>
          <Image
            src={thumbnail}
            width={220}
            height={220}
            alt={title}
            className="mx-auto p-0 m-0"
          />
        </Link>
        <div className="badges">
          {discountPercentage > 0 && (
            <OfferBadge discountOf={discountPercentage} />
          )}
          {isNew && <NewItemBadge />}
        </div>
      </div>
      {/* Default Product Content */}
      <div className="content">
        <ProductRating rating={rating} />
        <Link href={`/shop/products/${id}`}>
          <h2 className="title">{title}</h2>
        </Link>
        {/* PRODUCT PRICE */}
        <h2 className="prices">
          <p className="price">
            AED {priceData.discountedPrice.toFixed(2)}
          </p>
          <p className="old-price">{priceData.originalPrice.toFixed(2)}</p>
        </h2>
        <div className="flex gap-4 mt-2">
          {/* ADD TO CART BUTTON */}
          {/* REPLACE */}
          <Link href={"/"}>
            <OutlineBtn btnIcon={<BiShoppingBag />} btnTitle={"Add To Cart"} />
          </Link>
          {/* ADD TO WISHLIST BUTTON */}
          <OutlineBtn btnIcon={<BiHeart />} btnTitle={"Add To Wishlist"} />
          {/* QUICK VIEW BUTTON */}
          <OutlineBtn btnIcon={<FaRegShareSquare />} btnTitle={"Quick View"} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;