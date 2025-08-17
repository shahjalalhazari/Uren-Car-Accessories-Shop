import { getCategories } from '@/lib/getCategories';
import SmBtmNav from './SmBtmNav';

const BottomPart = async({ navItems }) => {
  const categories = await getCategories();
  console.log("categories", categories);

  return (
    <div className='navbar-bottom-part'>
      <SmBtmNav categories={categories} />
    </div>
  );
};

export default BottomPart;