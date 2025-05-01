"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const SidebarMenu = () => {
  const pathname = usePathname();

  return (
    <ul className="sidebar-menu">
      {menuItems.map((item) => (
        <Link href={item.path} key={item.id}>
          <li
            className={`uren-transition sidebar-menu-item ${
              pathname === item.path && "active-menu-item"
            }`}
          >
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default SidebarMenu;

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/inventory",
  },
  {
    id: 2,
    title: "Add Products",
    path: "/inventory/add-products",
  },
  {
    id: 3,
    title: "Manage Products",
    path: "/inventory/manage-products",
  },
  {
    id: 4,
    title: "Manage Users",
    path: "/inventory/manage-users",
  },
];
