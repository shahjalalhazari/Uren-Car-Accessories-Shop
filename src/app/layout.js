import {Work_Sans } from "next/font/google";
import "./globals.css";
import 'animate.css';
import Footer from './../components/shared/footer/Footer';
import { CarProvider } from "@/context/CarContext";
import AuthProvider from "@/providers/AuthProvider";

const workSans = Work_Sans(
  {
    subsets: ["latin"],
    weight: ["400", "500","600", "700", "800", "900"]
  }
);
export const metadata = {
    title: {
      default: "Uren-Car Accessories Shop",
      template: "%s | Uren-Car Accessories Shop"
    },
    description: "Find high-quality car accessories, from premium wheels and tires to interior upgrades and performance parts. Enhance your ride with the latest automotive essentials at unbeatable prices!",
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} antialiased m-0 p-0`}
      >
        {/* WRAP WHOLE PROJECT WITH AUTH PROVIDER */}
        <AuthProvider>
          {/* WRAP PROJECT WITH CAR PROVIDER CONTEXT */}
          <CarProvider >
            
            {children}

            {/* WHOLE FOOTER  */}
            <Footer />
          </CarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
