import "./navbar.css"
import TopNavbar from './TopNavbar';

const Navbar = () => {
  return (
    <>
      <TopNavbar/>
      <h1>Navbar Bottom Part</h1>
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