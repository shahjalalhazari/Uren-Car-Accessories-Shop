import "./navbar.css";
import TopPart from './topPart/TopPart';

const Navbar = () => {
  return (
    <>
      <TopPart navItems={navItems} />
    </>
  );
};

export default Navbar;


const navItems = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "PRODUCTS",
    path: "/shop/products",
  },
  {
    title: "ABOUT US",
    path: "/about-us",
  },
  {
    title: "SERVICES",
    path: "/services",
  },
  {
    title: "BLOGS",
    path: "/blogs",
  },
  {
    title: "CONTACT US",
    path: "/contact-us",
  },
];