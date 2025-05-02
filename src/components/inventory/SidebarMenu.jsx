"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaChartBar,
  FaShoppingCart,
  FaUsers,
  FaDollarSign,
  FaRegPlusSquare,
  FaBox,
  FaTags,
  FaDiceD6,
} from "react-icons/fa";
import { TbBrandCake } from "react-icons/tb";

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
            {item.icon}
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
    icon: <FaChartBar />,
  },
  {
    id: 2,
    title: "Add Products",
    path: "/inventory/add-products",
    icon: <FaRegPlusSquare />,
  },
  {
    id: 3,
    title: "Manage Products",
    path: "/inventory/manage-products",
    icon: <FaShoppingCart />,
  },
  {
    id: 4,
    title: "Manage Users",
    path: "/inventory/manage-users",
    icon: <FaUsers />,
  },
  {
    id: 5,
    title: "Orders",
    path: "/inventory/orders",
    icon: <FaBox />,
  },
  {
    id: 6,
    title: "Sells",
    path: "/inventory/sells",
    icon: <FaDollarSign />,
  },
  {
    id: 7,
    title: "Categories",
    path: "/inventory/categories",
    icon: <FaDiceD6 />,
  },
  {
    id: 8,
    title: "Brands",
    path: "/inventory/brands",
    icon: <TbBrandCake />,
  },
  {
    id: 9,
    title: "Tags",
    path: "/inventory/tags",
    icon: <FaTags />,
  },
];
