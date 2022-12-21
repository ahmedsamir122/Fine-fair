import { useSelector } from "react-redux";
const CartTopLeft = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="flex justify-between items-center pb-4">
      <h1 className=" text-4xl font-Rajdhani font-bold">CART</h1>
      {cart.length > 0 && (
        <h3 className=" text-sm font-Quicksand font-semibold text-lime-500">
          {cart.length} ITEMS
        </h3>
      )}
    </div>
  );
};

export default CartTopLeft;
