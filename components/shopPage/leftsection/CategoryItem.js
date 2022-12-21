import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./CategoryItem.module.css";
const CategoryItem = () => {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <div
        onClick={showDetailHandler}
        className=" flex justify-between items-center border-b pb-3 cursor-pointer"
      >
        <p className=" font-semibold font-Rajdhani text-2xl">Catgory</p>
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
            animate={{ height: 250 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, type: "tween" }}
            className=" overflow-hidden"
          >
            <div className="flex justify-start items-center py-2">
              <input type="checkbox" className="mr-4 block" id="mobiles" />
              <label
                className=" font-Quicksand text-base font-semibold"
                for="mobiles"
              >
                Mobiles
              </label>
            </div>
            <div className="flex justify-start items-center py-2">
              <input type="checkbox" className="mr-4 block" id="accessories" />
              <label
                className=" font-Quicksand text-base font-semibold"
                for="accessories"
              >
                Accessories
              </label>
            </div>
            <div className="flex justify-start items-center py-2">
              <input type="checkbox" className="mr-4 block" id="tablets" />
              <label
                className=" font-Quicksand text-base font-semibold"
                for="tablets"
              >
                Tablets
              </label>
            </div>
            <div className="flex justify-start items-center py-2">
              <input type="checkbox" className="mr-4 block" id="gaming" />
              <label
                className=" font-Quicksand text-base font-semibold"
                for="gaming"
              >
                Gaming
              </label>
            </div>
            <div className="flex justify-start items-center py-2">
              <input type="checkbox" className="mr-4 block" id="laptops" />
              <label
                className=" font-Quicksand text-base font-semibold"
                for="laptops"
              >
                Laptops
              </label>
            </div>
            <div className="flex justify-start items-center py-2">
              <input type="checkbox" className="mr-4 block" id="watches" />
              <label
                className=" font-Quicksand text-base font-semibold"
                for="watches"
              >
                Watches
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryItem;
