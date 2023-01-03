import SectionPhoto from "./sectionPhoto/SectionPhoto";
import React from "react";
import SectionTitle from "./sectionTitle/SectionTitle";
import SectionProducts from "./sectionProducts/SectionProducts";
import { useState } from "react";
import ModalAddToCart from "../../modal/ModalAddToCart";
import ModalRemoveCart from "../../modal/ModalRemoveCart";
const RightSection = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNoteAddCart, setshowNoteAddCart] = useState(false);
  const [showNoteRemoveCart, setshowNoteRemoveCart] = useState(false);

  const showGridHandler = () => {
    setShowGrid(true);
    setShowMenu(false);
  };

  const showMenuHandler = () => {
    setShowGrid(false);
    setShowMenu(true);
  };

  const showNoteAddCartHandler = () => {
    setshowNoteAddCart(true);
    setTimeout(() => {
      setshowNoteAddCart(false);
    }, 2000);
  };
  const showNoteRemoveCartHandler = () => {
    setshowNoteRemoveCart(true);
    setTimeout(() => {
      setshowNoteRemoveCart(false);
    }, 2000);
  };

  console.log(showGrid, showMenu);

  return (
    <React.Fragment>
      <SectionPhoto />
      <SectionTitle onShowGrid={showGridHandler} onShowMenu={showMenuHandler} />
      <SectionProducts
        grid={showGrid}
        menu={showMenu}
        onNote={showNoteAddCartHandler}
        offNote={showNoteRemoveCartHandler}
      />
      <ModalAddToCart show={showNoteAddCart} />
      <ModalRemoveCart show={showNoteRemoveCart} />
    </React.Fragment>
  );
};

export default RightSection;
