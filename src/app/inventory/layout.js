import SidebarMenu from "@/components/inventory/SidebarMenu";
import "./inventory.css"
import InventoryNavbar from "@/components/shared/navbar/InventoryNavbar";

const DashboardLayout = ({children}) => {
  return (
    <>
      <InventoryNavbar/>
      <div className="inventory-container inventory-layout">
        <SidebarMenu/>
        <div className="grid-cols-3">
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;