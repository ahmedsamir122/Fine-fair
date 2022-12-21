import { FiChevronLeft } from "react-icons/fi";
const PreSlider = (props) => {
  return (
    <div
      onClick={props.onClick}
      className=" absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer"
    >
      <FiChevronLeft className="w-10 h-10 text-white" />
    </div>
  );
};

export default PreSlider;
