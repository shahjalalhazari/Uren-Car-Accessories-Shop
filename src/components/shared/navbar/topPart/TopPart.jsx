"use client"
import LgTopNav from './LgTopNav';
import SmTopNav from "./SmTopNav";
import MdTopNav from "./MdTopNav";
import { useSession } from 'next-auth/react';

const TopPart = ({ navItems }) => {
  const session = useSession();
  
  return (
    <div className="navbar-top-part">
      {/* SMALL SCREEN SIZE */}
      <SmTopNav navItems={navItems} isUser={session}/>
      {/* MEDIUM SCREEN SIZE */}
      <MdTopNav navItems={navItems} isUser={session} />
      {/* LARGE SCREEN SIZE */}
      <LgTopNav isUser={session} />
    </div>
  );
};

export default TopPart;