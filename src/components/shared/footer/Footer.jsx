import React from 'react';
import FooterTopPart from './FooterTopPart';
import FooterBottomPart from './FooterBottomPart';

const Footer = () => {
  return (
    <div className="uren-footer">
      <FooterTopPart
        infoNavItems={infoItems}
        CSNavItems={customerServiceItems}
        extraNavItems={extraItems}
        myAccountNavItems={myAccountItems}
        inventoryNavItems={inventoryItems}
      />
      <FooterBottomPart />
    </div>
  );
};

export default Footer;

const infoItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Products",
    path: "/shop/products",
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blogs",
  },
];

const customerServiceItems = [
  {
    id: 1,
    title: "Contact Us",
    path: "/contact-us",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
  },
  {
    id: 3,
    title: "Return Policy",
    path: "/return-policy",
  },
  {
    id: 4,
    title: "Shop Locations",
    path: "/locations",
  },
];

const extraItems = [
  {
    id: 1,
    title: "Delivery Information",
    path: "/delivery-info",
  },
  {
    id: 2,
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    id: 3,
    title: "Terms & Conditions",
    path: "/t&c",
  },
  {
    id: 4,
    title: "FAQ",
    path: "/faq",
  },
];

const myAccountItems = [
  {
    id: 1,
    title: "My Profile",
    path: "/user/profile",
  },
  {
    id: 3,
    title: "Order Cart",
    path: "/shop/cart",
  },
  {
    id: 4,
    title: "Order History",
    path: "/user/profile",
  },
  {
    id: 5,
    title: "Wish List",
    path: "/shop/wishlist",
  },
];

const inventoryItems = [
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
  {
    id: 5,
    title: "Orders",
    path: "/inventory/orders",
  },
  {
    id: 6,
    title: "Sells",
    path: "/inventory/sells",
  },
  {
    id: 7,
    title: "Categories",
    path: "/inventory/categories",
  },
  {
    id: 8,
    title: "Brands & Models",
    path: "/inventory/brands",
  },
  {
    id: 9,
    title: "Tags",
    path: "/inventory/tags",
  },
];
