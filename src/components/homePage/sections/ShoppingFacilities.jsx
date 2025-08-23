import { BiHelpCircle, BiLockAlt, BiPaperPlane, BiRefresh, BiShare } from "react-icons/bi";


const ShoppingFacilities = () => {
  return (
    <div className="shopping-facilities uren-container">
      <div className="facility-item">
        <div className="item-icon">
          <BiPaperPlane />
        </div>
        <div className="item-content">
          <h6>Free Shipping</h6>
          <p>Free shipping on all over UAE</p>
        </div>
      </div>
      <div className="facility-item">
        <div className="item-icon">
          <BiHelpCircle />
        </div>
        <div className="item-content">
          <h6>Support 24/7</h6>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
      <div className="facility-item">
        <div className="item-icon">
          <BiRefresh />
        </div>
        <div className="item-content">
          <h6>100% Money Back</h6>
          <p>You have 30 days to Return</p>
        </div>
      </div>
      <div className="facility-item">
        <div className="item-icon">
          <BiShare />
        </div>
        <div className="item-content">
          <h6>7 Days Return</h6>
          <p>If goods have problems</p>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="facility-item">
          <div className="item-icon">
            <BiLockAlt />
          </div>
          <div className="item-content">
            <h6>Payment Secure</h6>
            <p>We ensure secure payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingFacilities;