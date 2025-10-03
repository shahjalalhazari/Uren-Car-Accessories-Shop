"use client"
import ProductRating from '@/components/shared/ProductRating';
import { calculatePrice } from '@/utils/priceCalculator';
import Link from 'next/link';
import QuantitySelector from './QuantitySelector';
import AddToCartBtn from '@/components/shared/buttons/AddToCartBtn';
import OutlineBtn from '@/components/shared/buttons/OutlineBtn';
import { BiHeart } from 'react-icons/bi';
import { useCategory } from '@/context/CategoryContext';
import { useEffect, useState } from 'react';
import UrenLoading from '@/components/shared/UrenLoading';
import { useRouter } from 'next/navigation';

const DetailsContent = ({productDetails}) => {
  const { selectCategory, getCategoryUrl, handleCategorySelect} = useCategory();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  },[])

  console.log(productDetails);
  const {
    title,
    price,
    discountPercentage,
    rating,
    category,
    brand,
    sku,
    stock,
    minimumOrderQuantity,
    returnPolicy, 
    shippingInformation, 
    warrantyInformation, 
    weight,
    dimensions,
    availabilityStatus,
    tags,
  } = productDetails;
  const priceData = calculatePrice(price, discountPercentage);

  const handleCategoryClick = (e) => {
    e.preventDefault();
    handleCategorySelect(category);
    router.push(getCategoryUrl(category));
  };

  if (!isClient) {
    return <UrenLoading/>;
  }

  return (
    <div className="details-content">
      {/* TITLE */}
      <h3 className='product-title'>{title}</h3>
      {/* 
        PRICES: IF PRODUCT HAS DISCOUNT PERCENTAGE THEN SHOW DISCOUNTED PRICE AND ORIGINAL PRICE,
        ELSE SHOW ONLY ORIGINAL PRICE. 
      */}
      <div>
        {priceData.hasDiscount ? (
          // DISCOUNTED PRICE & ORIGINAL PRICE WITH DISCOUNT PERCENTAGE.
          <div className='price-box'>
            <span className='current-price'>AED {priceData.discountedPrice.toFixed(2)}</span>
            <span className='original-price'>{priceData.originalPrice.toFixed(2)}</span>
            <span className='discount-percentage'>({discountPercentage}% OFF)</span>
          </div>
        ) : (
          // ONLY ORIGINAL PRICE.
          <div className='price-box'>
            <span className='current-price'>AED {priceData.originalPrice.toFixed(2)}</span>
          </div>
        )}
      </div>

      {/* PRODUCT RATING */}
      <ProductRating rating={rating} text={"base"} />

      {/*  */}
      <ul className="details-list">
        <li>
          <span>Category:</span>
          <Link 
            href={getCategoryUrl(category)}
            onClick={handleCategoryClick}
            passHref
            className={selectCategory === category ? 'text-blue font-medium' : ''}
          >
            {category}
          </Link>
        </li>
        <li>
          <span>Brand:</span>
          <Link href={`/shop/products?brand=${brand}`}>{brand}</Link>
        </li>
        <li>
          <span>Item Code:</span>{sku}
        </li>
        <li>
          <span>Weight:</span>{weight * 1000}g
        </li>
        <li>
          <span>Return Policy:</span>{returnPolicy}
        </li>
        <li>
          <span>Shipping Info:</span>{shippingInformation}
        </li>
        <li>
          <span>Warranty Info:</span>{warrantyInformation}
        </li>
        <li>
          <span>Availability:</span>{availabilityStatus}
        </li>
        <li>
          <span>Dimensions (cm):</span>
          <ul>
            <li>Depth: {dimensions.depth}</li>
            <li>height: {dimensions.height}</li>
            <li>Width: {dimensions.width}</li>
          </ul>
        </li>
      </ul>

      {/* ORDER QUANTITY SELECTOR */}
      <QuantitySelector max={stock} min={minimumOrderQuantity}/>

      {/* BUTTONS */}
      <div className="button-group">
        {/* ADD TO CART BUTTON */}
        <AddToCartBtn href={"/"} />
        {/* ADD TO WISHLIST BUTTON */}
        <OutlineBtn btnIcon={<BiHeart />} btnTitle={"Add To Wishlist"} />
      </div>

      {/* TAGS */}
      <div className="product-tags">
        <h6 className="product-tags-heading">Tags:</h6>
        {tags?.map((tag, index) =>
          <Link 
          href={"/"} key={index} 
          className="product-tag uren-transition"
          >
            {tag}{index < tags.length - 1 ? ',' : ''}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailsContent;