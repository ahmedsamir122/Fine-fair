import React from "react";
import CategoryItem from "./CategoryItem";
import ColorItem from "./ColorItem";
import BrandItem from "./BrandItem";
import SizeItem from "./SizeItem.js";
import PriceItem from "./PriceItem";
const SearchItem = () => {
  return (
    <React.Fragment>
      <CategoryItem />
      <ColorItem />
      <BrandItem />
      <SizeItem />
      <PriceItem />
    </React.Fragment>
  );
};

export default SearchItem;
