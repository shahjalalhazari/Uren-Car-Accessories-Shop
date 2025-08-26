import PrimaryBtn from "@/components/shared/buttons/PrimaryBtn";


const BigOfferBanners = () => {
  return (
    <div className="big-banner-container">
      <div className="big-single-banner">
        <div
          className="big-single-banner-content"
          style={{
            backgroundImage: `url(/images/banner/1.jpg)`,
          }}
        >
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
          {/* TODO: REPLACE */}
          <PrimaryBtn text={"SHOP NOW"} path={"/"} />
        </div>
      </div>
      <div className="big-single-banner">
        <div
          className="big-single-banner-content"
          style={{
            backgroundImage: `url(/images/banner/2.jpg)`,
          }}
        >
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
          {/* TODO: REPLACE */}
          <PrimaryBtn text={"SHOP NOW"} path={"/"} />
        </div>
      </div>
    </div>
  );
};

export default BigOfferBanners;