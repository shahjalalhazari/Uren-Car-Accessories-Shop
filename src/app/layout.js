import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import ScrollToTopBtn from "@/components/shared/ScrollToTopBtn";
import NewsletterSection from "@/components/shared/NewsletterSection";
import Footer from "@/components/shared/footer/Footer";

const workSans = Work_Sans({
  subsets: ['latin'],
  weights: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Uren - Car Accessories Shop",
    template: "%s | Uren - Car Accessories Shop"
  },
  description: "UREN is a cutting-edge car accessories shop dedicated to enhancing the driving experience for car enthusiasts and everyday drivers alike. The brand focuses on offering high-quality, stylish, and innovative automotive products designed to upgrade vehicle aesthetics, comfort, safety, and performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${workSans.className} antialiased`}
      >
        {/* Full Navbar */}
        <Navbar/>
        {children}
        {/* Scroll To Top Button */}
        <ScrollToTopBtn />
        {/* Newsletter Section */}
        <NewsletterSection />
        {/* Footer */}
        <Footer/>
      </body>
    </html>
  );
}
