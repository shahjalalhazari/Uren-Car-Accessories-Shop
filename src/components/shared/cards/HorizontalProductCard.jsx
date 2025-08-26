import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProductRating from '../ProductRating';
import { calculatePrice } from '@/utils/priceCalculator';
import OfferBadge from '../badges/OfferBadge';

const HorizontalProductCard = ({ product }) => {

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  // CALCULATE THE PRICE
  const priceData = calculatePrice(product.price, product.discountPercentage);

  return (
    <div className="horizontal-product-card">
      <Link href={`/shop/products/${product.id}`}>
        <Image
          src={product.thumbnail}
          width={"100"}
          height={"100"}
          alt={product.title}
          className="w-full h-auto"
        />
      </Link>
      <div className="col-span-2">
        <ProductRating rating={product.rating} />
        <Link href={`/shop/products/${product.id}`}>
          <h3 className="product-name">{truncateText(product.title, 40)}</h3>
        </Link>
        {/* PRODUCT PRICE */}
        <h2 className="flex gap-x-2 items-baseline">
          <p className="new-price">
            AED {priceData.discountedPrice.toFixed(2)}
          </p>
          <p className="old-price">{priceData.originalPrice.toFixed(2)}</p>
        </h2>
      </div>
    </div>
  );
};

export default HorizontalProductCard;