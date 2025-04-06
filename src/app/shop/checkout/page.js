import "./checkout.css"
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';

const CheckoutPage = () => {

  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Checkout"} breadcrumbTitle={"Checkout"} />
      
      <div className="uren-container checkout-layout">

        {/* ORDER CART */}
        <div className="order-cart">
          <h3 className='checkout-heading'>Your order</h3>
          <hr />
          <div className="overflow-x-auto mt-4 lg:mt-6">
            <table className="table">
              {/* head */}
              <thead className='table-head'>
                <tr>
                  <th>Product</th>
                  <th>Total <span className="text-xs">(AED)</span></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="product-list">
                  <td>Vestibulum suscipit × 1</td>
                  <td>150.00</td>
                </tr>
                {/* row 2 */}
                <tr className="product-list">
                  <td>Vestibulum suscipit × 5</td>
                  <td>150.00</td>
                </tr>
                {/* row 3 */}
                <tr className="product-list">
                  <td>Vestibulum suscipit × 7</td>
                  <td>150.00</td>
                </tr>

                {/* row 4 */}
                <tr className='product-list uppercase'>
                  <th>Cart Subtotal</th>
                  <th>450.00</th>
                </tr>
                {/* row 4 | Delivery Fee */}
                <tr className='product-list uppercase'>
                  <th>Delivery Cost (+)</th>
                  <th>10.00</th>
                </tr>
                {/* row 5 | Coupon */}
                <tr className='product-list uppercase'>
                  <th>Coupon (-)</th>
                  <th>45.00</th>
                </tr>
                {/* row 6 | Total */}
                <tr className='table-total'>
                  <th>Total</th>
                  <th>415.00</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DELIVERY ADDRESS */}
        <div className="delivery-address">
          <h3 className='checkout-heading'>Delivery Address</h3>
          <hr />
          <form className="delivery-form">
            <div className="form-input-layout">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="name" className="delivery-form-label">Full Name <span>*</span></label>
                <input type="text" name="name" required className="delivery-form-input"/>
              </div>
              {/* Mobile Number */}
              <div className="form-group">
                <label htmlFor="number" className="delivery-form-label">Mobile Number <span>*</span></label>
                <input type="text" name="number" required className="delivery-form-input"/>
              </div>
            </div>
            {/* Address */}
            <div className="form-group">
              <label htmlFor="address" className="delivery-form-label">Address <span>*</span></label>
              <input type="text" name="address" required placeholder="Street Name, Area" className="delivery-form-input"/>
            </div>
            <div className="form-input-layout">
              {/* Apartment */}
              <div className="form-group">
                <label htmlFor="apartment" className="delivery-form-label">Apartment</label>
                <input type="text" name="apartment" placeholder="optional" className="delivery-form-input"/>
              </div>
              {/* Town/City */}
              <div className="form-group">
                <label htmlFor="city" className="delivery-form-label">Town / City <span>*</span></label>
                <input type="text" name="city" required className="delivery-form-input"/>
              </div>
            </div>
            <div className="form-input-layout">
              {/* State */}
              <div className="form-group">
                <label htmlFor="state" className="delivery-form-label">State <span>*</span></label>
                <input type="text" name="state" required className="delivery-form-input"/>
              </div>
              {/* Country */}
              <div className="form-group">
                <label htmlFor="country" className="delivery-form-label">Country <span>*</span></label>
                <input type="text" name="country" required className="delivery-form-input"/>
              </div>
            </div>

            {/* Save Address */}
            <div className="form-group save-address">
              <input type="checkbox" />
              <label htmlFor="country" className="delivery-form-label">Save Address.</label>
            </div>
            
            {/* Submit Button */}
            <input type="submit" value="Place An Order" className="delivery-form-btn uren-transition" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;