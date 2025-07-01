"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";
import FooterNavColumn from "./FooterNavColumn";
import { usePathname } from "next/navigation";

const FooterTopPart = ({
  infoNavItems,
  CSNavItems,
  extraNavItems,
  myAccountNavItems,
  inventoryNavItems,
}) => {
  const pathname = usePathname();
  const session = useSession();
  const userRole = session.data?.user?.role;

  return (
    <footer
      className={`top-footer-layout ${
        userRole === "admin"
          ? "md:grid-cols-4 lg:grid-cols-7"
          : "md:grid-cols-3 lg:grid-cols-6"
      }`}
    >
      {/* Column 1 */}
      <aside className="footer-aside">
        <Image
          src={"/images/menu/logo/1.png"}
          width={200}
          height={100}
          alt="UREN"
        />
        <p className="text-sm">
          We are a team of designers and developers that create high quality
          HTML Template & Woo-commerce, Shopify Theme.
        </p>
        <div className="space-y-3 text-sm">
          <p>
            <span className="footer-contacts-heading">Address: </span>233/26
            Ewrat Holdings Inc. Al Waha St. Al Qouz 3. Al Quoz, Dubai - UAE.
          </p>
          <p>
            <span className="footer-contacts-heading">Call Us: </span>+971 58
            919 6282
          </p>
          <p>
            <span className="footer-contacts-heading">Email: </span>
            shahjalalhazari1@gmail.com
          </p>
        </div>
        <div className="flex gap-x-4">
          <Link
            href={"https://www.linkedin.com/in/shahjalal-hazari-968163230/"}
            target="_blank"
            className="bg-[#0077B5] footer-actions"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={"https://github.com/shahjalalhazari"}
            target="_blank"
            className="bg-[#181717] footer-actions"
          >
            <FaGithub />
          </Link>
          <Link
            href={"https://www.facebook.com/shahjalalhazari0"}
            target="_blank"
            className="bg-[#1877F2] footer-actions"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={"https://www.instagram.com/shahjalalhazari/"}
            target="_blank"
            className="bg-[#E4405F] footer-actions"
          >
            <FaInstagram />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className=" bg-[#000] footer-actions"
          >
            <FaXTwitter />
          </Link>
          <Link href={"/"} target="_blank" className="bg-[#000] footer-actions">
            <FaThreads />
          </Link>
        </div>
      </aside>

      {/* Column 2 | INFORMATION */}
      <FooterNavColumn title={"Information"} navItems={infoNavItems} />

      {/* Column 3 | CUSTOMER SERVICES */}
      <FooterNavColumn title={"Customer Services"} navItems={CSNavItems} />

      {/* Column 4 | EXTRAS */}
      <FooterNavColumn title={"Extras"} navItems={extraNavItems} />

      {/* Column 5 | ACCOUNT */}
      <nav className="footer-nav">
        <h6 className="footer-nav-heading">My Account</h6>
        <div></div>
        <ul className="footer-nav-item-list">
          {session.status === "authenticated" ? (
            <>
              {myAccountNavItems?.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    pathname === item.path && "footer-active-nav-link"
                  }`}
                >
                  <Link href={item.path} className="footer-nav-link">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="footer-nav-link cursor-pointer">
                <p onClick={() => signOut()}>Logout</p>
              </li>
            </>
          ) : (
            <li
              className={`${
                pathname.split("/").includes("signin") &&
                "footer-active-nav-link"
              }`}
            >
              <Link href={"/user/signin"} className="footer-nav-link">
                Sign In | Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Column 6 | INVENTORY */}
      {userRole === "admin" && (
        <FooterNavColumn title={"Inventory"} navItems={inventoryNavItems} />
      )}
    </footer>
  );
};

export default FooterTopPart;
