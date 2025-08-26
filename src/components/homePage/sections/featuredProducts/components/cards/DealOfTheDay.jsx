import CardTitle from '../CardTitle';
import Link from 'next/link';
import Image from 'next/image';
import OfferBadge from '@/components/shared/badges/OfferBadge';
import NewItemBadge from '@/components/shared/badges/NewItemBadge';
import CountDownTimer from '../CountDownTimer';
import ProductRating from '@/components/shared/ProductRating';
import AddToCartBtn from '@/components/shared/buttons/AddToCartBtn';
import OutlineBtn from '@/components/shared/buttons/OutlineBtn';
import { BiHeart, BiShoppingBag } from 'react-icons/bi';

const DealOfTheDay = () => {
  return (
    <div className="card-container">
      {/* CARD HEADING */}
      <CardTitle
        heading={"Deal Of The Day"}
        subHeading={"Special Offer Limited Time"}
      />
      {/* PRODUCT IMAGE */}
      <div className="relative">
        {/* TODO: REPLACE */}
        <Link href="/">
          <Image
            src="/images/product/large-size/1.jpg"
            alt="Shoes"
            width={220}
            height={220}
            className="mx-auto m-0 p-0"
          />
        </Link>

        {/* BADGES */}
        <div className="absolute top-5 left-0 space-y-2 text-center">
          <OfferBadge discountOf={33} />
          <NewItemBadge />
        </div>
      </div>

      {/* COUNTDOWN TIMER */}
      <p className="text-secondary mb-2.5 text-sm">Hurry up! Offer ends in:</p>
      <CountDownTimer targetDate="2025-12-31T23:59:59" />

      {/* PRODUCT CONTENT */}
      <div className="mt-4 deal-of-the-day">
        {/* PRODUCT DETAILS */}
        {/* TODO: REPLACE */}
        <Link href={"/"}>
          <h4 className="product-name">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
          </h4>
        </Link>
        <div className="flex gap-4 items-center mt-3">
          <h2 className="new-price">AED 89.00</h2>
          <h5 className="old-price">109.99</h5>
        </div>

        {/* PRODUCT RATING */}
        <ProductRating rating={3.5} />

        <div className="mt-4 flex justify-between">
          {/* ADD TO CART BUTTON */}
          {/* TODO: REPLACE */}
          <AddToCartBtn href={"/"} />

          {/* ADD TO WISHLIST BUTTON */}
          <OutlineBtn btnIcon={<BiHeart />} btnTitle={"Add To WishList"} />

          {/* QUICK VIEW BUTTON */}
          <OutlineBtn btnIcon={<BiShoppingBag />} btnTitle={"Quick View"} />
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;