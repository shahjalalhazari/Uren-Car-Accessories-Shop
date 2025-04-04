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
                {/* row 5 */}
                <tr className='product-list uppercase'>
                  <th>Coupon</th>
                  <th>45.00</th>
                </tr>
                {/* row 6 */}
                <tr className='table-total'>
                  <th>Total</th>
                  <th>405.00</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BILLING ADDRESS */}
        <div className="">
          Billing Details
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;