import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./CategoryItem.module.css";
import { BsSearch } from "react-icons/bs";
import style from "./BrandItem.module.css";
const Brand = () => {
  const [showDetail, setShowDetail] = useState(false);
  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div className="mb-5">
      <div
        onClick={showDetailHandler}
        className=" flex justify-between items-center border-b pb-3 cursor-pointer"
      >
        <p className=" font-semibold font-Rajdhani text-2xl">Brand</p>
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
            animate={{ height: 350 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.35, type: "tween" }}
            className=" overflow-hidden"
          >
            <div className="py-4 relative">
              <input
                type="text"
                className="border w-full py-2 outline-none pl-2 pr-8"
                placeholder="Search for Products..."
              />
              <BsSearch className=" absolute right-2 top-7" />
            </div>
            <div className={`${style.bar} overflow-auto h-72`}>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="apple" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="apple"
                >
                  Apple
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="samsung" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="samsung"
                >
                  Samsung
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="mi" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="mi"
                >
                  MI
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="one" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="one"
                >
                  One Plus
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="lenovo" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="lenovo"
                >
                  Lenovo
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="hp" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="hp"
                >
                  HP
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="apple" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="apple"
                >
                  Apple
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="samsung" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="samsung"
                >
                  Samsung
                </label>
              </div>
              <div
                className={`flex justify-start items-center py-2 ${style.item}`}
              >
                <input type="checkbox" className={style.black} id="mi" />
                <label
                  className={`${style.label} font-Quicksand text-base font-semibold`}
                  for="mi"
                >
                  MI
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Brand;
