import React from 'react';
import LgTopNav from './LgTopNav';
import SmTopNav from "./SmTopNav";
import MdTopNav from "./MdTopNav";

const TopPart = ({ navItems }) => {
  return (
    <div className="navbar-top-part">
      {/* SMALL SCREEN SIZE */}
      <SmTopNav navItems={navItems} />
      {/* MEDIUM SCREEN SIZE */}
      <MdTopNav navItems={navItems} />
      {/* LARGE SCREEN SIZE */}
      <LgTopNav />
    </div>
  );
};

export default TopPart;