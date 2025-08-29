import PrimaryBtn from '@/components/shared/buttons/PrimaryBtn';
import SectionHeading from '@/components/shared/headings/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopByBrands = () => {
  return (
    <div className="uren-container text-center">
      <SectionHeading
        heading="Shop By Brands"
        subHeading="Top Quality Partner"
      />

      {/* Brands Lists */}
      <div className="shop-by-brands-layout">
        {brandsList.slice(0, 6)?.map((brand, index) => (
          // REPLACE
          <Link
            href={`/shop/products?brand=${encodeURIComponent(brand.name)}`}
            key={index}
          >
            <Image
              src={brand.image}
              width={175}
              height={150}
              alt={brand.name}
              className="shop-by-brands-item"
            />
          </Link>
        ))}
      </div>

      <PrimaryBtn text={"See More"} path={"/shop/products"} />
    </div>
  );
};

export default ShopByBrands;

const brandsList = [
  {
    id: 1,
    name: "Brand Name 1",
    price: 120,
    image: "/images/brand/1.jpg",
  },
  {
    id: 2,
    name: "Brand Name 2",
    price: 120,
    image: "/images/brand/2.jpg",
  },
  {
    id: 3,
    name: "Brand Name 3",
    price: 120,
    image: "/images/brand/3.jpg",
  },
  {
    id: 4,
    name: "Brand Name 4",
    price: 120,
    image: "/images/brand/4.jpg",
  },
  {
    id: 5,
    name: "Brand Name 5",
    price: 120,
    image: "/images/brand/5.jpg",
  },
  {
    id: 6,
    name: "Brand Name 6",
    price: 120,
    image: "/images/brand/6.jpg",
  },
];