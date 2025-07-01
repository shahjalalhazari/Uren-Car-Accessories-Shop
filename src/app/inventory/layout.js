import SidebarMenu from "@/components/inventory/SidebarMenu";
import "./inventory.css"
import InventoryNavbar from "@/components/shared/navbar/InventoryNavbar";
import AuthProviders from "@/providers/AuthProviders";

const DashboardLayout = ({children}) => {
  return (
    <AuthProviders>
      <InventoryNavbar/>
      <div className="inventory-container inventory-layout">
        <SidebarMenu/>
        <div className="md:col-span-2 lg:col-span-3">
          {children}
        </div>
      </div>
    </AuthProviders>
  );
};

export default DashboardLayout;