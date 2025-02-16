import "./navbar.css"
import TopNavbar from './TopNavbar';
import BottomNavbar from "./BottomNavbar";
import StickyNavbar from "./StickyNavbar";

const Navbar = () => {
    return (
      <div>
        <TopNavbar />
        <BottomNavbar navItems={navItems} />
        <StickyNavbar navItems={navItems} />
      </div>
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
    path: "/about",
  },
  {
    title: "SERVICES",
    path: "/services",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "CONTACT US",
    path: "/contact",
  },
];
