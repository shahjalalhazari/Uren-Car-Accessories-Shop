import { Work_Sans } from "next/font/google";
import "./globals.css";
import 'animate.css';
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import ScrollToTopBtn from "@/components/shared/buttons/ScrollToTopBtn";
import Newsletter from "@/components/shared/Newsletter";
import { CategoryProvider } from "@/context/CategoryContext";

const workSans = Work_Sans(
  {
    subsets: ["latin"],
    weight: ["400", "500","600", "700", "800", "900"]
  }
);
export const metadata = {
    title: {
      default: "Uren Car Accessories Shop",
      template: "%s | Uren Car Accessories Shop"
    },
    description: "Find high-quality car accessories, from premium wheels and tires to interior upgrades and performance parts. Enhance your ride with the latest automotive essentials at unbeatable prices!",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.className} antialiased m-0 p-0`}
      >
        {/* CATEGORY PROVIDER */}
        <CategoryProvider>
          {/* REACT TOASTIFY */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          {/* NAVBAR */}
          <Navbar/>

          {/* CHILDREN */}
          {children}

          {/* SCROLL TO TOP BUTTON */}
          <ScrollToTopBtn/>

          {/* NEWSLETTER */}
          <Newsletter/>

          {/* FOOTER */}
          <Footer />
        </CategoryProvider>
      </body>
    </html>
  );
}
