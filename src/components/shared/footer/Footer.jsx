import React from 'react';
import TopFooter from './TopFooter';
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <div className="bg-[#222]">
      <TopFooter FooterNavItems={FooterNavItems} />
      <BottomFooter />
    </div>
  );
};

export default Footer;


// Footer Nav Items List
const FooterNavItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/shop/products",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];