"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
  FaXTwitter,
} from "react-icons/fa6";
import FooterNavColumn from './FooterNavColumn';

const FooterTopPart = ({ infoNavItems, CSNavItems, extraNavItems, myAccountNavItems }) => {

  return (
    <footer
      className={`top-footer-layout`}
    >
      {/* Column 1 */}
      <aside className="footer-aside">
        <Image
          className='footer-logo'
          src={"/images/menu/logo/1.png"}
          width={200}
          height={100}
          alt="UREN"
        />
        <p className="text-sm">
          We are a team of designers and developers that create high quality
          HTML Template & Woo-commerce, Shopify Theme.
        </p>
        <div className="footer-contacts">
          <p>
            <span className="footer-contact-heading">Address: </span>233/26
            Ewrat Holdings Inc. Al Waha St. Al Qouz 3. Al Quoz, Dubai - UAE.
          </p>
          <p>
            <span className="footer-contact-heading">Call Us: </span>+971 58
            919 6282
          </p>
          <p>
            <span className="footer-contact-heading">Email: </span>
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
      <FooterNavColumn title={"Account"} navItems={myAccountNavItems} />
    </footer>
  );
};

export default FooterTopPart;