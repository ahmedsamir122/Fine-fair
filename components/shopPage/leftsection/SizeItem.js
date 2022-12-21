import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./CategoryItem.module.css";
import { BsSearch } from "react-icons/bs";
import style from "./BrandItem.module.css";
import SizeNumber from "./SizeNumber";
const Size = () => {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <div
        onClick={showDetailHandler}
        className=" flex justify-between items-center border-b pb-3 cursor-pointer mb-4"
      >
        <p className=" font-semibold font-Rajdhani text-2xl">Size</p>
        <AnimatePresence>
          (
          <div className={` ${showDetail ? classes.down : classes.right}`}>
            <IoIosArrowForward />
          </div>
          )
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 120 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, type: "tween" }}
            className=" overflow-hidden"
          >
            <div className=" font-Quicksand text-base flex flex-wrap justify-between ">
              <SizeNumber>4 GB</SizeNumber>
              <SizeNumber>8 GB</SizeNumber>
              <SizeNumber>12 GB</SizeNumber>
              <SizeNumber>16 GB</SizeNumber>
              <SizeNumber>32 GB</SizeNumber>
              <SizeNumber>64 GB</SizeNumber>
              <SizeNumber>128 GB</SizeNumber>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Size;
