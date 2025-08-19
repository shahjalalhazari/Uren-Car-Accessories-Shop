"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterNavColumn = ({ title, navItems }) => {
  const pathname = usePathname();
  
  return (
    <nav className="footer-nav">
      <h6 className="footer-nav-heading">{title}</h6>
      <div></div>
      <ul className="footer-nav-item-list">
        {navItems?.map((item) => (
          <li
            key={item.id}
            className={`${pathname === item.path && "footer-active-nav-link"}`}
          >
            <Link href={item.path} className="footer-nav-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavColumn;
