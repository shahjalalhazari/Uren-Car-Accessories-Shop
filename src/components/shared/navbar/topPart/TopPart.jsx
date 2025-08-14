import React from 'react';
import LgTopNav from './LgTopNav';
import SmTopNav from "./SmTopNav";

const TopPart = ({ navItems }) => {
  return (
    <>
      {/* SMALL SCREEN SIZE */}
      <SmTopNav navItems={navItems} />
      {/* LARGE SCREEN SIZE */}
      <LgTopNav />
    </>
  );
};

export default TopPart;