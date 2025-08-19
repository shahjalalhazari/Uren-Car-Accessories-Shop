import BottomPart from "./bottomPart/BottomPart";
import "./navbar.css";
import StickyNavbar from "./StickyNavbar";
import TopPart from "./topPart/TopPart";

const Navbar = () => {
  return (
    <>
      {/* TOP PART */}
      <TopPart navItems={navItems} />

      {/* BOTTOM PART */}
      <BottomPart navItems={navItems} />

      {/* STICKY NAVBAR */}
      <StickyNavbar navItems={navItems} />
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
