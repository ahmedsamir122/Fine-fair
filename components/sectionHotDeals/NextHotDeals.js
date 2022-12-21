import { FiChevronRight } from "react-icons/fi";

const NextHotDeals = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="hover:bg-green-500 hover:text-white transition ease-linear rounded-full bg-white w-10 h-10 border-2 lg:flex hidden justify-center items-center absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
    >
      <FiChevronRight className="h-5 w-5" />
    </button>
  );
};

export default NextHotDeals;
