"use client"
import { useEffect, useState } from "react";
import SmBtmNav from "./SmBtmNav";
import MdBtmNav from "./MdBtmNav";
import LgBtmNav from "./LgBtmNav";


const ResponsiveNavbar = ({navItems, categories}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // TRACK WINDOW WIDTH.
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    // SET INITIAL WIDTH.
    setWindowWidth(window.innerWidth);

    // ADD EVENT LISTENER.
    window.addEventListener('resize', handleResize);

    // CLEAN UP THE EVENT LISTENER.
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);

  // RENDER BASED ON WINDOW WIDTH.
  if (windowWidth < 768) {
    return <SmBtmNav categories={categories} />;
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    return <MdBtmNav categories={categories} />;
  } else {
    return <LgBtmNav navItems={navItems} categories={categories} />;
  }
};

export default ResponsiveNavbar;