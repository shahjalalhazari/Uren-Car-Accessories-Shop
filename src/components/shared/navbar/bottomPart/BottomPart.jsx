import { getCategories } from '@/lib/getCategories';
import SmBtmNav from './SmBtmNav';
import MdBtmNav from "./MdBtmNav";
import LgBtmNav from "./LgBtmNav";

const BottomPart = async ({ navItems }) => {
  const categories = await getCategories();

  return (
    <div className="navbar-bottom-part">
      {/* SMALL SCREEN SIZE*/}
      <SmBtmNav categories={categories} />

      {/* MEDIUM SCREEN SIZE */}
      <MdBtmNav categories={categories} />

      {/* LARGE SCREEN SIZE */}
      <LgBtmNav navItems={navItems} categories={categories} />
    </div>
  );
};

export default BottomPart;