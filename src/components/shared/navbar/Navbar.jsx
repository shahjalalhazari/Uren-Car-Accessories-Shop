import "./navbar.css"
import TopNavbar from './TopNavbar';
import BottomNavbar from "./BottomNavbar";
import StickyNavbar from "./StickyNavbar";
import MobileScreenNavbar from "./MobileScreenNavbar";

const Navbar = () => {
  return (
    <div>
      {/* These nav styles are for large screen */}
      <TopNavbar navItems={navItems} categories={categories} />
      <BottomNavbar navItems={navItems} categories={categories} />
      {/* <StickyNavbar navItems={navItems} /> */}

      {/* For Mobile or small screen */}
      {/* <MobileScreenNavbar navItems={navItems} categories={categories} /> */}
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

const categories = [
  {
    title: "Tires",
    path: "/",
  },
  {
    title: "Spare Parts",
    path: "/",
  },
  {
    title: "Bumpers",
    path: "/",
  },
  {
    title: "Lights",
    path: "/",
  },
  {
    title: "Suspensions",
    path: "/",
  },
];