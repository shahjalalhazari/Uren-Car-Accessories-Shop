import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProductRating from '../ProductRating';

const FeaturedSingleProductCard = () => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };
    return (
      <div className="weekly-product-single-card">
        {/* REPLACE */}
        <Link href={"/"}>
          <Image
            src={`/images/product/small-size/3.jpg`}
            width={"120"}
            height={"120"}
            alt={`Product 1`}
            className="w-full h-auto"
          />
        </Link>
        <div className="col-span-2">
          <ProductRating rating={3.5} />
          {/* REPLACE */}
          <Link href={"/"}>
            <h3 className="weekly-product-name">
              {truncateText(
                "Veniam officiis volupt ates eveniet culpaqui saepe.",
                40
              )}
            </h3>
          </Link>
          <h2 className="weekly-product-price">$89.00</h2>
        </div>
      </div>
    );
};

export default FeaturedSingleProductCard;