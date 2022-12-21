import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./CategoryItem.module.css";
const ColorItem = () => {
  const [showDetail, setShowDetail] = useState(true);
  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <div
        onClick={showDetailHandler}
        className=" flex justify-between items-center border-b pb-3 cursor-pointer"
      >
        <p className=" font-semibold font-Rajdhani text-2xl">Color</p>
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
            className=" overflow-hidden pl-1"
          >
            <label
              className={`flex justify-start before:bg-black items-center py-2 ${classes.item}`}
              for="black"
            >
              <input type="checkbox" className={classes.black} id="black" />
              <div className=" font-Quicksand text-base font-semibold">
                Black
              </div>
            </label>
            <label
              className={`flex justify-start before:bg-blue-700 items-center py-2 ${classes.item}`}
              for="blue"
            >
              <input type="checkbox" className={classes.blue} id="blue" />
              <div className=" font-Quicksand text-base font-semibold">
                Blue
              </div>
            </label>
            <label
              className={`flex justify-start before:bg-green-700 items-center py-2 ${classes.item}`}
              for="green"
            >
              <input type="checkbox" className={classes.green} id="green" />
              <div className=" font-Quicksand text-base font-semibold">
                Green
              </div>
            </label>
            <label
              className={`flex justify-start before:bg-yellow-500 items-center py-2 ${classes.item}`}
              for="yellow"
            >
              <input type="checkbox" className={classes.yellow} id="yellow" />
              <div className=" font-Quicksand text-base font-semibold">
                Yellow
              </div>
            </label>
            <label
              className={`flex justify-start before:bg-red-500 items-center py-2 ${classes.item}`}
              for="red"
            >
              <input type="checkbox" className={classes.red} id="red" />
              <div className=" font-Quicksand text-base font-semibold">Red</div>
            </label>
            <label
              className={`flex justify-start items-center py-2 ${classes.item}`}
              for="white"
            >
              <input type="checkbox" className={classes.white} id="white" />
              <div className=" font-Quicksand text-base font-semibold">
                White
              </div>
            </label>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ColorItem;
