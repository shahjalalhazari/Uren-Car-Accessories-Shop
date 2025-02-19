import Image from "next/image";
import Link from "next/link";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import OfferBadge from "../badges/OfferBadge";
import NewItemBadge from "../badges/NewItemBadge";
import ProductRating from "../ProductRating";
import OutlineBtn from "../buttons/OutlineBtn";


const SingleProductCard = ({ singleProduct }) => {
  const { image, discountOf, isNew, name, oldPrice, price, rating } =
    singleProduct;
  return (
    <div className="border">
      <div className="relative">
        <Link href={"/"}>
          <Image
            src={image}
            width={250}
            height={250}
            alt={name}
            className="mx-auto p-0 m-0"
          />
        </Link>
        <div className="absolute top-3 left-3 text-center space-y-2">
          {discountOf > 0 && <OfferBadge discountOf={discountOf} />}
          {isNew && <NewItemBadge />}
        </div>
      </div>
      {/* Default Product Content */}
      <div className="flex flex-col items-center gap-y-2 p-7 pt-0">
        <ProductRating rating={rating} />
        <Link href={"/"}>
          <h2 className="text-[#999] hover:text-primary transition-all ease-in-out duration-300">
            {name}
          </h2>
        </Link>
        <p className="flex items-center justify-center space-x-2">
          <span className="text-blue">${price.toFixed(2)}</span>
          {oldPrice > 0 && (
            <span className="text-sm text-[#999] line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </p>
        <div className="flex gap-4">
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