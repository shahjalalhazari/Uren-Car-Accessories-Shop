"use client"
import { useEffect, useState } from "react";
import SmBtmNav from "./SmBtmNav";
import MdBtmNav from "./MdBtmNav";
import LgBtmNav from "./LgBtmNav";
import { useSession } from "next-auth/react";


const ResponsiveNavbar = ({navItems, categories}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const session = useSession();

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
    return <LgBtmNav categories={categories} isUser={session} />;
  }
};

export default ResponsiveNavbar;