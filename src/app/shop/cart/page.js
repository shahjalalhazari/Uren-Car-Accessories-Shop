import Image from "next/image";
import "./cart.css"
import PageBreadcrumb from '@/components/shared/PageBreadcrumb';
import QuantitySelector from "@/components/shop/product-details/QuantitySelector";
import { BiSolidTrash } from "react-icons/bi";
import SecondaryBtn from "@/components/shared/buttons/SecondaryBtn";

const CartPage = () => {
  return (
    <div className=''>
      <PageBreadcrumb breadcrumbLink={"Cart"} breadcrumbTitle={"Order Cart"}/>
          
      <div className="uren-container">
        <div className="overflow-x-auto">
          <table className="table text-body text-sm">
            {/* head */}
            <thead className='table-head text-base'>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th className="leading-tight">Unit Price <br /><span className="text-xs opacity-70">AED</span></th>
                <th>Quantity</th>
                <th className="leading-tight">Total <br /><span className="text-xs opacity-70">AED</span></th>
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
                <td  className="max-w-[200px] hover:text-primary uren-transition cursor-pointer">
                  {item.name}
                </td>
                <td>{(item.price).toFixed(2)}</td>
                <td><QuantitySelector max={20} min={item.quantity} /></td>
                <td>
                  {(item.price * item.quantity).toFixed(2)}
                </td>
                <td>
                  <button className="text-xl hover:text-primary uren-transition"><BiSolidTrash /></button>
                </td>
              </tr>
              ))}
              
            </tbody>
          </table>
        </div>

        {/* CART BOTTOM PART */}
        <div className="flex mt-6 lg:mt-8">
          {/* DISCOUNT COUPON */}
          <form className="flex gap-x-2 ">
            <input type="text" placeholder="Coupon Code" className="text-sm text-body px-4 py-3 outline-none border border-uren-border"/>
            <button type="submit" className="text-base-100 font-bold bg-body px-8 py-3 text-sm uren-transition hover:bg-primary">APPLY COUPON</button>
          </form>
          
          {/* CART CALCULATION */}
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