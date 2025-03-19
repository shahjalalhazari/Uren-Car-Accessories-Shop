import Link from 'next/link';

const ShopNowBtn = ({path, text}) => {
  return (
    <button className="shop-now-btn">
      <Link href={path}>{text}</Link>
    </button>
  );
};

export default ShopNowBtn;