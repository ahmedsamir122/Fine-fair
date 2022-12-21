import { HiViewGrid } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
const SectionTitle = (props) => {
  const showGridHandler = () => {
    props.onShowGrid();
  };

  const showMenuHandler = () => {
    props.onShowMenu();
  };

  return (
    <div className="flex justify-between items-center p-4 border rounded-lg">
      <div>
        <h2 className=" text-xl font-semibold font-Rajdhani">SHOP</h2>
        <h2 className=" text-md font-semibold font-Quicksand">
          {"HOME > SHOP"}
        </h2>
      </div>
      <ul className=" list-none flex items-center">
        <li className="ml-4">View</li>
        <li onClick={showGridHandler} className="ml-4 cursor-pointer">
          <HiViewGrid />
        </li>
        <li onClick={showMenuHandler} className="ml-4 cursor-pointer">
          <AiOutlineMenu />
        </li>
        <li className=" pl-10 border-l ml-4">
          <select>
            <option>default Sorting</option>
            <option>Sort By Price</option>
            <option>Sort By Rating</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default SectionTitle;
