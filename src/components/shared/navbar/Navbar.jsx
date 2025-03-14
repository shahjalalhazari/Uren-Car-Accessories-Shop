import "./navbar.css"
import TopNavbar from './TopNavbar';
import BottomNavbar from "./BottomNavbar";
import StickyNavbar from "./StickyNavbar";

const Navbar = () => {
  return (
    <div>
      {/* These nav styles are for large screen */}
      <TopNavbar navItems={navItems} categories={categories} />
      <BottomNavbar navItems={navItems} categories={categories} />
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
    path: "Games & Consoles",
    image: "",
    added: "",
  },
  {
    name: "Appliances",
    path: "Appliances",
    image: "",
    added: "",
  },
  {
    name: "Audio",
    path: "Audio",
    image: "",
    added: "",
  },
  {
    name: "Bakeware",
    path: "Bakeware",
    image: "",
    added: "",
  },
  {
    name: "Body Parts",
    path: "Body Parts",
    image: "",
    added: "",
  },
  {
    name: "Cameras & Camcoders",
    path: "Cameras & Camcoders",
    image: "",
    added: "",
  },
  {
    name: "Car Parts",
    path: "Car Parts",
    image: "",
    added: "",
  },
  {
    name: "Cookies & Crackers",
    path: "Cookies & Crackers",
    image: "",
    added: "",
  },
  {
    name: "Interior",
    path: "Interior",
    image: "",
    added: "",
  },
  {
    name: "Brakes & Rotors",
    path: "Brakes & Rotors",
    image: "",
    added: "",
  },
  {
    name: "Lighting",
    path: "Lighting",
    image: "",
    added: "",
  },
  {
    name: "Performance",
    path: "Performance",
    image: "",
    added: "",
  },
  {
    name: "Wheels & Tires",
    path: "Wheels & Tires",
    image: "",
    added: "",
  },
];