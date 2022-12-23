import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import classes from "./CategoryItem.module.css";
import { useQuery } from "react-query";
import { TailSpin } from "react-loader-spinner";
import CategoryItemOne from "./CategoryItemOne";
import { useSelector } from "react-redux";
const CategoryItem = (props) => {
  const [showDetail, setShowDetail] = useState(false);
  const filter = useSelector((state) => state.filter.filter);
  console.log(filter);
  const showDetailHandler = () => {
    setShowDetail(!showDetail);
  };

  const fetchCategories = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    return res.json();
  };
  const { isLoading, data, isError, error } = useQuery(
    "categories",
    fetchCategories
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-52">
        <TailSpin
          height="20"
          width="20"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (isError) {
    return <di>something went wrong .....</di>;
  }

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
            className=" overflow-auto"
          >
            {data.map((category, index) => (
              <CategoryItemOne
                key={index}
                name={category}
                onFilter={props.onFilter}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryItem;
