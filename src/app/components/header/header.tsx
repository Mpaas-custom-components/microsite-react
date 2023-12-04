"use client";

import classes from "./header.module.css";

import { useStateProvider } from "@/context/stateContext";

const Header = () => {
  return (
    <>
      <div className={`${classes.header}`}>Header</div>
    </>
  );
};

export default Header;
