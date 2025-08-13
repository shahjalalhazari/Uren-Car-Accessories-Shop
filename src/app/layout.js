import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        {children}
      </body>
    </html>
  );
}
