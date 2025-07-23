import { getCategories } from "@/lib/getCategories";
import "./navbar.css";
import NavbarWrapper from "./NavbarWrapper";

export const dynamic = "force-dynamic";

const Navbar = async () => {
  const categories = await getCategories();

  return <NavbarWrapper categories={categories} />;
};

export default Navbar;
