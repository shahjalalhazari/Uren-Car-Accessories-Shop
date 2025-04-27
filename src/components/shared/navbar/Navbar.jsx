import BottomNavbar from "./BottomNavbar";
import "./navbar.css";
import StickyNavbar from "./StickyNavbar";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
  const user = true;
  const isStaff = true;

  return (
    <>
      <TopNavbar
        navItems={navItems}
        categories={categories}
        isUser={user}
        isStaff={isStaff}
      />
      <BottomNavbar
        navItems={navItems}
        categories={categories}
        isUser={user}
        isStaff={isStaff}
      />
      <StickyNavbar navItems={navItems} isUser={user} isStaff={isStaff} />
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

const categories = [
  {
    name: "Games & Consoles",
  },
  {
    name: "Appliances",
  },
  {
    name: "Audio",
  },
  {
    name: "Brake ware",
  },
  {
    name: "Body Parts",
  },
  {
    name: "Cameras & Cam coders",
  },
  {
    name: "Car Parts",
  },
  {
    name: "Cookies & Crackers",
  },
  {
    name: "Interior",
  },
  {
    name: "Brakes & Rotors",
  },
  {
    name: "Lighting",
  },
  {
    name: "Performance",
  },
  {
    name: "Wheels & Tires",
  },
];
