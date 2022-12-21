import { FiChevronLeft } from "react-icons/fi";
const PrevCategory = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:bg-green-500 hover:text-white transition ease-linear rounded-full w-10 h-10 border-2 lg:flex justify-center items-center  absolute -top-14 right-60 hidden "
    >
      <FiChevronLeft className="h-5 w-5" />
    </button>
  );
};

export default PrevCategory;
