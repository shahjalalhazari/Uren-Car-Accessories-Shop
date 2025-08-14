import React from 'react';
import LgTopNav from './LgTopNav';
import SmTopNav from "./SmTopNav";
import MdTopPart from "./MdTopPart";

const TopPart = ({ navItems }) => {
  return (
    <>
      {/* SMALL SCREEN SIZE */}
      <SmTopNav navItems={navItems} />
      {/* MEDIUM SCREEN SIZE */}
      <MdTopPart navItems={navItems} />
      {/* LARGE SCREEN SIZE */}
      <LgTopNav />
    </>
  );
};

export default TopPart;