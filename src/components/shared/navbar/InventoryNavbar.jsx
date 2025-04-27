import TopNavbar from "./TopNavbar";


const InventoryNavbar = () => {
  const isStaff = true;

  return (
    <div>
      <TopNavbar isStaff={isStaff} navItems={navItems} />
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