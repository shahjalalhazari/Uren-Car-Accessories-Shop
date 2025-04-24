import InputField from "@/components/shared/fields/InputField";
import "./checkout.css"
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import CheckoutAccordion from "@/components/shop/checkout/CheckoutAccordion";

const CheckoutPage = () => {

  return (
    <div>
      <PageBreadcrumb breadcrumbLink={"Checkout"} breadcrumbTitle={"Checkout"} />
      
      <div className="uren-container">
      {/* Accordion Section */}
        <CheckoutAccordion />
        
        {/* Main Section */}
        <div className="checkout-layout">
          {/* ORDER CART */}
          <div className="order-cart">
            <h3 className='checkout-heading'>Your order</h3>
            <hr />
            <div className="overflow-x-auto mt-5 lg:mt-8">
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
            
            <div className="payment-method">
              <h3 className='checkout-heading'>how you want pay?</h3>
              <hr />
              <form className="pm-form">
                <div className="pm-form-input">
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    value="card"
                  />
                  <label htmlFor="card">Pay with Card</label>
                </div>

                <div className="pm-form-input">
                  <input
                    type="radio"
                    id="paypal"
                    name="payment"
                    value="paypal"
                  />
                  <label htmlFor="paypal">PayPal</label>
                </div>

                <div className="pm-form-input">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    value="cod"
                  />
                  <label htmlFor="cod">Cash On Delivery</label>
                </div>
              </form>
            </div>
          </div>

          {/* DELIVERY ADDRESS */}
          <div className="delivery-address">
            <h3 className='checkout-heading'>Delivery Address</h3>
            <hr />
            <form className="delivery-form">
              <div className="form-input-layout">
                {/* Full Name Field */}
                <InputField name={"name"} label={"Full Name"} type={"text"} required={true} placeholder={"Your Full Name"}/>

                {/* Mobile Number Field */}
                <InputField name={"number"} label={"Mobile Number"} type={"text"} required={true} placeholder={"Phone Number"}/>
              </div>

              {/* Address */}
                <InputField name={"address"} label={"Address"} type={"text"} required={true} placeholder={"Area, Street Name"}/>

              <div className="form-input-layout">
                {/* Apartment */}
                <InputField name={"apartment"} label={"Apartment"} type={"text"} required={false} placeholder={"Building, Apartment (Optional)"}/>

                {/* Town/City */}
                <InputField name={"city"} label={"Town / City"} type={"text"} required={true} placeholder={"Town / City Name"}/>
              </div>
              
              <div className="form-input-layout">
                {/* State */}
                <InputField name={"state"} label={"State"} type={"text"} required={true} placeholder={"State / District"}/>

                {/* Country */}
                <InputField name={"country"} label={"Country"} type={"text"} required={true} placeholder={"Your Country"}/>
              </div>

              {/* Save Address */}
              <div className="flex gap-x-2 items-center">
                <input
                  type="checkbox"
                  name="save-address-data"
                  id="save-address-data"
                  className="save-form-data uren-transition" />
                <label htmlFor="save-address-data" className="save-form-data-label">Save For Again</label>
              </div>
              
              {/* Submit Button */}
              <div className="md:w-1/2 md:mx-auto">
                <input type="submit" value="Place An Order" className="submit-btn uren-transition" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;