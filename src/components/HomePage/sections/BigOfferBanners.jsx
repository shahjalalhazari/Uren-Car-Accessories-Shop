import ShopNowBtn from '@/components/shared/buttons/ShopNowBtn';
import Image from 'next/image';
import React from 'react';

const BigOfferBanners = () => {
    return (
      <div className="px-8 pb-20 bg-[#eee]">
        <div className="big-banner-container">
          <div className="big-single-banner">
            <Image
              src={"/images/banner/1.jpg"}
              width={"1000"}
              height={"850"}
              alt="Offer banner 1"
              className="cursor-pointer"
            />
            <div className="big-single-banner-content">
              <h5>Get 20% off your order</h5>
              <h4>
                Car and Truck <br />
                <span className="font-bold">Mercedes Benz</span>
              </h4>
              <div></div>
              <p>
                Explore and immerse in exciting 360 content with Fulldive’s
                all-in-one virtual reality platform
              </p>
              {/* REPLACE */}
              <ShopNowBtn text={"SHOP NOW"} path={"/"} />
            </div>
          </div>
          <div className="big-single-banner">
            <Image
              src={"/images/banner/2.jpg"}
              width={"1000"}
              height={"850"}
              alt="Offer banner 2"
              className="cursor-pointer"
            />
            <div className="big-single-banner-content">
              <h5>Save $120 when you buy</h5>
              <h4>
                Rotiform SFO <br />
                <span className="font-bold">Custom Forged</span>
              </h4>
              <div></div>
              <p>
                Explore and immerse in exciting 360 content with Fulldive’s
                all-in-one virtual reality platform
              </p>
              {/* REPLACE */}
              <ShopNowBtn text={"SHOP NOW"} path={"/"} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default BigOfferBanners;