import ScrollToTopBtn from '@/components/shared/buttons/ScrollToTopBtn';
import Navbar from '@/components/shared/navbar/Navbar';
import Newsletter from '@/components/shared/Newsletter';

const WithLayout = ({children}) => {
  return (
    <div>
      {/* Full Navbar */}
      <Navbar />

      {children}
      
      {/* Scroll To Top Button */}
      <ScrollToTopBtn />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default WithLayout;