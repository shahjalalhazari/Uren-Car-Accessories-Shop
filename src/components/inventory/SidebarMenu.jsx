import React from 'react';

const SidebarMenu = () => {
    return (
      <ul className="flex flex-col gap-y-4 bg-gray-bg">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
};

export default SidebarMenu;

const menuItems = [
  "Home",
  "Shop",
  "About",
  "Contact",
  "Blog",
  "Categories",
  "Support",
  "FAQ",
  "Login",
];
