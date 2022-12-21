import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./CategoryItem.module.css";
import { BsSearch } from "react-icons/bs";
import style from "./BrandItem.module.css";
const Price = () => {
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
        <p className=" font-semibold font-Rajdhani text-2xl">
          Price Range (QR)
        </p>
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
            animate={{ height: 50 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, type: "tween" }}
            className=" overflow-hidden"
          >
            <div>
              <input type="range" className="mx-auto border block w-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Price;
