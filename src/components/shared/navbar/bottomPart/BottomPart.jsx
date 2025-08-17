import { getCategories } from '@/lib/getCategories';
import SmBtmNav from './SmBtmNav';
import MdBtmNav from "./MdBtmNav";

const BottomPart = async ({ navItems }) => {
  const categories = await getCategories();
  console.log("categories", categories);

  return (
    <div className="navbar-bottom-part">
      {/* SMALL SCREEN SIZE*/}
      <SmBtmNav categories={categories} />

      {/* MEDIUM SCREEN SIZE */}
      <MdBtmNav navItems={navItems} categories={categories} />
    </div>
  );
};

export default BottomPart;