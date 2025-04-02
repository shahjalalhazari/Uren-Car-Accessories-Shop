import Image from "next/image";
import "./cart.css"
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import QuantitySelector from "@/components/shop/product-details/QuantitySelector";
import { BiSolidTrash } from "react-icons/bi";
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className=''>
      <PageBreadcrumb breadcrumbLink={"Cart"} breadcrumbTitle={"Order Cart"}/>
          
      <div className="uren-container">
        <div className="overflow-x-auto">
          <table className="table cart-table">
            {/* head */}
            <thead className='table-head text-base'>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th className="leading-tight">Unit Price <br /><span className="cart-currency">AED</span></th>
                <th>Quantity</th>
                <th className="leading-tight">Total <br /><span className="cart-currency">AED</span></th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {/* row 1 */}

              {cartItemList.map((item, index) => (
                <tr className="" key={index}>
                <td>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={"96"}
                    height={"96"}
                    className="w-32 mx-auto"
                  />
                </td>
                <td  className="uren-transition table-product-title">
                  {item.name}
                </td>
                <td>{(item.price).toFixed(2)}</td>
                <td><QuantitySelector max={20} min={item.quantity} /></td>
                <td>
                  {(item.price * item.quantity).toFixed(2)}
                </td>
                <td>
                  <button className="uren-transition table-product-remove"><BiSolidTrash /></button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>

        {/* CART BOTTOM PART */}
        <div className="cart-btm-layout">
          {/* DISCOUNT COUPON */}
          <form className="coupon-code-form">
            <input type="text" placeholder="Coupon Code" className="coupon-input"/>
            <button type="submit" className="uren-transition coupon-form-btn">APPLY COUPON</button>
          </form>
          
          {/* CART CALCULATION */}
          <div className="cart-total">
            <h5>Cart Totals</h5>
            <div className="cart-total-table">
              <p><span>Sub Total:</span> <span>AED 150.00</span></p>
              <p><span>Coupon:</span> <span>- AED 0.00</span></p>
              <p className="text-dark"><span>Total:</span> <span>AED 150.00</span></p>
            </div>
            <Link href={"shop/checkout"}>
              <SecondaryBtn text={"PROCEED TO CHECKOUT"} />
            </Link>
            {/* <button type="submit" className="text-base-100 font-bold bg-body px-6 py-3 text-sm uren-transition hover:bg-primary">PROCEED TO CHECKOUT</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


const cartItemList = [
  {id: 1,
    name: "Oil Filter",
    price: 89.99,
    image: "/images/product/medium-size/1.png",
    quantity : 1
  },
  {id: 2,
    name: "Brake Pads",
    price: 750.0,
    image: "/images/product/medium-size/2.png",
    quantity : 8
  },
  {id: 3,
    name: "Head Light",
    price: 89.99,
    image: "/images/product/medium-size/3.png",
    quantity : 2
  },
  {id: 4,
    name: "Alternator",
    price: 250.5,
    image: "/images/product/medium-size/4.png",
    quantity : 2
  },
];