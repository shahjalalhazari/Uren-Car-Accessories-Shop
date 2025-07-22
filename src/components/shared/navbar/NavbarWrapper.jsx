"use client";
import { useSession } from 'next-auth/react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import StickyNavbar from './StickyNavbar';


const NavbarWrapper = ({categories}) => {
  const session = useSession();

  return (
    <>
      <TopNavbar navItems={navItems} isUser={session} />
      <BottomNavbar
        navItems={navItems}
        categories={categories}
        isUser={session}
      />
      <StickyNavbar navItems={navItems} isUser={session} />
    </>
  );
};

export default NavbarWrapper;

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