import React from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import BottomHeader from "./BottomHeader";
const Header = () => {
  return (
    <section className="w-full">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </section>
  );
};

export default Header;
