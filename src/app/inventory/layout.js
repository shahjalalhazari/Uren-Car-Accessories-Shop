import SidebarMenu from "@/components/inventory/SidebarMenu";
import "./inventory.css"
import InventoryNavbar from "@/components/shared/navbar/InventoryNavbar";

const DashboardLayout = ({children}) => {
  return (
    <div>
      <InventoryNavbar/>
      <SidebarMenu/>
      {children}
    </div>
  );
};

export default DashboardLayout;