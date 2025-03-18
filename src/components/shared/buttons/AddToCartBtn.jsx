import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";

const AddToCartBtn = ({ href }) => {
  return (
    <Link href={href}>
      <button className="add-to-cart-btn">
        <BiShoppingBag /> Add To Cart
      </button>
    </Link>
  );
};

export default AddToCartBtn;
