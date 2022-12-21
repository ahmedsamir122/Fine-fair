import { RiDeleteBin5Line } from "react-icons/ri";
import CartLeftButton from "./CartLeftButton";
const CartEmpty = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div>
        <h1 className="text-3xl font-bold">Your Cart Is Empty</h1>
        <div className="flex justify-center mt-3">
          <RiDeleteBin5Line className=" text-7xl font-normal " />
        </div>
        <div className="flex justify-center mt-2">
          <CartLeftButton />
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
