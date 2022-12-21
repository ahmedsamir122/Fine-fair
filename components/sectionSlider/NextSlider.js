import { FiChevronRight } from "react-icons/fi";
const NextSlider = (props) => {
  return (
    <div
      onClick={props.onClick}
      className=" absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
    >
      <FiChevronRight className="w-10 h-10 text-white" />
    </div>
  );
};

export default NextSlider;
