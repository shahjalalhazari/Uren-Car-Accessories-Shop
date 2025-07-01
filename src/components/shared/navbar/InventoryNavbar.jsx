"use client";
import { useSession } from "next-auth/react";
import TopNavbar from "./TopNavbar";
import "./navbar.css";

const InventoryNavbar = () => {
  const session = useSession();

  return (
    <div>
      <TopNavbar navItems={navItems} isUser={session} />
    </div>
  );
};

export default InventoryNavbar;

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
