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
    title: "About Us",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];