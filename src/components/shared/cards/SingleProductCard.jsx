import Image from 'next/image';
import Link from 'next/link';
import OfferBadge from '../badges/OfferBadge';
import NewItemBadge from '../badges/NewItemBadge';
import ProductRating from '../ProductRating';
import OutlineBtn from '../buttons/OutlineBtn';
import { BiHeart, BiShoppingBag } from 'react-icons/bi';
import { FaRegShareSquare } from 'react-icons/fa';

const SingleProductCard = ({ singleProduct, borderStyle }) => {
  const { image, discountOf, isNew, name, oldPrice, price, rating, id } =
    singleProduct;

  return (
    <div className={`${borderStyle} single-product-card`}>
      <div className="relative">
        <Link href={`/shop/products/${id}`}>
          <Image
            src={image}
            width={250}
            height={250}
            alt={name}
            className="mx-auto p-0 m-0"
          />
        </Link>
        <div className="single-product-badges">
          {discountOf > 0 && <OfferBadge discountOf={discountOf} />}
          {isNew && <NewItemBadge />}
        </div>
      </div>
      {/* Default Product Content */}
      <div className="single-product-content">
        <ProductRating rating={rating} />
        <Link href={`/shop/products/${id}`}>
          <h2 className="single-product-title">{name}</h2>
        </Link>
        <p className="single-product-price">
          <span className="text-secondary font-semibold">
            ${price.toFixed(2)}
          </span>
          {oldPrice > 0 && (
            <span className="single-product-old-price">
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