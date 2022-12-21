import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
const CartLeftButton = () => {
  const router = useRouter();

  const routerHandler = () => {
    router.push("/shop");
  };
  return (
    <div
      onClick={routerHandler}
      className="flex items-center cursor-pointer gap-3 font-bold text-sm font-Rajdhani p-3 border w-fit border-indigo-800 rounded-3xl text-indigo-800 hover:bg-lime-500"
    >
      <AiOutlineArrowLeft />
      <h3>Back To Shopping</h3>
    </div>
  );
};

export default CartLeftButton;
