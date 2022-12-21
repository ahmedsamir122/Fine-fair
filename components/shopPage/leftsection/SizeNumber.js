import { useState } from "react";
const SizeNumber = (props) => {
  const [showActive, setShowActive] = useState(true);
  const showActiveHandler = () => {
    setShowActive(!showActive);
  };
  return (
    <div
      onClick={showActiveHandler}
      className={`${
        showActive ? "bg-lime-200" : "bg-white"
      } w-20 border flex justify-center items-center h-12 cursor-pointer mb-3`}
    >
      {props.children}
    </div>
  );
};

export default SizeNumber;
