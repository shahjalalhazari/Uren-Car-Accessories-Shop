
import FooterBottomPart from './FooterBottomPart';
import FooterTopPart from './FooterTopPart';

const Footer = () => {
  return (
    <div className="uren-footer">
      <FooterTopPart navItems={FooterNavItems} />
      <FooterBottomPart/>
    </div>
  );
};

export default Footer;

const FooterNavItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/shop/products",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
];