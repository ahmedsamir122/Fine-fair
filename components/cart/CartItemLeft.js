import { useSelector } from "react-redux";
import Image from "next/image";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";
import { produceWithPatches } from "immer";

const CartItemLeft = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const item = props.item;

  const increaseHandler = () => {
    dispatch(cartActions.addItemToCart(item));
  };

  const decreaseHandler = () => {
    dispatch(cartActions.removeItemfromCart(item));
  };

  return (
    <div className="flex justify-between ">
      <div className="flex items-center ">
        <div className="relative w-14 h-14">
          <Image
            src={item.img}
            className="w-full"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="pl-3">{item.title}</div>
      </div>
      <div className="flex items-center lg:gap-24 md:gap-12 gap-5">
        <h2 className="text-right">{item.price}</h2>
        <div className="flex items-center justify-center md:gap-4 gap-1">
          <div
            onClick={decreaseHandler}
            className=" border rounded-full p-1 cursor-pointer"
          >
            <AiOutlineMinus className="text-sm" />
          </div>
          <div>{item.quantity}</div>
          <div
            onClick={increaseHandler}
            className=" border rounded-full p-1 cursor-pointer"
          >
            <AiOutlinePlus className="text-sm" />
          </div>
        </div>
        <div>{item.quantity * item.price}</div>
      </div>
    </div>
  );
};

export default CartItemLeft;
