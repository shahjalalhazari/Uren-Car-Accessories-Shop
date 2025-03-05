import "./navbar.css"
import TopNavbar from './TopNavbar';
import BottomNavbar from "./BottomNavbar";
import StickyNavbar from "./StickyNavbar";
import MobileScreenNavbar from "./MobileScreenNavbar";

const Navbar = () => {
  return (
    <div>
      {/* These nav styles are for large screen */}
      <TopNavbar />
      <BottomNavbar navItems={navItems} />
      <StickyNavbar navItems={navItems} />

      {/* For Mobile or small screen */}
      <MobileScreenNavbar navItems={navItems} />
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
