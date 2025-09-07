import { getCategories } from '@/lib/getCategories';
import ResponsiveNavbar from './ResponsiveNavbar';

const BottomPart = async ({ navItems }) => {
  const categories = await getCategories();

  return (
    <div className="navbar-bottom-part">
      <ResponsiveNavbar 
        navItems={navItems} 
        categories={categories} 
      />
    </div>
  );
};

export default BottomPart;