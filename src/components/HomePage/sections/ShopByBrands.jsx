import PrimaryBtn from '@/components/shared/buttons/PrimaryBtn';
import SectionHeading from '@/components/shared/SectionHeading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ShopByBrands = () => {
    return (
      <div className="mx-8 py-0 my-20 text-center">
        <SectionHeading
          heading="Shop By Brands"
          subHeading="Top Quality Partner"
        />

        {/* Brands Lists */}
        <div className="grid grid-cols-6 w-full mt-8 mb-12 border-y border-l border-[#999]">
          {[...Array(6)].map((brand, index) => (
            // REPLACE
            <Link href={"/"} key={index}>
              <Image
                src={`/images/brand/${index + 1}.jpg`}
                width={175}
                height={150}
                alt="Brand 1"
                className="py-5 px-10 w-full border-r  border-[#999]"
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