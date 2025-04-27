import SlideAbleMenu from '@/components/inventory/SlideAbleMenu';
import "./inventory.css"

const DashboardLayout = ({children}) => {
    return (
        <div>
            Dashboard Layout
        <SlideAbleMenu/>
            {children}
        </div>
    );
};

export default DashboardLayout;