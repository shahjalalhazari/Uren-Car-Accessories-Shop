import BottomNavbar from "./BottomNavbar";
import "./navbar.css";
import StickyNavbar from "./StickyNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <header>
      {/* Top Navbar */}
      <TopNavbar />

      {/* Bottom Navbar */}
      <BottomNavbar navItems={navItems} />

      {/* Sticky Navbar */}
      <StickyNavbar navItems={navItems} />
    </header>
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
