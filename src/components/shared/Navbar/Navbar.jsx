import BottomNavbar from "./BottomNavbar";
import "./navbar.css";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  return (
    <div>
      {/* Top Navbar */}
      <TopNavbar />
      {/* Bottom Navbar */}
      <BottomNavbar navItems={navItems} />
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
    title: "Products",
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
