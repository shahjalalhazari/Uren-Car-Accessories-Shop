import PrimaryBtn from '@/components/shared/buttons/PrimaryBtn';
import SectionHeading from '@/components/shared/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopByBrands = () => {
    return (
      <div className="shop-by-brands">
        <SectionHeading
          heading="Shop By Brands"
          subHeading="Top Quality Partner"
        />

        {/* Brands Lists */}
        <div className="shop-by-brands-layout">
          {[...Array(6)].map((brand, index) => (
            // REPLACE
            <Link href={"/"} key={index}>
              <Image
                src={`/images/brand/${index + 1}.jpg`}
                width={175}
                height={150}
                alt={`Brand ${index + 1}`}
                className="shop-by-brands-item"
              />
            </Link>
          ))}
        </div>
        {/* REPLACE */}
        <PrimaryBtn text={"See More"} path={"/"} />
      </div>
    );
};

export default ShopByBrands;