import React from "react";
import CategoryItem from "./CategoryItem";
import ColorItem from "./ColorItem";
import BrandItem from "./BrandItem";
import SizeItem from "./SizeItem.js";
import PriceItem from "./PriceItem";
const SearchItem = (props) => {
  return (
    <React.Fragment>
      <CategoryItem onFilter={props.onFilter} />
      <ColorItem />
      <BrandItem />
      <SizeItem />
      <PriceItem />
    </React.Fragment>
  );
};

export default SearchItem;
